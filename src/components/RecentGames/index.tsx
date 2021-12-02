import * as S from './styles'

import { GameTypeButton } from 'components/GameTypeButton'

export const RecentGames = () => {
  return (
    <>
      <S.TopLine>
        <S.PrimaryTitle>Recent Games</S.PrimaryTitle>
        <S.FilterLine>
          <S.SecondaryTitle>Filters</S.SecondaryTitle>
          <S.ActionsList>
            <GameTypeButton
              gameType='Lotofácil'
              color='#7F3992'
              isActive={false}
            />
            <GameTypeButton gameType='Mega-Sena' color='#01AC66' isActive />
            <GameTypeButton
              gameType='Lotomania'
              color='#F79C31'
              isActive={false}
            />
          </S.ActionsList>
        </S.FilterLine>
      </S.TopLine>

      <S.RegisteredGameList>
        <S.RegisteredGameItem>
          <div>
            <S.ChoosenNumbers>
              01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25
            </S.ChoosenNumbers>
            <S.PurchaseRecord>30/11/2020 - (R$ 2,50)</S.PurchaseRecord>
            <S.GameName>Lotomania</S.GameName>
          </div>
        </S.RegisteredGameItem>
      </S.RegisteredGameList>
    </>
  )
}
