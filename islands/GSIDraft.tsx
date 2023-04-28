import { PropertySignature } from 'https://deno.land/x/ts_morph@16.0.0/ts_morph.js';
import { h, FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import * as steamy from "x/steamy@v0.05a/mod.ts"
import { JSX } from "https://esm.sh/preact@10.11.0";

interface Team {
  // home team means first pick
  home_team: boolean;
  pick0_id: number;
  pick1_id: number;
  pick2_id: number;
  pick3_id: number;
  pick4_id: number;
  ban0_id: number;
  ban1_id: number;
  ban2_id: number;
  ban3_id: number;
  ban4_id: number;
  ban5_id: number;
  ban6_id: number;
}

const GSIDraft: FunctionComponent<{accountid: string}> = ({ accountid }) => {
  const [draft, setDraft] = useState<{
    activeteam: number;
    pick: boolean;
    activeteam_time_remaining: number;
    radiant_bonus_time: number;
    dire_bonus_time: number;
    team2: Team;
    team3: Team;
  }>();

  useEffect(() => {
    const connectWebSocket = () => {
      // Replace this URL with your WebSocket server's address
      const websocketUrl = 'ws://dotatruesight.com/api/gsi?accountid='+accountid;
      const websocket = new WebSocket(websocketUrl);

      websocket.onmessage = (event: MessageEvent) => {
        try {
          const gsi = JSON.parse(event.data);
          if(gsi.draft) setDraft(gsi.draft);
        } catch(e) {
          console.log(e);
        }
      };

      websocket.onclose = () => {
        // Reconnect after a delay if the connection is lost
        setTimeout(() => connectWebSocket(), 5000);
      };

      return () => {
        websocket.close();
      };
    };

    const cleanup = connectWebSocket();
    return () => {
      cleanup();
    };
  }, []);
  // if(draft) return <div style="background-image: url('/draft-radiant-starting.png')" class='w-50'>
  //   <HeroPortrait hero_id={draft!.team2.pick0_id} />
  //   <HeroPortrait hero_id={draft!.team2.pick1_id} />
  //   <HeroPortrait hero_id={draft!.team2.pick2_id} />
  //   <HeroPortrait hero_id={draft!.team2.pick3_id} />
  //   <HeroPortrait hero_id={draft!.team2.pick4_id} />
  //   <HeroPortrait hero_id={draft!.team3.pick0_id} />
  //   <HeroPortrait hero_id={draft!.team3.pick1_id} />
  //   <HeroPortrait hero_id={draft!.team3.pick2_id} />
  //   <HeroPortrait hero_id={draft!.team3.pick3_id} />
  //   <HeroPortrait hero_id={draft!.team3.pick4_id} />
  // </div>
  if(!draft) return <div></div>;
  if(!draft.team2 || !draft.team3) return <div></div>;
  return <div class="children:absolute children:z-0">
    <HeroPortrait hero_id={draft!.team2.pick0_id} class="w-[13.2vh] top-[18.2vh] left-[8.6vh] "/>
    <HeroPortrait hero_id={draft!.team3.pick0_id} class="w-[13.2vh] top-[18.2vh] left-[34.7vh]"/>
    <HeroPortrait hero_id={draft!.team3.pick1_id} class="w-[13.2vh] top-[26.2vh] left-[34.7vh]"/>
    <HeroPortrait hero_id={draft!.team2.pick1_id} class="w-[13.2vh] top-[26.2vh] left-[8.6vh]"/>
    <HeroPortrait hero_id={draft!.team2.pick2_id} class="w-[13.2vh] top-[52.2vh] left-[8.6vh]"/>
    <HeroPortrait hero_id={draft!.team3.pick2_id} class="w-[13.2vh] top-[52.2vh] left-[34.7vh]"/>
    <HeroPortrait hero_id={draft!.team3.pick3_id} class="w-[13.2vh] top-[60.2vh] left-[34.7vh]"/>
    <HeroPortrait hero_id={draft!.team2.pick3_id} class="w-[13.2vh] top-[60.2vh] left-[8.6vh]"/>
    <HeroPortrait hero_id={draft!.team2.pick4_id} class="w-[13.2vh] top-[81vh] left-[8.6vh]"/>
    <HeroPortrait hero_id={draft!.team3.pick4_id} class="w-[13.2vh] top-[81vh] left-[34.7vh]"/>

    <HeroPortrait hero_id={draft!.team2.ban0_id} class="w-[8.5vh] top-[6.6vh] left-[13.3vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team3.ban0_id} class="w-[8.5vh] top-[6.6vh] left-[34.7vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team2.ban1_id} class="w-[8.5vh] top-[12vh] left-[13.3vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team3.ban1_id} class="w-[8.5vh] top-[12vh] left-[34.7vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team2.ban2_id} class="w-[8.5vh] top-[35.25vh] left-[13.3vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team3.ban2_id} class="w-[8.5vh] top-[35.25vh] left-[34.7vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team2.ban3_id} class="w-[8.5vh] top-[40.65vh] left-[13.3vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team3.ban3_id} class="w-[8.5vh] top-[40.65vh] left-[34.7vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team2.ban4_id} class="w-[8.5vh] top-[46.1vh] left-[13.3vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team3.ban4_id} class="w-[8.5vh] top-[46.1vh] left-[34.7vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team2.ban5_id} class="w-[8.5vh] top-[69.1vh] left-[13.3vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team3.ban5_id} class="w-[8.5vh] top-[69.1vh] left-[34.7vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team2.ban6_id} class="w-[8.5vh] top-[74.45vh] left-[13.3vh]" style="filter: grayscale(100%)"/>
    <HeroPortrait hero_id={draft!.team3.ban6_id} class="w-[8.5vh] top-[74.45vh] left-[34.7vh]" style="filter: grayscale(100%)"/>
    <img src='/draft-radiant-starting.png' class='h-[100vh] z-10'/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[7.4vh] left-[11.8vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[12.8vh] left-[11.8vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[7.4vh] left-[42.3vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[12.8vh] left-[42.3vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[36.2vh] left-[42.3vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[36.2vh] left-[11.8vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[41.6vh] left-[42.3vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[41.6vh] left-[11.8vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[47vh] left-[42.3vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[47vh] left-[11.8vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[70vh] left-[42.3vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[70vh] left-[11.8vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[75.4vh] left-[42.3vh] z-20"/>
    <img src='/dota-ban.png' class="w-[2.2vh] top-[75.4vh] left-[11.8vh] z-20"/>
  </div>
};


export interface HeroPortrait_Props {
  hero_id: number;
}

function HeroPortrait(props: JSX.HTMLAttributes<HTMLImageElement> & HeroPortrait_Props) {
  if(props.hero_id === undefined || props.hero_id === 0) return <img {...props} />
  return <steamy.Dota2.React.HeroPortrait {...props} hero_id={props.hero_id} />
}

export default GSIDraft;