import { useRouter } from "next/router";
import React, { useEffect } from "react";
import FeaturedMatch from "../../modules/Sportspage/FeaturedMatch";
import Leauges from "../../modules/Sportspage/Leauges";
import Matches from "../../modules/Sportspage/Matches";
import SportsPageBanner from "../../modules/Sportspage/SportsPageBanner";
import Head from "next/head";

function Sport() {
  const router = useRouter();
  console.log(router.query.sport)
  useEffect(() => {
    const games = ["soccer", "football", "basketball", "tennis", "baseball",""];
    if (!games.includes(router.query.sport as string)) {
      router.push("/404");
    }
  }, [router]);

  return (
    <main>
      <Head>
        <title>Bettor Book</title>
        <meta name="description" content=" Sports Betting" />
        <link rel="shortcut icon" href="/images/favIcon.png" />
      </Head>
      <div className="grid grid-cols-3 w-full mx-auto ">
        <div className="col-span-1 mt-[2rem] ">
          <div className="w-[23.2rem] mx-auto ">
          <FeaturedMatch />
          <Leauges />
          </div>
        </div>

        <div className="col-span-2  mt-14 ">
          <div className=" w-[50.25rem] ml-5">
          <SportsPageBanner />
          <Matches />
          </div>
        </div>
        
      </div>
    </main>
  );
}

export default Sport;
