import { ICard, IPlayCard, IsCard } from '../types'
import { withEndTurn, withIncrementTurn } from '../Poker99Reducer'

export const isBombCard: IsCard = (card: ICard): boolean => {
  return card.number === 13
}

export const bomb: IPlayCard = ({ card }) => state => {
  if (isBombCard(card)) {
    state.points = 99
    return withEndTurn(withIncrementTurn(state))
  }
  return state
}
