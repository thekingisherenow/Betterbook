import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import API from '../core/services'
import { Game } from '../types/game'
import Sidebar from '../components/Typography/Sidebar'

const IndexPage: NextPage = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    API.games.fetchGames().then(setGames)
  }, [])

  return <div>
        <main >
          <h1>heyy</h1>
            {/* Sidebar */}
            <Sidebar/>
            {/* Center  */}

        </main>
  </div>
}

export default IndexPage
