import { Hono } from 'hono'
import { readdir } from 'fs/promises'
import { join } from 'path'
import { authMiddleware } from '../middleware/auth'
import { apiKeyMiddleware } from '../middleware/apiKey'

export async function fileBasedRouting(app: Hono) {
  const baseDir = join(process.cwd(), 'api')
  
  async function registerRoutes(dir: string, basePath: string = '') {
    const entries = await readdir(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      const routePath = join(basePath, entry.name.replace('.ts', ''))
      
      if (entry.isDirectory()) {
        await registerRoutes(fullPath, routePath)
      } else if (entry.isFile() && entry.name.endsWith('.ts')) {
        const route = await import(fullPath)
        const path = routePath.replace(/\\/g, '/').replace(/\[(\w+)\]/g, ':$1')
        
        if (route.GET) app.get(`/api/${path}`, apiKeyMiddleware, route.GET)
        if (route.POST) app.post(`/api/${path}`, apiKeyMiddleware, authMiddleware, route.POST)
        if (route.PUT) app.put(`/api/${path}`, apiKeyMiddleware, authMiddleware, route.PUT)
        if (route.DELETE) app.delete(`/api/${path}`, apiKeyMiddleware, authMiddleware, route.DELETE)
      }
    }
  }

  await registerRoutes(baseDir)
}