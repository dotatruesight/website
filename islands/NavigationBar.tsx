import { useEffect } from "https://esm.sh/v99/preact@10.11.0/hooks/src/index";
import { JSX } from "preact";

export default function NavigationBar() {
  return <>
    <nav class="w-full h-14 fixed text-xl px-4 flex py-3 font-medium overflow-x-hidden whitespace-nowrap
      children:first-of-type:(text-2xl)
      children:(transition-all duration-300)
      children:last-of-type:(opacity-100 flex)"
      style="background-image: linear-gradient(to bottom, rgba(12, 13, 15, 0.75), rgba(12, 13, 15, 0.60)); box-shadow: rgb(0 0 0 / 23%) 2px 2px 3px -2px; backdrop-filter: blur(16px);">
      <button class="px-2 mr-2 mt-2 right-0 static z-50">
        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#d1d5db" d="M23 6H1c-.552 0-1-.448-1-1s.448-1 1-1h22c.553 0 1 .448 1 1s-.447 1-1 1zM23 13H1c-.552 0-1-.447-1-1s.448-1 1-1h22c.553 0 1 .447 1 1s-.447 1-1 1zM23 20H1c-.552 0-1-.447-1-1s.448-1 1-1h22c.553 0 1 .447 1 1s-.447 1-1 1z"/>
        </svg>
      </button>
      <div class="opacity-0 relative w-0 md:(opacity-100 w-36)">
        <a href="/" class="uppercase font-bold tracking-wide text-2xl relative">
          <span class="flex align-middle">True Sight</span>
        </a>
      </div>
      <div class="flex-1 children:(px-3 leading-8) relative w-0 opacity-0 right-32 sm:(opacity-100 w-32 right-0) ">
        <a href="/matches" class="">
          Matches
        </a>
        <a href="/players" class="">
          Players
        </a>
        <a href="/live" class="">
          Live
        </a>
      </div>
      <div class="flex align-middle flex-grow-0 justify-end leading-8 flex-1 z-50">
        <svg class="mt-[6px] mr-1 opacity-50" fill="#d1d5db" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input class="bg-transparent text-sm w-48 overflow-ellipsis" id="textfield" name="textfield" type="text" placeholder="Search by name, match id or hero" />
        <a href="/profile" class="ml-2">
          <span>My Profile</span>
        </a>
      </div>
    </nav>
  </> 
}