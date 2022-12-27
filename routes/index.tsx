import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Navbar } from "components/Navbar.tsx";
import { JSX } from "preact/jsx-runtime";
import { Footer } from "../components/Footer.tsx";
import NavigationBar from "islands/NavigationBar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dota True Sight - Home</title>
      </Head>
      <body class="w-full h-[4000px] bg-[#191919] text-gray-300 font-sans">
        <NavigationBar />
        <div class="w-full h-[1000px] bg-local bg-no-repeat m-auto bg-top px-6 py-14 " style="background-image: URL('https://dota2freaks.com/wp-content/uploads/sites/10/2020/04/dota-2-background.jpg')">
          <h1 class="mt-28 text-6xl uppercase font-bold tracking-wide text-center p-10">TRUE SIGHT</h1>
          <div class="flex m-auto max-w-[800px] opacity-60 text-lg" style="drop-shadow: rgb(0 0 0 / 23%) 2px 2px 3px -2px; backdrop-filter: blur(16px);">  
            <input class="flex-1 px-4 bg-black rounded-l-lg" id="textfield" type="text" placeholder="Search by name, match id or hero"></input>
            <button class="p-2 text-white font-medium bg-black rounded-r-lg">
              <span class="p-2 px-8">Search</span>
            </button>
          </div>
        </div>
      </body>
    </>
  );
}

function InfoSpace(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return 
}