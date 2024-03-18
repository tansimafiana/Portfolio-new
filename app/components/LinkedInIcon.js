import Image from "next/image";
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";


export default function LinkedInIcon() {
  return (
    <main>
        <a target="_blank" href="https://ca.linkedin.com/in/tansima-kamal-fiana">
            <FaLinkedin className="w-7 h-7" />
        </a>
    </main>
  );
}
