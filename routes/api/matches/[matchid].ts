import { RouteConfig, Handlers, HandlerContext } from "$fresh/server.ts";
import { StatusCodes, ReasonPhrases } from "x/https_status_codes@v1.2.0/mod.ts"
import * as steamy from 'https://deno.land/x/steamy@v0.03c/mod.ts';

export const config: RouteConfig = {
  routeOverride: "/api/matches/:matchid?/:path?"
};

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext): Promise<Response> {
    
    const { matchid, path } = ctx.params;
    const { searchParams } = new URL(req.url);
    if(!matchid)
      return new Response(JSON.stringify(await steamy.Dota2.Steam.IDota2Match.getMatchHistory({
      min_players: searchParams.has('min_players') ? +searchParams.get('min_players')! : 10,
      matches_requested: searchParams.has('matches_requested') ? +searchParams.get('matches_requested')! : 20,
      account_id: searchParams.has('account_id') ? searchParams.get('account_id')! : undefined,
      game_mode: searchParams.has('game_mode') ? +searchParams.get('game_mode')! : steamy.Dota2.Steam.GameMode.AllPick,
      hero_id: searchParams.has('hero_id') ? +searchParams.get('hero_id')! : undefined,
      league_id: searchParams.has('league_id') ? +searchParams.get('league_id')! : undefined,
      skill: searchParams.has('skill') ? +searchParams.get('skill')! : undefined,
      start_at_match_id: searchParams.has('start_at_match_id') ? +searchParams.get('start_at_match_id')! : undefined,
      tournament_games_only: searchParams.has('tournament_games_only') ? Boolean(searchParams.get('tournament_games_only')) : false
    })), {
      headers: {
        'content-type': 'application/json'
      }
    })
    return new Response(null)
  }
}