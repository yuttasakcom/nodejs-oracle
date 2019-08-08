import { route, HttpMethod } from '@spksoft/koa-decorator';
import connectOracle from '../../database/oracle'

@route('/tickets')
class Tickets {
  @route('/', HttpMethod.GET)
  async getTickets(ctx) {
    const connection = await connectOracle()

    try {
      const result = await connection.execute("select * from HR.JOBS");
      console.log(result.rows);
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