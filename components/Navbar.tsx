import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Navbar(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      class="w-full h-14 fixed text-2xl p-2 pl-4 pr-4"
      style="background-color: rgba(19, 111, 149, 0.37); backdrop-filter: blur(16px); box-shadow: rgb(0 0 0 / 23%) 2px 2px 3px -2px"
    >
      <div class="flex justify-start align-middle h-full mr-4">
        <div class="mr-4 h-min flex align-middle ">
          <div class="mr-3 w-[1.5em] flex justify-start">
            <button class="h-min">
              <svg class="w-[1em] h-[1em] text-[1.5rem]" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="fill: white">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </div>
          <div>
            <a class="align-middle justify-center uppercase font-medium text-base leading-normal">
              <span>
                {"<OpenDota/>"}
              </span>
            </a>
          </div>
        </div>
        <div class="flex">
          <Page href="/matches" name="matches" />
          <Page href="/heroes" name="heroes" />
          <Page href="/teams" name="teams" />
          <Page href="/explorer" name="explorer" />
          <Page href="/combos" name="combos" />
          <Page href="/api" name="API" />
          <Page href="/subscribe" name="subscribe" />
          <Page href="/predictions" name="TI Predictions" />
          
        </div>
      </div>
    </div>
  );
}


function Page(props: JSX.HTMLAttributes<HTMLDivElement> & { name: string, href: string }) {
  return <div class="flex justify-start align-middle">
  <div class="ml-3 mr-3">
    <a class="align-middle justify-center capitalize text-base leading-normal" href={props.href}>
      <span>
        {props.name}
      </span>
    </a>
  </div>
</div>
}