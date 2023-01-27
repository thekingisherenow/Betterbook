import { useRouter } from "next/router";
import React, { useEffect } from "react";
import FeaturedMatch from "../../modules/Sportspage/FeaturedMatch";
import Leauges from "../../modules/Sportspage/Leauges";
import Matches from "../../modules/Sportspage/Matches";
import SportsPageBanner from "../../modules/Sportspage/SportsPageBanner";

function Sport() {
  const router = useRouter();

  useEffect(() => {
    const games = ["soccer", "football", "basketball", "tennis", "baseball"];
    if (!games.includes(router.query.sport as string)) {
      router.push("/404");
    }
  }, [router]);

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
