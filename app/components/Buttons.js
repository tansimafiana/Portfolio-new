import Image from "next/image";
import Link from "next/link"

export default function Button({text, href, className}) {
  return (
    <main>
        <Link href={href ? href : ""}>
            <button className={className ? className : " text-2xl p-2 hover:text-rose-300"} >{text ? text : "Text"}</button>
        </Link>
    </main>
  );
}
