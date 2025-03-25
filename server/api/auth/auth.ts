import { Context } from 'hono'
// 验证 token 是否有效
export const GET = async (c: Context) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '')
  
  if (!token) {
    return c.json({ valid: false })
  }

  try {
    const payload = await import('../../utils/jwt').then(m => m.verifyToken(token))
    return c.json({ 
      valid: true,
      user: payload
    })
  } catch (error) {
    return c.json({ valid: false })
  }
}