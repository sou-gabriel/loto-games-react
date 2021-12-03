import * as S from './styles'

export const ChoosenGameList = () => {
  return (
    <S.Container>
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
    </S.Container>
  )
}
