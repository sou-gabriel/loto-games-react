import { Container } from './styles'

interface GameTypeButtonProps {
  type: 'Lotofácil' | 'Mega-Sena' | 'Lotomania'
  color: string
  isActive: boolean
}

export const GameTypeButton = (props: GameTypeButtonProps) => {
  return (
    <Container isActive={props.isActive} color={props.color}>
      {props.type}
    </Container>
  )
}
