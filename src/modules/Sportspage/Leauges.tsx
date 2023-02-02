import Image from "next/image";
import React from "react";
import Typography from "../../components/Typography/Typography";

const Leauges = () => {
    return (
        <>
            <Typography variation="title2">Soccer Leauges</Typography>

      <div className="flex flex-col h-[250px] space-y-1 border border-LightBorder dark:border-DarkBorder text-xs rounded-xl">
        <div className="flex space-x-3 lg:space-x-6 cursor-pointer  py-2 ">
          <div className="relative w-8 h-8 ml-2 lg:ml-4">
            <Image
              className="object-cover"
              sizes="8vw"
              src={"/images/premier-league.png"}
              fill
              alt="premier leauge"
            />
          </div>
          <h1 className="my-auto  text-left flex-grow">Premiere Leauge</h1>
          <h1 className="text-left px-5 my-auto ">5</h1>
        </div>

        <hr className="border-LightBorder dark:border-DarkBorder" />

        <div className="flex space-x-3 lg:space-x-6 cursor-pointer  py-2 ">
          <div className="relative w-8 h-8 ml-2 lg:ml-4">
            <Image
              className="object-cover"
              sizes="8vw"
              src={"/images/laliga.png"}
              fill
              alt="laliga-icon"
            />
          </div>
          <h1 className=" my-auto text-left  flex-grow">La liga</h1>
          <h1 className="text-left px-5 my-auto ">5</h1>
        </div>

        <hr className="border-LightBorder dark:border-DarkBorder" />
      </div>
    </>
  );
}

export default Leauges;
