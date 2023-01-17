import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import API from '../core/services'
import { Game } from '../types/game'
import Sidebar from '../components/Typography/Sidebar'
import Header from '../components/Typography/Header'

const IndexPage: NextPage = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    API.games.fetchGames().then(setGames)
  }, [])

  return <div>
        <main className=''>

          {/* Header  */}
          <Header />
            {/* Sidebar */}
            <Sidebar/>
            {/* Center  */}

        </main>
  </div>
}

export default IndexPage
