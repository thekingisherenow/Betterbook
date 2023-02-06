import React from "react";
import BetList from "./BetList";
import Typography from "../../components/Typography/Typography";


const BetSlip: React.FC = () => {
  return (
    <div className='bg-DarkSecondaryBackground h-screen'>

      <div className="m-4 p-6 flex  flex-col bg-DarkBetSlipColor h-[575px] ">

        <div className="h-20">
          
          <Typography variation="title2" >Bet Slip</Typography>

        </div>
        

        <div className="h-[340px]">
          <BetList />
        </div>

        <div className="grid grid-cols-3 divide-x-2 divide-DarkBorder mt-3">
          <div className="col-span-1 m-1 flex flex-col space-y-4">
            <Typography variation="title3" >Total Rate</Typography>
            <h3 className=" bg-DarkActionColor w-16 h-8  rounded-md flex text-center items-center justify-center mx-auto ">
              1.22
            </h3>
          </div>

          <div className="col-span-2 m-1 flex flex-col space-y-4">
            <div className="text-center">
            <Typography variation="title3" >Possible Winnings</Typography>
            </div>
            <h3 className=" text-transparent bg-DarkActionColor bg-clip-text inline-block text-bold  text-center">
              538.22 DAI
            </h3>
          </div>
        </div>
      </div>


    </div>
  );
};

export default BetSlip;
