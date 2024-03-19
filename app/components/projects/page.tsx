import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <div className="about flex flex-col gap-28">
      <div className="flex items-center justify-center relative">
        <Image
          src="/colleage.png"
          alt="colleage"
          width={1080}
          height={720}
          priority
          className=" border-8"
        />
        <span className="absolute top-4 left-4">ShaoGuan University. Library</span>
        <div className="absolute bottom-4 right-4 flex flex-col text-right">
          <span>2015 - 2019</span>
          <span>bachelor degree</span>
          <span>Information and Computing Science</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/simuwang4.png"
          alt="simuwang0"
          width={720}
          height={360}
          priority
          className=""
        />

        <div className="flex flex-col">
          <span>2018-2022</span>
          <span>web applications for high net worth clients, buyers, and fund managers all around the world</span>
          <div>one of the greatest private equity firms in China</div>
          <a className="underline" href="https://www.simuwang.com" target="_blank">Simuwang</a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <video controls>
          <source src="https://xczfiles.thinkive.com/file-common-server/file/avesto/plat/material/video/1004.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col">
          <span>a web platform for creating and editing financial short videos
            with React and TypeScript, which generated millions of short videos throughout thousands of financial companies, institutions, and
            individuals.</span>
          <a className="underline" href="https://www.thinkive.com" target="_blank">Thinkive</a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-20">
        <div className="relative w-96 aspect-video *:absolute *:left-0 *:right-0 *:top-0 *:bottom-0">
          <div className="origin-bottom-right rotate-12 bg-orange-950"></div>
          <div className="origin-bottom-right bg-green-950"></div>
          <div className="origin-bottom-right -rotate-12 bg-cyan-300"></div>
        </div>

        <div className="flex flex-col">
          <span>2023 - 2024</span>
          <span>build on one of the most famous GTA V multiplayer modification: altv</span>
          <a className="underline" href="https://www.simuwang.com" target="_blank">some code</a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-20">
        <div className="w-96 aspect-video bg-orange-950"> </div>
        <div className="flex flex-col">
          <span>build on one of the most famous GTA V multiplayer modification: altv</span>
          <a className="underline" href="https://www.simuwang.com" target="_blank">gamer handbook</a>
        </div>
      </div>
    </div >
  );
}
