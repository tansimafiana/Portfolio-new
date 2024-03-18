import Image from "next/image";
import Link from "next/link"

export default function BackToTopButton({url}) {
  return (
    <main className=" fixed bottom-0 p-16 right-0 z-40">
        <Link href={url}>
            <button className="text-rose-300 w-14 h-14 text-6xl rounded-full drop-shadow-md border-rose-300">
            🢁
            </button>
        </Link>
    </main>
  );
}
