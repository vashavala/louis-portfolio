import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="about flex flex-col items-center gap-48" id="About">
      <div className="flex items-center justify-center gap-20 outline outline-1 outline-red-600">
        <div className="relative w-[36rem] aspect-video *:absolute *:left-0 *:right-0 *:top-0 *:bottom-0">
          <div className="origin-bottom-right rotate-12 bg-orange-950"></div>
          <div className="origin-bottom-right bg-green-950"></div>
          <div className="origin-bottom-right -rotate-12 bg-cyan-300"></div>
        </div>

        <div className="flex flex-col items-end">
          <span>2023 ~ 2024</span>
          <span>create gamemodes and build private servers on GTA V</span>
          <span>provide components for several top ranked server </span>
          <a className="underline" href="https://www.simuwang.com" target="_blank">some code</a>
        </div>
      </div>

      <div className="flex items-center justify-center outline outline-1 outline-red-600">
        <div className="w-[36rem] flex flex-col">
          <span>2021-2023</span>
          <span>a web platform for creating and editing financial short videos</span>
          <span>with React and TypeScript</span>
          <span>generated millions of short videos throughout thousands of financial companies, institutions, and individuals.</span>
          <a className="underline" href="https://www.thinkive.com" target="_blank">Thinkive</a>
        </div>

        <video controls className="w-[36rem] aspect-video rounded-2xl">
          <source src="https://xczfiles.thinkive.com/file-common-server/file/avesto/plat/material/video/1004.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex items-center justify-center outline outline-1 outline-red-600">
        <div className="flex items-center justify-center bg-[url('/simuwang4.png')] bg-no-repeat bg-cover w-[36rem] aspect-video border-8 relative outline outline-1 outline-red-600">
        </div>
        <div className="flex flex-col *:text-right">
          <span>2018-2021</span>
          <span>web applications for high net worth clients, buyers, and fund managers all around the world</span>
          <div>one of the greatest private equity firms in China</div>
          <a className="underline" href="https://www.simuwang.com" target="_blank">Simuwang</a>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[url('/colleage.png')] bg-no-repeat bg-cover w-3/4 aspect-video border-8 relative font-bold italic text-xl outline outline-1 outline-red-600">
        <span className="absolute top-4 left-4">ShaoGuan University. Library</span>
        <div className="absolute bottom-4 right-4 flex flex-col text-right">
          <span>2015 - 2019</span>
          <span>bachelor degree</span>
          <span>Information and Computing Science</span>
        </div>
      </div>
    </section >
  );
}
