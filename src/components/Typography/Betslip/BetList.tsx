import React from "react";
import SingleBet from "./SingleBet";
import { TicketIcon } from "@heroicons/react/24/solid";

const bets = [];
function BetList() {
  return (
    <div>
      {bets.length === 0 ? (
        <div className="flex flex-col h-64 p-5 justify-center items-center">
          <TicketIcon className="w-28 h-28 text-gray-400" />
          <h1 className="font-bold">Your betslip is empty</h1>
          <p className="text-sm">Click on odds to add a ticket.</p>
        </div>
      ) : (
        <SingleBet />
      )}
    </div>
  );
}

export default BetList;
