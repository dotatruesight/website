import { Head } from "$fresh/runtime.ts";
import Live_Matches from "../islands/live_matches.tsx";


export default function Page() {
  return ( 
    <>
      <Head>
        <title>Matches</title>
      </Head>
      <body class="bg-black text-white">
        <Live_Matches />
      </body>
    </>
  )
}