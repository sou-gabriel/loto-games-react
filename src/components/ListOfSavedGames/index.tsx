import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import { EmptyCart } from 'components/EmptyCart'

import {
  getUserToken,
  getFormattedPrice,
  getFormattedDate,
} from 'shared/utils/functions'

import { RootState } from 'store/modules/rootReducer'

import {
  Container,
  ListItem,
  VerticalLine,
  ChoosenNumbers,
  PurchaseRecord,
  GameType,
} from './styles'

interface IListOfSavedGames {
  activeBets: string[]
}

interface ISavedBet {
  choosen_numbers: string
  created_at: string
  game_id: number
  id: number
  price: 2
  type: {
    id: number
    type: string
  }
  user_id: number
}

export const ListOfSavedGames = ({ activeBets }: IListOfSavedGames) => {
  const [savedBets, setSavedBets] = useState<ISavedBet[]>([])
  const gameOptions = useSelector(({ gameOptions }: RootState) => gameOptions)

  const createGameColors = () => {
    return gameOptions.reduce((acc, { type, color }) => {
      acc[type] = color
      return acc
    }, {} as any)
  }

  const getGameColor = (type: string) => {
    const gameColors = createGameColors()
    return gameColors[type]
  }

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:3333/bet/all-bets?type%5B%5D=${activeBets.join(
          '&type%5B%5D=',
        )}`,
        {
          headers: {
            Authorization: `Bearer ${getUserToken()}`,
          },
        },
      )
      .then((response) => setSavedBets(response.data))
  }, [activeBets])

  if (!savedBets.length) {
    return <EmptyCart message='Não há jogos salvos.' />
  }

  return (
    <Container>
      {savedBets.map(({ choosen_numbers, created_at, price, type, id }) => (
        <ListItem key={id} color={getGameColor(type.type)}>
          <VerticalLine color={getGameColor(type.type)} />
          <div>
            <ChoosenNumbers>{choosen_numbers}</ChoosenNumbers>
            <PurchaseRecord>
              {getFormattedDate(created_at)} - ({getFormattedPrice(price)})
            </PurchaseRecord>
            <GameType color={getGameColor(type.type)}>{type.type}</GameType>
          </div>
        </ListItem>
      ))}
    </Container>
  )
}
