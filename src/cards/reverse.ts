import { ICard, IPlayCard, IsCard } from '../types'
import { withEndTurn, withIncrementTurn, withLog } from '../Poker99Reducer'
import { printCard } from '../utils'

export const isReverseCard: IsCard = (card: ICard): boolean => {
  return card.number === 4
}

export const reverse: IPlayCard = ({ card }, playerId) => state => {
  if (isReverseCard(card)) {
    state.direction *= -1
    return withLog(`${state.players[playerId]} played ${printCard(card)}, reverse direction`)(withEndTurn(withIncrementTurn(state)))
  }
  return state
}
