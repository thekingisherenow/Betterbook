import {
  ArrowRightOnRectangleIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import React, { Dispatch, SetStateAction } from "react";
import BetList from "./BetList";

interface Props {
  betslipState: [boolean, Dispatch<SetStateAction<boolean>>];
}
const BetSlip: React.FC<Props> = ({
  betslipState: [showBetslip, setShowBetslip],
}) => {
  return (
    <div className='flex flex-col w-96  m-4 shadow-lg bg-gray-100
    dark:bg-dark'>

      <div className='flex h-8 bg-gradient-to-r text-white from-[#38529e] to-[#4160ab]'>
        <ArrowRightOnRectangleIcon onClick={() => setShowBetslip(!showBetslip)}
          className='w-8 h-8 cursor-pointer' />
        <div className='flex text-center m-auto '>
          <TicketIcon className='w-6 h-6' />
          <h1>Bet Slip</h1>
        </div>
      </div>

      <div>
        <BetList />
      </div>

      <div
        className="flex border-t border-DarkBorder dark:border-LightBorder text-sm px-4 py-5 text-center justify-center
      items-center"
      >
        <div className="px-1  border-r border-gray-300 dark:border-gray-600 ">
          <h3 className=" ">Total Rate</h3>
          <h3 className=" text-white  bg-blue-500 rounded-sm w-11 items-center mx-auto  ">
            1.22
          </h3>
        </div>

        <div className="px-1 ">
          <h3 className="">Possible Winnings</h3>
          <h3 className=" text-transparent  bg-clip-text bg-blue-500">
            538.22 DAI
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
