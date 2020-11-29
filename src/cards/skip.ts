import { ICard, IPlayCard, IsCard } from '../types'
import { withEndTurn, withIncrementTurn } from '../Poker99Reducer'

export const isSkipCard: IsCard = (card: ICard): boolean => {
  return card.number === 11
}

export const skip: IPlayCard = ({ card }) => state => {
  if (isSkipCard(card)) {
    return withEndTurn(withIncrementTurn(state))
  }
  return state
}
