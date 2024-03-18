import Image from "next/image";
import Link from "next/link"
import { FaSquareGithub } from "react-icons/fa6";

export default function GitHubIcon({url}) {
  return (
    <main>
        <a target="_blank" href={url ? url : "https://github.com/tansimafiana"}>
        <FaSquareGithub className="w-7 h-7" />
        </a>
    </main>
  );
}
