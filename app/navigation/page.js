import Image from "next/image";
import Link from "next/link";
import Buttons from "../components/Buttons"
import { IoMdHome } from "react-icons/io";

export default function Navigation({subpage}) {
  return (
    <main className="bg-rose-100 h-24 w-full flex">
      <Link href="../" className="my-auto px-6 pb-6">
      <IoMdHome className="w-7 h-7"/>
      </Link>
      <div className="ml-auto"> <div className=" flex top-0 right-0 h-16 w-full justify-end p-4">
              <Buttons className="text-2xl p-2 hover:text-rose-300" text="PORTFOLIO" href={ subpage ? "../PortfolioPage" : "../pages/PortfolioPage"}/>
              <Buttons  className="text-2xl p-2 hover:text-rose-300" text="RESUME" href={ subpage ? "../ResumePage" : "../pages/ResumePage"}/>
              <Buttons  className="text-2xl p-2 hover:text-rose-300" text="CONTACT" href={ subpage ? "../ContactPage" : "../pages/ContactPage"}/>
            </div></div>
    </main>
  );
}
