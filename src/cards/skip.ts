import { ICard, IPlayCard, IsCard } from '../types'
import { withEndTurn, withIncrementTurn, withLog } from '../Poker99Reducer'
import { printCard } from '../utils'

export const isSkipCard: IsCard = (card: ICard): boolean => {
  return card.number === 11
}

export const skip: IPlayCard = ({ card }, playerId) => state => {
  if (isSkipCard(card)) {
    return withLog(`${state.players[playerId]} played ${printCard(card)}, skip`)(withEndTurn(withIncrementTurn(state)))
  }
  return state
}
