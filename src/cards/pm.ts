import { ICard, IPlayCard, IsCard } from '../types'
import { cardPoints } from '../constants'
import { withEndTurn, withIncrementTurn } from '../Poker99Reducer'
import { printCard } from '../utils'

export const isPmCard: IsCard = (card: ICard): boolean => {
  return card.number === 10 || card.number === 12
}

export const pm: IPlayCard = ({ card, increase }) => state => {
  if (isPmCard(card)) {
    if (increase === undefined) {
      throw new Error('increase is required in payload')
    }
    const points = state.points + (increase ? cardPoints[card.number] : -cardPoints[card.number])
    if (points > 99) {
      throw new Error(`playing ${printCard(card)} will exceed 99`)
    }
    return withEndTurn(withIncrementTurn({ ...state, points }))
  }
  return state
}
