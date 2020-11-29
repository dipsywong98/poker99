import { ICard, ISuit } from './types'
import { cardPoints } from './constants'
import { isSpade1Card } from './cards/spade1'
import { isBombCard } from './cards/bomb'
import { isReverseCard } from './cards/reverse'
import { isTargetCard } from './cards/target'
import { isSkipCard } from './cards/skip'
import React from 'react'

export const minPossible = (current: number, cards: ICard[]): number[] => {
  let min = Infinity
  let index = 0
  cards.forEach(({ suit, number }, k) => {
    let next
    if (suit === ISuit.SPADE && number === 1) {
      next = 1
    } else if (number === 10) {
      next = current - 10
    } else if (number === 12) {
      next = current - 20
    } else if (number === 13) {
      next = 99
    } else {
      next = current + cardPoints[number]
    }
    if (next < min) {
      min = next
      index = k
    }
  })
  return [min, index]
}

export const hintText = (card: ICard): React.ReactNode => {
  if(isSpade1Card(card)) {
    return '→ 1'
  }else if(isReverseCard(card)){
    return '↻ reverse'
  }else if(isTargetCard(card)){
    return '⛶ target'
  }else if(isSkipCard(card)){
    return '× skip'
  }else if(isBombCard(card)) {
    return '→ 99'
  }else if(card.number === 10) {
    return '± 10'
  }else if(card.number === 12) {
    return '± 20'
  } else {
    return `+ ${card.number}`
  }
}
