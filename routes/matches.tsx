import { Head } from "$fresh/runtime.ts";
import Matches from 'islands/matches.tsx'

export default function Page() {
  return ( 
    <>
      <Head>
        <title>Matches</title>
      </Head>
      <body class="bg-black text-white">
        <Matches matches_requested={20} />
      </body>
    </>
  )
}