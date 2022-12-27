import { RouteConfig, Handlers, HandlerContext } from "$fresh/server.ts";
import { StatusCodes, ReasonPhrases } from "x/https_status_codes@v1.2.0/mod.ts"
import * as steamy from 'https://deno.land/x/steamy@v0.03c/mod.ts';

export const config: RouteConfig = {
  routeOverride: "/api/users/:steamids/:path?"
};

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext): Promise<Response> {
    
    const { steamids, path } = ctx.params;
    const { searchParams } = new URL(req.url);
    if(!path)
      return new Response(JSON.stringify(await steamy.WebAPI.ISteamUser.getPlayerSummaries(steamids.split(','))), {
      headers: {
        'content-type': 'application/json'
      }
    })
    return new Response(null)
  }
}