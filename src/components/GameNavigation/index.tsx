import { Container, NavigationLink } from './styles'
import { useSelector } from 'react-redux'

import { RootState } from 'store/modules/rootReducer'

export const GameNavigation = () => {
  const availableGames = useSelector(
    (state: RootState) => state.availableGames.types,
  )

  return (
    <Container>
      {availableGames.map((game) => (
        <NavigationLink key={game.id} to='/' themeColor={game.color}>
          {game.type}
        </NavigationLink>
      ))}
    </Container>
  )
}
