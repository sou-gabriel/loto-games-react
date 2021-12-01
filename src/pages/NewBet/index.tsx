import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Header } from 'components/Header'
import { GameTypeButton } from 'components/GameTypeButton'
import { GameActionButton } from './GameActionButton'
import { GameCart } from './GameCart'

import { Main, Title, Subtitle, FlexRow, Description, GameNumberButton } from './styles'

export const NewBet = () => {
  return (
    <>
      <Header />
      <Main>
        <section>
          <Title>
            New bet <span>for mega-sena</span>
          </Title>
          <Subtitle>Choose a game</Subtitle>
          <FlexRow gap='1.5625rem'>
            <GameTypeButton type='Lotofácil' color='#7F3992' isActive={false} />
            <GameTypeButton type='Mega-Sena' color='#01AC66' isActive />
            <GameTypeButton type='Lotomania' color='#F79C31' isActive={false} />
          </FlexRow>
          <Subtitle>Fill your bet</Subtitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            placeat possimus vel temporibus quasi labore repellat nihil
            laboriosam quidem eaque.
          </Description>
          <FlexRow gap='0.75rem'>
            <GameNumberButton>1</GameNumberButton>
            <GameNumberButton>2</GameNumberButton>
            <GameNumberButton>3</GameNumberButton>
            <GameNumberButton>4</GameNumberButton>
            <GameNumberButton>5</GameNumberButton>
            <GameNumberButton>6</GameNumberButton>
            <GameNumberButton>7</GameNumberButton>
            <GameNumberButton>8</GameNumberButton>
            <GameNumberButton>9</GameNumberButton>
            <GameNumberButton>10</GameNumberButton>
          </FlexRow>
          <FlexRow justify='space-between'>
            <FlexRow gap='0.75rem'>
              <GameActionButton shouldFillTheBackground={false}>Complete game</GameActionButton>
              <GameActionButton shouldFillTheBackground={false}>Clear Game</GameActionButton>
            </FlexRow>
            <GameActionButton shouldFillTheBackground>
              <AiOutlineShoppingCart />
              Add to Cart
            </GameActionButton>
          </FlexRow>
        </section>
        <GameCart />
      </Main>
    </>
  )
}
