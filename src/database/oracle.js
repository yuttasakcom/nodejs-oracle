import oracledb from 'oracledb'

export default async () => {

  return await oracledb.getConnection(  {
    user : "system",
    password : "oracle",
    connectString : "localhost/xe"
  });
}