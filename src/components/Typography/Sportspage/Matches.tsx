import Image from "next/image";
import React from "react";

function Matches() {
  return (
    <>
      <h1 className="mt-10">Matches</h1>
      <div className=" h-80 mt-1 rounded-t-md border border-gray-600">
        <div className="flex text-sm text-center rounded-md bg-gray-500 font-semibold text-gray-300 h-8 ">
          <p className="w-32 my-auto">Date</p>
          <p className="w-52 flex-grow my-auto">Match</p>
          <p className="w-14 my-auto">1x</p>
          <p className="w-14 my-auto">x</p>
          <p className="w-14 my-auto">2x</p>
          <p className="w-14 my-auto mr-1"></p>
        </div>
        <div className="flex text-sm text-center font-semibold h-14 ">
          <p className="w-32 my-auto">20:00 Today</p>
          <div className="w-52  flex items-center justify-center flex-grow">
            <div className="flex flex-col flex-grow">
              <div className="relative w-6 h-6 mx-auto   ">
                <Image
                  className="object-cover"
                  sizes="8vw"
                  src={"https://iili.io/HluylyJ.png"}
                  fill
                  alt="favicon"
                />
              </div>
              <h2 className="text-xs">Barcelona </h2>
            </div>

            <h1 className="text-xl px-2 font-semibold ">vs </h1>

            <div className="flex flex-col flex-grow">
              <div className="relative w-6 h-6 mx-auto  ">
                <Image
                  className="object-cover"
                  sizes="8vw"
                  src={"https://iili.io/HluyEjR.png"}
                  fill
                  alt="favicon"
                />
              </div>
              <h2 className="text-xs"> Chelsea</h2>
            </div>
          </div>
          <div className="w-14 my-auto text-xs ">
            <p className="box ">1.98</p>
          </div>
          <div className="w-14 my-auto text-xs">
            <p className="box"> 2.73</p>
          </div>
          <div className="w-14 my-auto text-xs">
            <p className="box"> 1.31</p>
          </div>
          <div className="w-14 my-auto text-xs mr-1">
            <p className="box ">...</p>
          </div>
        </div>
        <hr className="border-gray-600" />
        <div className="flex text-sm text-center font-semibold h-14 ">
          <p className="w-32 my-auto">20:00 Tomorrow</p>
          <div className="w-52  flex items-center justify-center flex-grow">
            <div className="flex flex-col flex-grow">
              <div className="relative w-6 h-6 mx-auto   ">
                <Image
                  className="object-cover"
                  sizes="8vw"
                  src={"https://iili.io/HluylyJ.png"}
                  fill
                  alt="favicon"
                />
              </div>
              <h2 className="text-xs">Barcelona </h2>
            </div>

            <h1 className="text-xl px-2 font-semibold ">vs </h1>

            <div className="flex flex-col flex-grow">
              <div className="relative w-6 h-6 mx-auto  ">
                <Image
                  className="object-cover"
                  sizes="8vw"
                  src={"https://iili.io/HluyEjR.png"}
                  fill
                  alt="favicon"
                />
              </div>
              <h2 className="text-xs"> Chelsea</h2>
            </div>
          </div>
          <div className="w-14 my-auto text-xs ">
            <p className="box">1.98</p>
          </div>
          <div className="w-14 my-auto text-xs">
            <p className="box">2.73</p>
          </div>
          <div className="w-14 my-auto text-xs">
            <p className="box"> 1.31</p>
          </div>
          <div className="w-14 my-auto text-xs mr-1">
            <p className="box ">...</p>
          </div>
        </div>
        <hr className="border-gray-600" />
        <div className="flex text-sm text-center font-semibold h-14 ">
          <p className="w-32 my-auto">20:00 Today</p>
          <div className="w-52  flex items-center justify-center flex-grow">
            <div className="flex flex-col flex-grow">
              <div className="relative w-6 h-6 mx-auto   ">
                <Image
                  className="object-cover"
                  sizes="8vw"
                  src={"https://iili.io/HluylyJ.png"}
                  fill
                  alt="favicon"
                />
              </div>
              <h2 className="text-xs">Barcelona </h2>
            </div>

            <h1 className="text-xl px-2 font-semibold ">vs </h1>

            <div className="flex flex-col flex-grow">
              <div className="relative w-6 h-6 mx-auto  ">
                <Image
                  className="object-cover"
                  sizes="8vw"
                  src={"https://iili.io/HluyEjR.png"}
                  fill
                  alt="favicon"
                />
              </div>
              <h2 className="text-xs"> Chelsea</h2>
            </div>
          </div>
          <div className="w-14 my-auto text-xs ">
            <p className="box">1.98</p>
          </div>
          <div className="w-14 my-auto text-xs">
            <p className="box"> 2.73</p>
          </div>
          <div className="w-14 my-auto text-xs">
            <p className="box"> 1.31</p>
          </div>
          <div className="w-14 my-auto text-xs mr-1">
            <p className="box ">...</p>
          </div>
        </div>
        <hr className="border-gray-600" />
      </div>
    </>
  );
}

export default Matches;
