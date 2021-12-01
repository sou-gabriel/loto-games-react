import { Container, VerticalLine, TrashIcon, Content, GameNumbers, GameDice, GameName } from './styles'

export const UserGame = () => {
  return (
    <Container>
      <TrashIcon size='2.5rem' color='#888888' />
      <VerticalLine />
      <Content>
        <GameNumbers>01,02,04,05,06,07,09,15,17,20,21, 22,23,24,25</GameNumbers>
        <GameDice>
          <GameName>Lotofácil</GameName> <span>R$ 2,50</span>
        </GameDice>
      </Content>
    </Container>
  )
}
