import Image from "next/image";
import Nav from "./components/nav/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-between">
      <Nav />
      <div className="hero min-h-screen min-w-screen flex items-center justify-center">
        <div className="">
          introlduction: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat.
        </div>
        <div className="w-64 aspect-square bg-[url('/selfie.jpg')] bg-no-repeat bg-contain rounded-full"></div>
      </div>

      <div className="hero min-h-screen min-w-screen flex items-center justify-center">
        <div className="">
          introlduction: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat.
        </div>
        <div className="w-64 aspect-square bg-[url('/selfie.jpg')] bg-no-repeat bg-contain rounded-full"></div>
      </div>

      {/* <Image
        src="/selfie.jpg"
        alt="selfie"
        width={400}
        height={400}
        priority
      /> */}

      <Footer />
    </main>
  );
}
