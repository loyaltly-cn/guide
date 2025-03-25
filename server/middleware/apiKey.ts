import { Context, Next } from 'hono'

const API_KEY = '16e809101a48d214c91b95518d60c117' // 建议使用环境变量

export async function apiKeyMiddleware(c: Context, next: Next) {
  const apiKey = c.req.header('X-API-Key')
  
  if (!apiKey || apiKey !== API_KEY) {
    return c.json({ error: 'auth key fail' }, 403)
  }

  await next()
}