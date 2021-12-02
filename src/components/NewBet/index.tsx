import { AiOutlineShoppingCart } from 'react-icons/ai'

import { GameTypeButton } from 'components/GameTypeButton'

import * as S from './styles'

export const NewBet = () => {
  return (
    <S.Section>
      <S.PrimaryTitle>
        New bet <span>for mega-sena</span>
      </S.PrimaryTitle>
      <S.SecondaryTitle>Choose a game</S.SecondaryTitle>
      <S.GameTypeButtonContainer>
        <GameTypeButton gameType='Lotofácil' color='#7F3992' isActive={false} />
        <GameTypeButton gameType='Mega-Sena' color='#01AC66' isActive />
        <GameTypeButton gameType='Lotomania' color='#F79C31' isActive={false} />
      </S.GameTypeButtonContainer>
      <S.SecondaryTitle>Fill your bet</S.SecondaryTitle>
      <S.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        placeat possimus vel temporibus quasi labore repellat nihil laboriosam
        quidem eaque.
      </S.Description>
      <S.GameNumberOptionsContainer>
        <S.GameNumberButton>1</S.GameNumberButton>
        <S.GameNumberButton>2</S.GameNumberButton>
        <S.GameNumberButton>3</S.GameNumberButton>
        <S.GameNumberButton>4</S.GameNumberButton>
        <S.GameNumberButton>5</S.GameNumberButton>
        <S.GameNumberButton>6</S.GameNumberButton>
        <S.GameNumberButton>7</S.GameNumberButton>
        <S.GameNumberButton>8</S.GameNumberButton>
        <S.GameNumberButton>9</S.GameNumberButton>
        <S.GameNumberButton>10</S.GameNumberButton>
      </S.GameNumberOptionsContainer>
      <S.ActionsContainer>
        <S.ActionsContainerInner>
          <S.PrimaryButton> Complete game</S.PrimaryButton>
          <S.PrimaryButton>Clear Game</S.PrimaryButton>
        </S.ActionsContainerInner>
        <S.SecondaryButton>
          <AiOutlineShoppingCart />
          Add to Cart
        </S.SecondaryButton>
      </S.ActionsContainer>
    </S.Section>
  )
}
