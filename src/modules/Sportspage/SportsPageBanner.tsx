import { TrophyIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Typography from "../../components/Typography/Typography";

const SportsPageBanner = () => {
    return (
        <div className='h-[13.5rem]   dark:bg-DarkActionColor bg-LightActionColor rounded-2xl text-gray-100 flex' >
            <div className='  ml-16 mt-6  '>
                <div className='flex  '>
                    <Typography variation="bannerTitle">Goerli Testnet Tournament.</Typography>
                    <TrophyIcon className='w-7 h-7 text-[#ffc344]' />
                </div>
                <div className="mt-3 mr-10">
                    <Typography variation="bannerSubtitle">The winner of the Goerli testnet tournament gets 500 DAI.</Typography>
                </div>

                <button className='bg-white w-60 h-14 bg-BannerFontColor text-normal
                 dark:text-DarkActionColor text-LightActionColor mt-8 rounded-lg  '>More Details</button>
            </div>
            <div className='relative w-[21.68rem] h-[17.37rem] -mt-[3.87rem] mr-10   '>
                <Image className='object-cover' sizes='30vw'
                    src={"/images/messi.png"} fill alt='favicon' />
            </div>
        </div>

    );
}

export default SportsPageBanner;
