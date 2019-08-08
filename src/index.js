import Koa from 'koa'
import { load } from '@spksoft/koa-decorator'
import {resolve} from 'path'
import oracledb from 'oracledb'

const app = new Koa()

const PORT = process.env.PORT || "3800"

const oracleConnection = (err, connection) => {
  if (err) { console.error("oracleConnection: err =====>", err); return; }

  console.log('Connection was successful!')

  connection.execute("select * from HR.JOBS", (err, result) => {
    if (err) { console.error("connection.execute: err =====>", err); return; }

    console.log("result ======>",result)
  })

}

oracledb.getConnection({
    user : "system",
    password : "oracle",
    connectString : "localhost/xe"
 }, oracleConnection)

const apiRoutes = load(resolve(__dirname, 'controllers'), '.controller.js')

app.use(apiRoutes.routes()).use(apiRoutes.allowedMethods())
app.listen(PORT)

console.log(`Server running at http://localhost:${PORT}`)