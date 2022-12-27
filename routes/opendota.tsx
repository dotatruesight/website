import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Navbar } from "components/Navbar.tsx";
import { JSX } from "preact/jsx-runtime";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <body class="w-full h-[4000px] text-white" style='background-image: linear-gradient(to right, rgb(26, 43, 62), rgb(20, 30, 48)); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Droid Sans", Ubuntu, Cantarell, "Fira Sans", Helvetica, Arial, sans-serif;'>
        <Navbar />
        <div
          class="bg-local sm:(min-w-xl max-w-7xl) bg-no-repeat m-auto bg-top pt-14 pl-6 pr-6 pb-[25px]"
          style="background-image: url('https://www.opendota.com/assets/images/home-background.png')"
        >
          <div class="pt-[120px] m-auto w-[600px] h-[380px] text-center leading-[1.2]" style="height: 500px">
            <div class="uppercase text-[90px] text-medium" style="text-shadow: rgb(0 0 0) 0px 0px 3px;">
              <h1>opendota</h1>
            </div>
            <div class="text-[32px] font-light mb-[30px]" style="text-shadow: rgb(0 0 0) 0px 0px 3px;">
              <h2>Open source Dota 2 data platform</h2>
            </div>
            <div class="block">
              <div class="flex justify-center">
                <a href="/request"
                  class="border-solid border-white border-2 p-5 m-[10px] rounded-sm pt-[10px] pb-[10px]"
                  style="color: rgba(255, 255, 255, 0.87); background-color: rgba(0, 0, 0, 0.4)"
                >
                  <span class="font-medium text-lg">Request</span> a specific match
                </a>
              </div>
            </div>
          </div>
          <div class="mt-[50px] max-w-[1920px] pt-[50px] pb-[50px] flex justify-around" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05)">
            <div class="max-w-[25%] p-[0.5rem] pt-0 pb-0 box-border text-center">
              <svg class="w-[85px] h-[85px] m-auto" viewBox="0 0 300 300" style="fill: rgb(102, 187, 255)"><path d="M278.6,42.9c0-23.6-19.2-42.9-42.9-42.9s-42.9,19.2-42.9,42.9c0,15.8,8.6,29.7,21.4,37.1v35.4L150,147.5 l-64.3-32.1V79.9c12.8-7.4,21.4-21.3,21.4-37.1C107.1,19.2,87.9,0,64.3,0S21.4,19.2,21.4,42.9c0,15.8,8.6,29.7,21.4,37.1v61.9 l85.7,42.9v35.4c-12.8,7.4-21.4,21.3-21.4,37.1c0,23.6,19.2,42.9,42.9,42.9s42.9-19.2,42.9-42.9c0-15.8-8.6-29.7-21.4-37.1v-35.4 l85.7-42.9V79.9C269.9,72.5,278.6,58.7,278.6,42.9z M64.3,21.4c11.8,0,21.4,9.6,21.4,21.4s-9.6,21.4-21.4,21.4s-21.4-9.6-21.4-21.4 S52.5,21.4,64.3,21.4z M150,278.6c-11.8,0-21.4-9.6-21.4-21.4c0-11.8,9.6-21.4,21.4-21.4s21.4,9.6,21.4,21.4 C171.4,269,161.8,278.6,150,278.6z M235.7,64.3c-11.8,0-21.4-9.6-21.4-21.4s9.6-21.4,21.4-21.4s21.4,9.6,21.4,21.4 S247.5,64.3,235.7,64.3z"></path></svg>
              <div class="block text-2xl leading-[2]">Open Source</div>
              <div class="font-light text-[#bebebe] leading-[1.5]">All project code is open source and available for contributors to improve and modify.</div>
            </div>
            <div class="max-w-[25%] p-[0.5rem] pt-0 pb-0 box-border text-center">
              <svg class="w-[85px] h-[85px] m-auto" viewBox="0 0 300 300" style="fill: rgb(102, 187, 255)"><rect x="81.8" y="13.6" width="54.5" height="272.7"></rect><rect y="204.5" width="54.5" height="81.8"></rect><rect x="163.6" y="150" width="54.5" height="136.4"></rect><rect x="245.5" y="95.5" width="54.5" height="190.9"></rect></svg>
              <div class="block text-2xl leading-[2]">In-Depth Data</div>
              <div class="font-light text-[#bebebe] leading-[1.5]">Parsing replay files provides highly detailed match data.</div>
            </div>
            <div class="max-w-[25%] p-[0.5rem] pt-0 pb-0 box-border text-center">
              <svg class="w-[85px] h-[85px] m-auto" viewBox="0 0 300 300" style="fill: rgb(102, 187, 255)"><rect x="138" y="116.5" transform="matrix(0.7071 0.7071 -0.7071 0.7071 145.5402 -72.8379)" width="45.5" height="45.5"></rect><rect x="52.3" y="141.6" transform="matrix(0.7071 0.7071 -0.7071 0.7071 181.0483 12.848)" width="45.5" height="166.7"></rect><rect x="150" y="0" width="21.4" height="42.8"></rect><rect x="233.3" y="34.5" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 377.0973 268.0186)" width="21.4" height="42.8"></rect><rect x="66.6" y="34.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.9125 71.0886)" width="21.4" height="42.8"></rect><rect x="233.3" y="201.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -85.918 237.758)" width="21.4" height="42.8"></rect><rect x="257.2" y="128.5" width="42.8" height="21.4"></rect></svg>
              <div class="block text-2xl leading-[2]">Free of Charge</div>
              <div class="font-light text-[#bebebe] leading-[1.5]">Servers are funded by sponsors and volunteers maintain the code, so the service is offered free of charge.</div>
            </div>
          </div>
          <div class="flex flex-col align-middle justify-center text-center mt-[30px] mb-[20px]">
            <div class="uppercase text-xl mb-[20px] w-auto">Sponsored by</div>
            <div class="flex justify-center">
              <a class="p-0">
                <img class="h-8 m-[10px]" src="http://opendota.com/assets/images/openai-logo.png"/>
              </a>
            </div>
            <div class="flex justify-center text-center align-middle mt-4">
              <div class="mb-[30px] font-light leading-[38px] min-w-[88px] text-sm pl-4 pr-4 border-solid border-white border-1">
                <a href="/sponsor">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
          <div class="text-sm font-light text-right" style="color: rgba(255, 255, 255, 0.87);">
            Background picture by <a class="text-[#66bbff]">Mike Azevedo</a>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
}

function InfoSpace(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return 
}