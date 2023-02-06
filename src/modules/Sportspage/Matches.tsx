import Image from "next/image";
import React from "react";
import Typography from "../../components/Typography/Typography";
import OddsButton from "../../components/Button/OddsButton";

const Matches = () => {
  return (
    <div>
      <div className="mt-8 mb-4">
      <Typography variation="title2">Matches</Typography>
      </div>
      <div className=" h-80 mt-1 rounded-xl border border-LightBorder dark:border-DarkBorder">
        <div className="flex  text-center rounded-xl bg-DarkSecondaryBackground  text-gray-300 h-16 items-center  ">
          <div className="w-48">
            <Typography variation="title4">Date</Typography>
          </div>
          <div className="w-80 flex-grow">
            <Typography variation="title4">Match</Typography>
          </div>
          <div className="w-16">
            <Typography variation="title4">1x</Typography>
          </div>
          <div className="w-16">
            <Typography variation="title4">x</Typography>
          </div>
          <div className="w-16">
            <Typography variation="title4">2x</Typography>
          </div>
          <div className="w-16">
            <Typography variation="title4"></Typography>
          </div>
        </div>
        <div className="flex items-center  text-center  h-20 ">
          <div className="w-48 ">
            <Typography variation="title3">20:00 Today</Typography>
          </div>

          <div className="w-80  flex items-center justify-center flex-grow">
            <div className="flex flex-col flex-grow">
              <div className="relative w-11 h-11 mx-auto   ">
                <Image
                  className="object-cover"
                  sizes="8vw"
                  src={"/images/FC_Barcelona.png"}
                  fill
                  alt="favicon"
                />
              </div>
              <Typography variation="subtitle2">Barcelona</Typography>

            </div>
            <Typography variation="title3">VS</Typography>
            <div className="flex flex-col flex-grow">
              <div className="relative w-11 h-11 mx-auto  ">
                <Image
                  className="object-cover"
                  sizes="8vw"
                  src={"/images/Chelsea_FC.png"}
                  fill
                  alt="favicon"
                />
              </div>
              <Typography variation="subtitle2">Chelsea</Typography>

            </div>
          </div>

          <div className="w-16   ">
            <OddsButton odds={1.98} />
          </div>
          <div className="w-16  ">
            <OddsButton odds={2.73} />
          </div>
          <div className="w-16  ">
            <OddsButton odds={1.31} />
          </div>
          <div className="w-16   mr-1">
              ...
          </div>
        </div>
        <hr className="border-LightBorder dark:border-DarkBorder" />

      </div>
    </div>
  );
}

export default Matches;
