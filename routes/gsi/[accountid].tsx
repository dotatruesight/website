import WebSocketDisplay from 'islands/WebSocketDisplay.tsx';
import { Head } from "$fresh/runtime.ts";
import Matches from 'islands/matches.tsx'
import { PageProps } from 'https://deno.land/x/fresh@1.1.2/server.ts';

export default function Page(props: PageProps) {
  return ( 
    <>
      <Head>
        <title>Matches</title>
      </Head>
      <body class="bg-black text-white">
        <WebSocketDisplay accountid={props.params.accountid} />
      </body>
    </>
  )
}