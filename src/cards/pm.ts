import { ICard, IPlayCard, IsCard } from '../types'
import { cardPoints } from '../constants'
import { withEndTurn, withIncrementTurn, withLog } from '../Poker99Reducer'
import { printCard } from '../utils'

export const isPmCard: IsCard = (card: ICard): boolean => {
  return card.number === 10 || card.number === 12
}

export const pm: IPlayCard = ({ card, increase }, playerId) => state => {
  if (isPmCard(card)) {
    if (increase === undefined) {
      throw new Error('increase is required in payload')
    }
    const delta = increase ? cardPoints[card.number] : -cardPoints[card.number]
    const points = state.points + delta
    if (points > 99) {
      throw new Error(`playing ${printCard(card)} will exceed 99`)
    }
    return withLog(`${state.players[playerId]} played ${printCard(card)} ${delta}`)(withEndTurn(withIncrementTurn({ ...state, points })))
  }
  return state
}
