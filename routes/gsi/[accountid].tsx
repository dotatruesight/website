
import { Head } from "$fresh/runtime.ts";
import Matches from 'islands/matches.tsx'
import { PageProps } from 'https://deno.land/x/fresh@1.1.2/server.ts';
import GSIDraft from 'islands/GSIDraft.tsx';

export default function Page(props: PageProps) {
  return ( 
    <>
      <Head>
        <title>Matches</title>
      </Head>
      <body class="bg-black text-white">
        <GSIDraft accountid={props.params.accountid} />
      </body>
    </>
  )
}