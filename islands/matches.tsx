import * as steamy from 'https://deno.land/x/steamy@v0.03c/mod.ts';
import { useEffect, useState } from "preact/hooks";
import MatchRow from '../components/MatchRow.tsx';

interface MatchesProps {
  data?: unknown;
  min_players?: number;
  matches_requested?: number;
  account_id?: number;
  game_mode?: steamy.Dota2.Steam.GameMode;
  hero_id?: number;
  league_id?: number;
  skill?: steamy.Dota2.Steam.Skill;
  start_at_match_id?: number;
  tournament_games_only?: boolean;
}

export interface match {
  match_id: number;
  match_seq_num: number;
  start_time: number;
  lobby_type: steamy.Dota2.Steam.LobbyType;
  radiant_team_id: number;
  dire_team_id: number;
  players: player[];
}

interface player {
  account_id: number;
  player_slot: number;
  team_number: number;
  team_slot: number;
  hero_id: number;
}

export interface result {
  status: number;
  num_results: number;
  total_results: number;
  results_remaining: number;
  matches: match[]
}

export default function Matches(props: MatchesProps) {
  const url = new URL('http://localhost/api/matches');
  for(const [name, value] of Object.entries(props)) url.searchParams.set(name, `${value}`);
  const [matches, setMatches] = useState({});
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMatches(data)
      })
      .catch(e => console.log(e))
  }, [])
  return <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>DURATION</th>
        <th>RADIANT</th>
        <th>DIRE</th>
      </tr>
    </thead>
    <tbody>
      {
        !(matches as unknown as result).matches ? null : (matches as unknown as result).matches.sort((a,b) => a.match_seq_num - b.match_seq_num).map(match => <MatchRow data={match} />)
      }
    </tbody>
  </table>
}