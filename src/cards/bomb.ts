import { ICard, IPlayCard, IsCard } from '../types'
import { withEndTurn, withIncrementTurn, withLog } from '../Poker99Reducer'
import { printCard } from '../utils'

export const isBombCard: IsCard = (card: ICard): boolean => {
  return card.number === 13
}

export const bomb: IPlayCard = ({ card }, playerId) => state => {
  if (isBombCard(card)) {
    state.points = 99
    return withLog(`${state.players[playerId]} played bomb card ${printCard(card)}, set point to 99`)(withEndTurn(withIncrementTurn(state)))
  }
  return state
}
