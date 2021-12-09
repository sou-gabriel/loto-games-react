
import emptyCartIconPath from 'assets/icons/empty-cart.png'
import { Container, EmptyCartImage, FeedbackMessage } from './styles'

interface IEmptyCartProps {
  message: string
}

export const EmptyCart = ({ message }: IEmptyCartProps) => {
  return (
    <Container>
      <EmptyCartImage src={emptyCartIconPath} />
      <FeedbackMessage>{message}</FeedbackMessage>
    </Container>
  )
}
