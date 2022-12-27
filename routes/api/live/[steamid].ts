import { RouteConfig, Handlers, HandlerContext } from "$fresh/server.ts";
import { StatusCodes, ReasonPhrases } from "x/https_status_codes@v1.2.0/mod.ts"
import * as steamy from 'https://deno.land/x/steamy@v0.03c/mod.ts';

export const config: RouteConfig = {
  routeOverride: "/api/live/:steamid?"
};

export interface Game {
  activate_time: number;
  deactivate_time: number;
  server_steam_id: string;
  lobby_id: string;
  league_id: number;
  lobby_type: number;
  game_time: number;
  delay: number;
  spectators: number;
  game_mode: number;
  average_mmr: number;
  match_id: string;
  series_id: number;
  team_name_radiant: string;
  team_name_dire: string;
  team_logo_radiant: string;
  team_logo_dire: string;
  team_id_radiant: number;
  team_id_dire: number;
  sort_score: number;
  last_update_time: number;
  radiant_lead: number;
  radiant_score: number;
  dire_score: number;
  players: Player[];
  building_state: number;
  weekend_tourney_tournament_id: number;
  weekend_tourney_division: number;
  weekend_tourney_skill_level: number;
  weekend_tourney_bracket_round: number;
  custom_game_difficulty: number;
}

export interface Player {
  account_id: number;
  hero_id: number;
}

export interface Search {
  search_key: string;
  league_id: number;
  hero_id: number;
  start_game: number;
  num_games: number;
  game_list_index: number;
  game_list: Game[];
}

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext): Promise<Response> {
    const { steamid } = ctx.params;
    if(!steamid) {
      const resp = await fetch(`https://api.steampowered.com/IDOTA2Match_570/GetTopLiveGame/v1?key=${Deno.env.get('api_key_steam')}&partner=0`);
      const result: Search = await resp.json();
      return new Response(JSON.stringify(result), {
        headers: {
          'content-type': 'application/json'
        }
      });
    }
    return new Response(null);
  }
}