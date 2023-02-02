import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Typography from "../../components/Typography/Typography";

const FeaturedMatch = () => {
    return (
        <div className='flex flex-col border border-DarkBorder rounded-xl'>
            <div className='flex m-4'>
                <div className='relative w-10 h-10   '>
                    <Image className='object-cover' sizes='8vw'
                        src={"/images/premier-league.png"} fill alt='favicon' />
                </div>
                <div className='ml-2 flex flex-col -space-y-1'>
                  <Typography variation="title3">Premier Leauge</Typography>
                  <Typography variation="subtitle1">Group Stage</Typography>
                </div>
            </div>
            <div className='flex text-center mx-auto '>
                <div>
                    <div className='relative w-10 h-10 mx-auto   '>
                        <Image className='object-cover' sizes='8vw'
                            src={"/images/FC_Barcelona.png"} fill alt='favicon' />
                    </div>
                    <h2 >Barcelona </h2>
                </div>

        <h1 className="text-3xl px-2  ">vs </h1>

        <div>
          <div className="relative w-10 h-10 mx-auto  ">
            <Image
              className="object-cover"
              sizes="8vw"
              src={"/images/Chelsea_FC.png"}
              fill
              alt="favicon"
            />
          </div>
          <h2> Chelsea</h2>
        </div>
      </div>
      <div className="flex space-x-2 text-xs  mt-2 mx-auto text-center  ">
        <p className="box w-10 text-center">
          <StarIcon className="w-5 h-4 m-auto" />
        </p>
        <p className="box w-10">1.83</p>
        <p className="box w-10 ">2.40</p>
        <p className="box w-10 ">1.59</p>
      </div>

      <hr className="border-t-2 border-LightBorder dark:border-DarkBorder mt-5" />
      <div className=" mx-auto  text-center  cursor- text-normal px-5 py-4  ">
        Match Details
      </div>
    </div>
  );
}

export default FeaturedMatch;
