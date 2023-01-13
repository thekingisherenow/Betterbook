import { Game } from '../../types/game'

export const fetchGames = (): Promise<Game[]> => {
  return Promise.resolve([
    {
      id: '1',
      name: 'Spain vs Argentina',
    },
  ])
}
