import Image from "next/image";
import React from "react";
import Typography from "../../components/Typography/Typography";

const Leauges = () => {
  return (
    <div className="mt-8  ">
      <Typography variation="title2">Soccer Leauges</Typography>
      <div className="flex flex-col mt-3 space-y-1 border border-LightBorder dark:border-DarkBorder text-xs rounded-xl">

        <div className="flex  items-center  cursor-pointer  py-4 text-center">
          <div className="relative w-12 h-12 ml-9 ">
            <Image
              className="object-cover"
              sizes="8vw"
              src={"/images/premier-league.png"}
              fill
              alt="premier leauge"
            />
          </div>
          <div className="w-48 ml-4 text-left ">
          <Typography variation="title3">Premiere Leaugeeeee</Typography>
          </div>
          <div className="w-7 ml-4 ">
          <Typography variation="title3">5</Typography>
          </div>
        </div>

        <hr className="border-LightBorder dark:border-DarkBorder" />

        <div className="flex  items-center  cursor-pointer  py-4 text-center">
          <div className="relative w-12 h-12 ml-9 ">
            <Image
              className="object-cover"
              sizes="8vw"
              src={"/images/laliga.png"}
              fill
              alt="premier leauge"
            />
          </div>
          <div className="w-48 ml-4 text-left ">
          <Typography variation="title3">La Liga</Typography>
          </div>
          <div className="w-7 ml-4 ">
          <Typography variation="title3">5</Typography>
          </div>
        </div>

        


      </div>
    </div>
  );
}

export default Leauges;
