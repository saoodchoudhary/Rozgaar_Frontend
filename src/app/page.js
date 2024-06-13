import Navbar from "@/Component/Navbar";
import Common from "@/Component/common";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <div className="bg-white my-2">
      <div className="flex gap-2 justify-between container mx-auto ">
        <div className="flex flex-col  self-center flex-1">
          <h2 className="text-3xl font-semibold self-center">Trustable Website</h2>
          <ul className="mt-5 ml-6 flex gap-2 flex-col">
            <li>Find Jobs</li>
            <li>Post Jobs</li>
            <li>Find Talents</li>
            <li>Post Talents</li>
          </ul>
        </div>
        <div className="flex-1 justify-end items-center flex">
          <Image src="/home_img.png" className="self-center" alt="hero" width={500} height={300} />
        </div>
      </div></div>
      {/* <Common /> */}
    </div>
  );
}
