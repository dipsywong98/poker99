import { ICard, IPlayCard, IsCard } from '../types'
import { withEndTurn, withIncrementTurn } from '../Poker99Reducer'

export const isReverseCard: IsCard = (card: ICard): boolean => {
  return card.number === 4
}

export const reverse: IPlayCard = ({ card }) => state => {
  if (isReverseCard(card)) {
    state.direction *= -1
    return withEndTurn(withIncrementTurn(state))
  }
  return state
}
