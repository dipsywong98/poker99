import { ICard, IPlayCard, IsCard, ISuit } from '../types'
import { withEndTurn, withIncrementTurn, withLog } from '../Poker99Reducer'
import { printCard } from '../utils'

export const isSpade1Card: IsCard = (card: ICard): boolean => {
  return card.number === 1 && card.suit === ISuit.SPADE
}

export const spade1: IPlayCard = ({ card }, playerId) => state => {
  if (isSpade1Card(card)) {
    state.points = 1
    return withLog(`${state.players[playerId]} played ${printCard(card)}, points set to 1`)(withEndTurn(withIncrementTurn(state)))
  }
  return state
}
