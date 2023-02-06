import React from "react";
import SingleBet from "./SingleBet";
import { TicketIcon } from "@heroicons/react/24/solid";

const BetList = () => {
  return (
    <div>
      <hr className="border border-dashed border-DarkBorder" />
      <SingleBet />
      <SingleBet />
    </div>
  );
}

export default BetList;
