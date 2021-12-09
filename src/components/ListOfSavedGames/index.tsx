import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import { RootState } from 'store/modules/rootReducer'
import {
  getErrorMessage,
  showFeedbackMessage,
  getUserToken,
  getFormattedGamePrice,
} from 'utils/functions'
import * as S from './styles'

interface ISavedGame {
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

export const ListOfSavedGames = () => {
  const [savedGames, setSavedGames] = useState<ISavedGame[]>([])
  const activeGameOption = useSelector(
    (state: RootState) => state.activeGameOption,
  )

  const getUrl = useCallback(() => {
    const activeGameOptionName = activeGameOption.type
    return `http://127.0.0.1:3333/bet/all-bets?type%5B%5D=${activeGameOptionName}`
  }, [activeGameOption])

  console.log('savedGames', savedGames)

  const getFormattedDate = useCallback((date: string) => {
    return new Intl.DateTimeFormat('pt-br').format(new Date(date))
  }, [])

  useEffect(() => {
    const fetchSavedBets = async () => {
      const userToken = getUserToken()

      try {
        const response = await axios.get(getUrl(), {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })

        const savedGames = response.data

        setSavedGames(savedGames)
      } catch (error) {
        const message = getErrorMessage(error)

        showFeedbackMessage({
          type: 'error',
          message,
        })
      }
    }

    fetchSavedBets()
  }, [activeGameOption, getUrl])

  return (
    <S.Container theme={activeGameOption.color}>
      {savedGames.map(({ choosen_numbers, created_at, price, type, id }) => (
        <S.ListItem theme={activeGameOption.color} key={id}>
          <div>
            <S.ChoosenNumbers>{choosen_numbers}</S.ChoosenNumbers>
            <S.PurchaseRecord>
              {getFormattedDate(created_at)} - ({getFormattedGamePrice(price)})
            </S.PurchaseRecord>
            <S.GameType theme={activeGameOption.color}>{type.type}</S.GameType>
          </div>
        </S.ListItem>
      ))}
    </S.Container>
  )
}
