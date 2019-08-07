import { route, HttpMethod } from '@spksoft/koa-decorator';

@route('/tickets')
class Tickets {
  @route('/', HttpMethod.GET)
  async getTickets(ctx) {
    ctx.body = "Tickets";
  }
}