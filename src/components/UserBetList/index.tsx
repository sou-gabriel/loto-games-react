import { v4 as uuidv4 } from 'uuid'

import { useBetCart } from 'hooks/useBetCart'
import {
  Container,
  UserGameItem,
  TrashIcon,
  VerticalLine,
  Heading,
  BetNumbers,
  BetDice,
  GameName,
} from './styles'

export const UserBetList = () => {
  const { bettingCart, getTotalCalculatedPrice, handleClickToRemoveBet } =
    useBetCart()

  return (
    <Container>
      {bettingCart.map((userGame) => (
        <UserGameItem key={uuidv4()} theme={userGame.color}>
          <TrashIcon
            onClick={handleClickToRemoveBet}
            data-id={userGame.id}
            color='#888'
          />
          <VerticalLine theme={userGame.color} />
          <Heading>
            <BetNumbers>{userGame.numbers.join(', ')}</BetNumbers>
            <BetDice>
              <GameName theme={userGame.color}>{userGame.name}</GameName>
              <span>{getTotalCalculatedPrice()}</span>
            </BetDice>
          </Heading>
        </UserGameItem>
      ))}
    </Container>
  )
}
