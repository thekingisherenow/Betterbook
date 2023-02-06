import React from "react";
import Typography from "../../components/Typography/Typography";

const SingleBet = () => {
  return (
    <div className="flex flex-col  my-4 ">

      <div className="grid grid-cols-3  ">
        <div className="col-span-1">
          <Typography variation="title3" >Arsenal</Typography>
        </div>
        <div className="col-span-1 text-center">
          <Typography variation="title1" >VS</Typography>
        </div>
        <div className="col-span-1 ">
          <Typography variation="title3" >Chelsea</Typography>
        </div>
      </div>

      <div className="flex bg-DarkActionColorTransparent h-8 justify-center items-center rounded-md mt-6">
        <div className="ml-2">
        <Typography variation="title3" >Arsenal</Typography>
        </div>
        <div className="h-5 w-[3.75rem] flex justify-center items-center bg-DarkActionColor ml-auto mr-3">
          <Typography variation="subtitle2" >1.98</Typography>
        </div>
      </div>

      <div className="h-9 border border-DarkBorder mb-5 flex justify-center items-center rounded-md mt-4">
        <div className="w-56 text-center">
        <Typography variation="title1" >20.00</Typography>
        </div>
        <div className="flex justify-end ml-auto mr-4 ">
        <Typography variation="title3" >DAI</Typography>
        </div>
      </div>
      <hr className="border border-dashed border-DarkBorder" />

    </div>
  )
}

export default SingleBet;
