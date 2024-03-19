import Link from "next/link";

export default function Home() {
  return (
    <main className="dark h-screen w-screen flex items-center justify-center">
      <Link href="/Louis Liu - Senior FrontEnd Developer.pdf" locale={false}>
        <div className="bg-red-500 p-12 rounded-xl font-black text-4xl">preivew my CV</div>
      </Link>
    </main>
  );
}
