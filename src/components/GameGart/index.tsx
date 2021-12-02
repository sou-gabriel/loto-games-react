import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

import * as S from './styles'

export const GameCart = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Title>Cart</S.Title>
        <S.ChoosenGameList>
          <S.ChoosenGameItem>
            <S.TrashIcon size='2.5rem' color='#888888' />
            <S.VerticalLine />
            <S.Content>
              <S.ChoosenNumbers>
                01,02,04,05,06,07,09,15,17,20,21, 22,23,24,25
              </S.ChoosenNumbers>
              <S.PurchaseRecord>
                <S.GameName>Lotofácil</S.GameName> <span>R$ 2,50</span>
              </S.PurchaseRecord>
            </S.Content>
          </S.ChoosenGameItem>
        </S.ChoosenGameList>
        <S.TotalPrice>
          <strong>Cart</strong> total: R$ 7,00
        </S.TotalPrice>
      </S.InnerContainer>
      <S.SaveGameButton>
        Save
        <AiOutlineArrowRight />
      </S.SaveGameButton>
    </S.Container>
  )
}
