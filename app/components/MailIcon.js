import Image from "next/image";
import Link from "next/link"
import { MdEmail } from "react-icons/md";
export default function MailIcon() {
  return (
    <main>
        <a target="_blank" href="mailto:tansimakamalfiana@gmail.com">
        <MdEmail className="w-7 h-7" />
        </a>
    </main>
  );
}
