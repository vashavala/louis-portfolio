import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="hero min-h-screen min-w-screen bg-[url('/img/hero-pattern.svg')]">

      </div>
      {/* <Image
        src="/selfie.jpg"
        alt="selfie"
        width={400}
        height={400}
        priority
      /> */}
    </main>
  );
}
