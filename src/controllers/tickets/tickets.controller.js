import { route, HttpMethod } from '@spksoft/koa-decorator';
import connectOracle from '../../database/oracle'

@route('/tickets')
class Tickets {
  @route('/', HttpMethod.GET)
  async getTickets(ctx) {
    const connection = await connectOracle()

    try {
      const result = await connection.execute(`select * from CFM2.U_WF_ACTIVE where READ_FLAG=:rf`, ['Y'], {maxRows: 10})
      console.log(result.rows.length);
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
    
    ctx.body = "Tickets";
  }
}