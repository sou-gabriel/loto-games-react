import { Container, NavigationLink } from './styles'
import { useSelector } from 'react-redux'

import { RootState } from 'store/modules/rootReducer'

export const GameNavigation = () => {
  const gameOptions = useSelector((state: RootState) =>
    state.gameOptions.types)

  if (!gameOptions) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      {gameOptions.map(({ id, type, color }) => (
        <NavigationLink
          key={id}
          to={`/dashboard/${id}`}
          color={color}
        >
          {type}
        </NavigationLink>
      ))}
    </Container>
  )
}
