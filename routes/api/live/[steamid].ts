import { RouteConfig, Handlers, HandlerContext } from "$fresh/server.ts";
import { StatusCodes, ReasonPhrases } from "x/https_status_codes@v1.2.0/mod.ts"
import * as steamy from "https://raw.githubusercontent.com/ybabts/steamy/b78d003d716a51858a9b7809716fe7715b0d24fa/src/mod.ts";

steamy.setAPIKeys({
  steam: Deno.env.get('api_key_steam')
})

export const config: RouteConfig = {
  routeOverride: "/api/live/:steamid?"
};

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext): Promise<Response> {
    const { steamid } = ctx.params;
    if(!steamid) {
      return new Response(JSON.stringify(await steamy.Dota2.getTopLiveGame(1)), {
        headers: { 'content-type': 'application/json' },
        status: StatusCodes.OK,
        statusText: ReasonPhrases.OK
      });
    }
    return new Response(JSON.stringify(await steamy.Dota2.getRealtimeStats(steamid)), {
      headers: { 'content-type': 'application/json' },
      status: StatusCodes.OK,
      statusText: ReasonPhrases.OK
    })
  }
}