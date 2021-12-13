import { useDispatch } from 'react-redux'
import { createActionToRemoveBetFromCart } from 'store/modules/bettingCart/actions'

import { IBet } from 'store/modules/bettingCart/types'

import { showFeedbackMessage, getFormattedPrice } from 'shared/utils/functions'

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

interface IUserBetListProps {
  bets: IBet[]
}

export const UserBetList = ({ bets }: IUserBetListProps) => {
  const dispatch = useDispatch()

  return (
    <Container>
      {bets.map((bet) => (
        <UserGameItem key={bet.id} theme={bet.color}>
          <TrashIcon
            data-id={bet.id}
            color='#888'
            onClick={() => {
              dispatch(createActionToRemoveBetFromCart(bet.id))
              showFeedbackMessage({
                type: 'success',
                message: 'Aposta deletada com sucesso do carrinho!',
              })
            }}
          />
          <VerticalLine theme={bet.color} />
          <Heading>
            <BetNumbers>{bet.chosenNumbers.join(', ')}</BetNumbers>
            <BetDice>
              <GameName theme={bet.color}>{bet.type}</GameName>
              <span>{getFormattedPrice(bet.price)}</span>
            </BetDice>
          </Heading>
        </UserGameItem>
      ))}
    </Container>
  )
}
