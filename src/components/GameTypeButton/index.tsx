import * as S from './styles'
interface GameTypeButtonProps {
  gameType: 'Lotofácil' | 'Mega-Sena' | 'Lotomania'
  color: string
  isActive: boolean
}

export const GameTypeButton = ({ gameType, isActive, color }: GameTypeButtonProps) => {
  return (
    <S.Container isActive={isActive} color={color}>{gameType}</S.Container>
  )
}
