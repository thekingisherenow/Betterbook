import React from "react";
import FeaturedMatch from "../../components/Typography/Sportspage/FeaturedMatch";
import Leauges from "../../components/Typography/Sportspage/Leauges";
import Matches from "../../components/Typography/Sportspage/Matches";
import SportsPageBanner from "../../components/Typography/Sportspage/SportsPageBanner";

function Sport() {
  return (
    <main>
      <div className="grid grid-cols-3">
        <div className="col-span-1 mx-4 mt-4  ">
          <FeaturedMatch />
          <Leauges />
        </div>

        <div className="col-span-2  mx-2 mt-9 ">
          <SportsPageBanner />
          <Matches />
        </div>
      </div>
    </main>
  );
}

export default Sport;
