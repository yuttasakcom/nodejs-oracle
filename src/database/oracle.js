import oracledb from 'oracledb'

export default async () => {

  return await oracledb.getConnection(  {
    user : process.env.ORACLE_USER,
    password : process.env.ORACLE_PASSWORD,
    connectString : process.env.ORACLE_CONNECT_STRING
  })
}