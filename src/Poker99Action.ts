// Poker99Action.ts

import { GameActionTypes, GenericBoardGameAction } from 'gamenet'
import { Card } from './types'
import { NetworkAction } from 'smnet'

export enum Poker99ActionType {
  PLAY_CARD,
  END,
}

export interface PlayCardPayload {
  card: Card
  increase?: boolean
  target?: number
}

export type Poker99Action = (({
  type: Poker99ActionType.PLAY_CARD
  payload: PlayCardPayload
} | {
  type: Poker99ActionType.END
} | {
  type: GameActionTypes
  payload: never
}) & NetworkAction) | GenericBoardGameAction
