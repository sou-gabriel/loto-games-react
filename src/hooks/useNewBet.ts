import { useState, useCallback, MouseEvent, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUserToken, showFeedbackMessage } from 'utils/functions'
import { createActionToAddGameToCart } from 'store/modules/userGamesCart/actions'
import { IGameOption } from 'store/modules/gameOptions/types'
import { RootState } from 'store/modules/rootReducer'
import { createActionToSetGameOptions } from 'store/modules/gameOptions/action'
import { createActionToSetActiveGameOption } from 'store/modules/activeGameOption/actions'
import axios from 'axios'

interface IUseNewBet {
  activeGameOption: IGameOption | null
  chosenNumbers: number[]
  gameOptions: IGameOption[]
  isLoading: boolean
  createGameNumbers: () => number[]
  handleClickGameNumber: (event: MouseEvent<HTMLButtonElement>) => void
  handleCompleteGameButtonClick: () => void
  handleClearGameButtonClick: () => void
  handleClickAddGameToCartButton: () => void
}

export const useNewBet = (): IUseNewBet => {
  const [isLoading, setIsLoading] = useState(true)
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([])
  const gameOptions = useSelector((state: RootState) => state.gameOptions)
  const activeGameOption: IGameOption | null = useSelector((state: RootState) => state.activeGameOption)
  const dispatch = useDispatch()
  const userGamesCart = useSelector((state: RootState) => state.userGamesCart)

  const createGameNumbers = useCallback(() => {
    const randomNumbers = []
    const gameNumberRange = activeGameOption?.range || 0

    for (
      let gameNumber = 0;
      randomNumbers.length <= gameNumberRange;
      gameNumber++
    ) {
      randomNumbers.push(gameNumber)
    }

    return randomNumbers
  }, [activeGameOption])

  const createRandomNumbers = useCallback(() => {
    const randomNumbers: number[] = []

    do {
      const randomNumber = Math.round(
        Math.random() * (activeGameOption?.range || 0)
      )

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber)
      }
    } while (randomNumbers.length !== activeGameOption?.max_number)

    return randomNumbers
  }, [activeGameOption])

  const clearChosenNumbers = useCallback(
    () => setChosenNumbers([]),
    [setChosenNumbers],
  )

  const compareChosenNumbersWithCartNumbers = useCallback(
    (cartGameNumbers: number[]) =>
      cartGameNumbers.every(
        (cartGameNumber, index) => cartGameNumber === chosenNumbers[index],
      ),
    [chosenNumbers],
  )

  const handleClickGameNumber = (event: MouseEvent<HTMLButtonElement>) => {
    const newChosenNumber = Number((event.target as HTMLFormElement).value)
    const isANumberAlreadyChosen = chosenNumbers.includes(newChosenNumber)

    if (isANumberAlreadyChosen) {
      setChosenNumbers((prevChosenNumbers) =>
        prevChosenNumbers.filter(
          (prevChosenNumber) => prevChosenNumber !== newChosenNumber,
        ),
      )
      showFeedbackMessage({
        type: 'error',
        message: 'Número de jogo removido!',
      })
    } else if (chosenNumbers.length < (activeGameOption?.max_number || 0)) {
      setChosenNumbers((prevChosenNumbers) =>
        prevChosenNumbers.concat(newChosenNumber),
      )
      showFeedbackMessage({
        type: 'success',
        message: 'Número de jogo adicionado!',
      })
    } else {
      showFeedbackMessage({
        type: 'error',
        message: `Você não pode selecionar mais números ao jogo.`
      })
    }
  }

  const handleCompleteGameButtonClick = () => {
    const randomNumbers = createRandomNumbers()

    setChosenNumbers(randomNumbers)
    showFeedbackMessage({
      type: 'success',
      message: 'Números selecionados com sucesso!',
    })
  }

  const handleClearGameButtonClick = () => {
    const isAValidAmountOfChosenNumbers =
      chosenNumbers.length === activeGameOption?.max_number

    clearChosenNumbers()

    if (isAValidAmountOfChosenNumbers) {
      showFeedbackMessage({
        type: 'error',
        message: 'Todos os números foram limpos!',
      })
    }
  }

  const handleClickAddGameToCartButton = () => {
    const isANumberOfChosenNumbersValid =
      chosenNumbers.length === activeGameOption?.max_number

    const isItARepeatGame = userGamesCart.some((game) => {
      const doTheNumbersChosenAlreadyExistInTheCart =
        compareChosenNumbersWithCartNumbers(game.numbers)
      const isThereAlreadySuchAGameOnTheCart = activeGameOption.id === game.id

      return (
        doTheNumbersChosenAlreadyExistInTheCart ===
        isThereAlreadySuchAGameOnTheCart
      )
    })

    if (isItARepeatGame) {
      showFeedbackMessage({
        type: 'error',
        message: 'Já existe um jogo semelhante a este no carrinho.',
      })
      return
    }

    if (isANumberOfChosenNumbersValid) {
      const newGame = {
        id: activeGameOption?.id,
        name: activeGameOption?.type || '',
        numbers: chosenNumbers,
        price: activeGameOption?.price || 0,
        color: activeGameOption?.color || '#000',
      }

      dispatch(createActionToAddGameToCart(newGame))
      clearChosenNumbers()
      showFeedbackMessage({
        type: 'success',
        message: 'Jogo adicionado ao carrinho!',
      })
      return
    }

    showFeedbackMessage({
      type: 'error',
      message: 'É necessário preencher todos os números!',
    })
  }

  useEffect(clearChosenNumbers, [activeGameOption, clearChosenNumbers])

  // Estava trabalhando aqui... Toda vez que o usuário da um refresh na página
  // estou obtendo o token dele armazenado na local storage e montando minha interfance
  useEffect(() => {
    axios.get('http://127.0.0.1:3333/cart_games', {
      headers: {
        Authorization: `Bearer ${getUserToken()}`
      }
    }).then(response => {
      dispatch(createActionToSetGameOptions(response.data.types))
    })
  }, [])

  useEffect(() => {
    const areGameOptionsAvailable = gameOptions.length >= 1
    let timerId: ReturnType<typeof setTimeout>

    if (areGameOptionsAvailable) {
      const defaultGame = gameOptions[0]

      timerId = setTimeout(() => {
        setIsLoading(false)
        dispatch(createActionToSetActiveGameOption(defaultGame))
      }, 500)
    }

    return () => clearTimeout(timerId)
  }, [gameOptions, dispatch])
  // essa lógica está repetida em alguns componentes. Seria uma boa separá-la em um hook, por exemplo
  // ...

  return {
    activeGameOption,
    chosenNumbers,
    gameOptions,
    isLoading,
    createGameNumbers,
    handleClickGameNumber,
    handleCompleteGameButtonClick,
    handleClearGameButtonClick,
    handleClickAddGameToCartButton,
  }
}
