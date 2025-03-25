import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from 'hono/cors'
import { fileBasedRouting } from './utils/router'

const app = new Hono()
app.use('/*', cors())

// 注册文件系统路由
fileBasedRouting(app)

serve({
  fetch: app.fetch,
  port: 3000
})

console.log('Server is running on http://localhost:3000')