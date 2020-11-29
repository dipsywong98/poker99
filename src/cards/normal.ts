import { ICard, IPlayCard, IsCard, ISuit } from '../types'
import { cardPoints } from '../constants'
import { withEndTurn, withIncrementTurn } from '../Poker99Reducer'
import { printCard } from '../utils'

export const isNormalCard: IsCard = (card: ICard): boolean => {
  if (card.suit === ISuit.SPADE && card.number === 1) {
    return false
  } else {
    return [1, 2, 3, 6, 7, 8, 9].includes(card.number)
  }
}

export const normal: IPlayCard = ({ card }) => state => {
  if (isNormalCard(card)) {
    const points = state.points + cardPoints[card.number]
    if (points > 99) {
      throw new Error(`playing ${printCard(card)} will exceed 99`)
    }
    return withEndTurn(withIncrementTurn({ ...state, points }))
  }
  return state
}
