import { ICard, IPlayCard, IsCard } from '../types'
import { withEndTurn } from '../Poker99Reducer'

export const isTargetCard: IsCard = (card: ICard): boolean => {
  return card.number === 5
}

export const target: IPlayCard = ({ card, target }, playerId) => state => {
  if (isTargetCard(card)) {
    if (target === undefined) {
      throw new Error('target is required in payload')
    }
    if (target === playerId) {
      throw new Error('cannot target myself')
    }
    state.turn = target
    return withEndTurn(state)
  }
  return state
}
