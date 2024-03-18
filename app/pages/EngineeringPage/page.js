"use client"

import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import Buttons from "@/app/components/Buttons"
import { IoMdHome } from "react-icons/io";

import Navigation from "@/app/navigation/page"
import { useState, useEffect } from "react"

export default function ResumePage() {
  const size = useWindowSize()

  const stretchedWindowClass = ["w-10/12 h-full flex justify-center mx-auto font-light",
                                "h-full",
                                "h-full pl-8 ml-4 mx-auto w-4/5"]
  const slimWindowClass = ["w-10/12 h-full flex flex-wrap justify-center mx-auto font-light",
                           "h-full",
                           "h-full mt-6 mx-auto w-full"]

  return (
    <main className="bg-rose-100 text-black my-auto flex-col flex flex-wrap ">
      <Navigation />

      {/* DEBUG
        <div>
          {size.width}px / {size.height}px
        </div>*/}

      <div className="w-screen h-screen bg-pink-50 flex-col pb-12">
        <h1 className=" mx-auto justify-center align-middle flex py-4 text-6xl">👷‍♀️ UNDER CONSTRUCTION 👷‍♀️</h1>

      </div>
    </main>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
