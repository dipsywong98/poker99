import { Poker99State } from './Poker99State'
import { Poker99Action, Poker99ActionType } from './Poker99Action'
import { ICard } from './types'
import { cardPoints } from './constants'
import { shuffle } from 'gamenet'
import { isNormalCard } from './cards/normal'
import { isPmCard } from './cards/pm'
import { isSpade1Card } from './cards/spade1'

const isSkippingCard = (card: ICard): boolean => {
  return [4, 5, 11, 13].includes(card.number)
}

export const aiAction = (state: Poker99State, turn: number): Poker99Action => {
  const cards = state.playerDeck[turn]
  const points = state.points
  const normalCards = cards.filter(isNormalCard).sort((a, b) => cardPoints[b.number] - cardPoints[a.number])

  // play bomb if have less than 3 normal card
  const card13 = cards.find(c => c.number === 13)
  if (card13 !== undefined) {
    if (points !== 99 && normalCards.length < 3) {
      return {
        type: Poker99ActionType.PLAY_CARD,
        payload: {
          card: card13
        }
      }
    }
  }

  // play normal card if it wont exceed 99
  for (const card of normalCards) {
    if ((points + cardPoints[card.number]) <= 99) {
      return ({
        type: Poker99ActionType.PLAY_CARD,
        payload: {
          card
        }
      })
    }
  }

  // play pm card  for plus if it wont exceed 99
  const pmCards = cards.filter(isPmCard)
  for (const card of pmCards.sort((a, b) => b.number - a.number)) {
    if (points + cardPoints[card.number] <= 99) {
      return ({
        type: Poker99ActionType.PLAY_CARD,
        payload: {
          card,
          increase: true
        }
      })
    }
  }
  {
    // play skipping card if point is huge
    const card = cards.find(isSkippingCard)
    if (card !== undefined) {
      return {
        type: Poker99ActionType.PLAY_CARD,
        payload: {
          card,
          target: state.nameDict[shuffle(state.players.filter((name, id) => !state.dead[id] && id !== turn))[0]]
        }
      }
    }
  }

  // if no skipping card then play pm card in minus
  for (const card of pmCards.sort((a, b) => a.number - b.number)) {
    if (points - cardPoints[card.number] <= 99) {
      return ({
        type: Poker99ActionType.PLAY_CARD,
        payload: {
          card,
          increase: false
        }
      })
    }
  }
  const spade1 = cards.find(isSpade1Card)
  if(spade1 !== undefined) {
    return ({
      type: Poker99ActionType.PLAY_CARD,
      payload: {
        card: spade1
      }
    })
  }
  throw new Error('reached an edge case')
}
