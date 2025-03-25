import { generateToken } from '../../../utils/jwt'
import { Context } from 'hono'

// 模拟用户数据，实际项目中应该从数据库获取
const users = [
  {
    id: '1',
    username: 'admin',
    password: '123456'
  }
]

// Web端登录
export const webPOST = async (c: Context) => {
  try { 
    const { username, password } = await c.req.json()

    if (!username || !password) {
      return c.json({ error: '用户名和密码不能为空' }, 400)
    }

    const user = users.find(u => u.username === username && u.password === password)

    if (!user) {
      return c.json({ error: '用户名或密码错误' }, 401)
    }

    const token = generateToken({
      userId: user.id,
      username: user.username,
      platform: 'web'
    })

    return c.json({
      token,
      user: {
        id: user.id,
        username: user.username
      }
    })
  } catch (error) {
    return c.json({ error: '登录失败' }, 500)
  }
}

// 小程序登录
export const mpPOST = async (c: Context) => {
  try { 
    const { username, password } = await c.req.json()

    if (!username || !password) {
      return c.json({ error: '用户名和密码不能为空' }, 400)
    }

    const user = users.find(u => u.username === username && u.password === password)

    if (!user) {
      return c.json({ error: '用户名或密码错误' }, 401)
    }

    const token = generateToken({
      userId: user.id,
      username: user.username,
      platform: 'mp'
    })

    return c.json({
      token,
      user: {
        id: user.id,
        username: user.username
      }
    })
  } catch (error) {
    return c.json({ error: '登录失败' }, 500)
  }
}
  