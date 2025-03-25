import { Context } from 'hono'
import client from 'utils/ezclient'

export const GET = async (c: Context) =>  c.json(await client.query({
    name:'test',
    fields:['id','content']
  }))