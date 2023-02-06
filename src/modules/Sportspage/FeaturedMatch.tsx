import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Typography from "../../components/Typography/Typography";
import OddsButton from "../../components/Button/OddsButton";

const FeaturedMatch = () => {
  return (
    <div className='flex flex-col border border-DarkBorder rounded-xl  '>
      <div className='flex mx-5 mt-6'>
        <div className='relative w-12 h-12  '>
          <Image className='object-cover' sizes='8vw'
            src={"/images/premier-league.png"} fill alt='favicon' />
        </div>
        <div className='ml-5 flex flex-col space-y-1'>
          <Typography variation="title3">Premier Leauge</Typography>
          <Typography variation="subtitle1">Group Stage</Typography>
        </div>
      </div>

      <div className='flex text-center mx-auto mt-6 '>
        <div>
          <div className='relative w-12 h-12 mx-auto   '>
            <Image className='object-cover' sizes='8vw'
              src={"/images/FC_Barcelona.png"} fill alt='favicon' />
          </div>
          <Typography variation="title3">Barcelona</Typography>
        </div>
        <div className="px-12">
          <Typography variation="bigvs">VS</Typography>
        </div>
        <div>
          <div className="relative w-12 h-12 mx-auto  ">
            <Image
              className="object-cover"
              sizes="8vw"
              src={"/images/Chelsea_FC.png"}
              fill
              alt="favicon"
            />
          </div>
          <Typography variation="title3">Chelsea</Typography>
        </div>
      </div>

      <div className="flex space-x-2 text-xs  mt-7 mx-auto text-center  ">
        <p className="box w-10 text-center">
          <StarIcon className="w-5 h-4 m-auto" />
        </p>
        <OddsButton odds={1.83} />
        <OddsButton odds={2.40} />
        <OddsButton odds={1.59} />
      </div>

      <hr className="border-t-2 border-LightBorder dark:border-DarkBorder mt-5" />

      <div className="  px-6 py-6 text-center  ">
        <Typography variation="title4">Match Details</Typography>
      </div>
    </div>
  );
}

export default FeaturedMatch;
