import { useState, useEffect, useCallback, MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { showFeedbackMessage } from 'utils/functions'
import { createActionToAddGameToCart } from 'store/modules/userGamesCart/actions'
import { IGameOption } from 'store/modules/gameOptions/types'
import { RootState } from 'store/modules/rootReducer'
import { createActionToSetActiveGameOption } from 'store/modules/activeGameOption/actions'

interface IUseNewBet {
  isLoading: boolean
  activeGameOption: IGameOption | null
  chosenNumbers: number[]
  gameOptions: IGameOption[]
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

  useEffect(() => {
    const areGameOptionsAvailable = gameOptions
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
      const randomNumber = Math.round(Math.random() * (activeGameOption?.range || 0))

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
    } else if (chosenNumbers.length <= (activeGameOption?.max_number || 0)) {
      setChosenNumbers((prevChosenNumbers) =>
        prevChosenNumbers.concat(newChosenNumber),
      )
      showFeedbackMessage({
        type: 'success',
        message: 'Número de jogo adicionado!',
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

  return {
    isLoading,
    activeGameOption,
    chosenNumbers,
    gameOptions,
    createGameNumbers,
    handleClickGameNumber,
    handleCompleteGameButtonClick,
    handleClearGameButtonClick,
    handleClickAddGameToCartButton,
  }
}
