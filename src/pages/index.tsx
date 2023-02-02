import type { NextPage } from "next";
import { useEffect, useState } from "react";
import API from "../core/services";
import { Game } from "../types/game";
import Head from "next/head";

const IndexPage: NextPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    API.games.fetchGames().then(setGames);
  }, []);

  return (
    <div>
      <main className="flex flex-col ">
        Bet Details
      </main>
    </div>
  );
};

export default IndexPage;
