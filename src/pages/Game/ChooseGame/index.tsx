import { GameButton, Title, Actions } from './styles'

type Game = {
  type: 'Lotofácil' | 'Quina' | 'Mega-Sena'
  description: string
  range: number
  price: number
  maxNumber: number
  color: string
}

type ChooseGameProps = {
  gamesData: Game[]
}

export const ChooseGame = ({ gamesData }: ChooseGameProps) => {
  return (
    <>
      <Title>Choose a game</Title>
      <Actions>
        {gamesData.map((game: Game) => {
          return (
            <GameButton key={game.type} color={game.color} to={`/game/${game.type}`}>
              {game.type}
            </GameButton>
          )
        })}
      </Actions>
    </>
  )
}
