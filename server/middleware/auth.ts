import { Context, Next } from 'hono'
import { verifyToken } from '../utils/jwt'

const API_KEY = 'your-api-key-here' // 建议使用环境变量

export async function authMiddleware(c: Context, next: Next) {

  // GET 请求或 auth 路径不需要 token 验证
  if (c.req.method === 'GET' || c.req.path.startsWith('/api/auth')) {
    return next()
  }

  const token = c.req.header('Authorization')?.replace('Bearer ', '')
  
  if (!token) {
    return c.json({ error: '未授权访问' }, 401)
  }

  try {
    const payload = verifyToken(token)
    c.set('user', payload)
    await next()
  } catch (error) {
    return c.json({ error: '无效的 token' }, 401)
  }
}