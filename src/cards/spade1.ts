import { ICard, IPlayCard, IsCard, ISuit } from '../types'
import { withEndTurn, withIncrementTurn } from '../Poker99Reducer'

export const isSpade1Card: IsCard = (card: ICard): boolean => {
  return card.number === 1 && card.suit === ISuit.SPADE
}

export const spade1: IPlayCard = ({ card }) => state => {
  if (isSpade1Card(card)) {
    state.points = 1
    return withEndTurn(withIncrementTurn(state))
  }
  return state
}
