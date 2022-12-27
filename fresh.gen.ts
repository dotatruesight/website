// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/live/[steamid].ts";
import * as $1 from "./routes/api/matches/[matchid].ts";
import * as $2 from "./routes/api/users/[steamid].ts";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/live.tsx";
import * as $5 from "./routes/matches.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/live_matches.tsx";
import * as $$2 from "./islands/matches.tsx";

const manifest = {
  routes: {
    "./routes/api/live/[steamid].ts": $0,
    "./routes/api/matches/[matchid].ts": $1,
    "./routes/api/users/[steamid].ts": $2,
    "./routes/index.tsx": $3,
    "./routes/live.tsx": $4,
    "./routes/matches.tsx": $5,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/live_matches.tsx": $$1,
    "./islands/matches.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
