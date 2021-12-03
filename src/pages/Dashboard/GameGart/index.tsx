import { AiOutlineArrowRight } from 'react-icons/ai'

import { ChoosenGameList } from '../ChoosenGameList'

import * as S from './styles'

export const GameCart = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Title>Cart</S.Title>
        <ChoosenGameList />
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
