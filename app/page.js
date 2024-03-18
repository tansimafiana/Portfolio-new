"use client"

import Image from "next/image";
import FionaIcon from "@/app/components/FionaIcon"
import GitHubIcon from "@/app/components/GitHubIcon"
import LinkedInIcon from "@/app/components/LinkedInIcon"
import Buttons from "@/app/components/Buttons"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { useState, useEffect } from "react"


export default function Home() {

  const size = useWindowSize();

  return (
    <main className="w-screen h-screen bg-rose-100 flex">
      
      <div className="m-auto w-red-200 w-4/5 justify-center">
        {/*<p>{size.width}</p>*/}
        <div className={size.width < 1000 ? "flex-col text-black" : "flex text-black"}>

          <div className={size.width < 1000 ? "w-32 pt-32 flex justify-center mx-auto" : "w-64 flex justify-center mx-auto"}>
            <div className=" w-64">
              <div className="flex justify-center m-auto"><FionaIcon /></div>

              <div className={size.width < 1000 ? "py-2 px-8 flex justify-between" : "py-12 px-8 flex justify-between"}>
                <GitHubIcon /> 
                <LinkedInIcon />
              </div>
            </div>
          </div>

          <div className="flex-col justify-center ">
            <h1 className={size.width < 1000 ? " text-4xl py-4 px-8 text-center font-extrabold" : " text-6xl py-4 px-8 text-center font-extrabold"}>Tansima Kamal Fiana</h1>
            <h3 className={size.width < 1000 ? " text-xl px-8 flex justify-center text-center font-poppinsThin" : " text-4xl px-8 flex justify-center text-center font-poppinsThin"}>Hi, I'm Fiona! I'm a recent graduate with a passion for Web Development, UX/UI design, Project planning, and Software Development.</h3>
            
            <div className="flex w-full justify-evenly m-auto py-8 px-24">
              <Buttons text="PORTFOLIO" href="../pages/PortfolioPage"/>
              <Buttons text="RESUME" href="../pages/ResumePage"/>
              <Buttons text="CONTACT" href="../pages/ContactPage" />
            </div>
          </div>
        </div>
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