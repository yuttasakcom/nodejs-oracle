import '@babel/polyfill'
import Koa from 'koa'
import { load } from '@spksoft/koa-decorator'
import { resolve } from 'path'
import oracledb from 'oracledb'

const app = new Koa()

const PORT = process.env.PORT || "3800"

const apiRoutes = load(resolve(__dirname, 'controllers'), '.controller.js')

app.use(apiRoutes.routes()).use(apiRoutes.allowedMethods())
app.listen(PORT)

console.log(`Server running at http://localhost:${PORT}`)