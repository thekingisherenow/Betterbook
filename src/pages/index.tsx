import type { NextPage } from "next";
import { useEffect, useState } from "react";
import API from "../core/services";
import { Game } from "../types/game";
import Banner from "../components/Typography/Banner";
import BetsField from "../components/Typography/BetsField";

const IndexPage: NextPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    API.games.fetchGames().then(setGames);
  }, []);

  return (
    <div>
      <main className="flex flex-col">
        <Banner />

        <BetsField />
      </main>
    </div>
  );
};

export default IndexPage;
