import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import API from '../core/services'
import { Game } from '../types/game'

const IndexPage: NextPage = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    API.games.fetchGames().then(setGames)
  }, [])

  return <h1 className="text-blue-500"></h1>
}

export default IndexPage
