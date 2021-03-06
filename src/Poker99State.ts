// Poker99State.ts

import { GenericBoardGameState } from 'gamenet'
import { IDeck } from './types'
import { PlayCardPayload } from './Poker99Action'

export class Poker99State extends GenericBoardGameState {
  maxPlayer = 4
  minPlayer = 4
  turn = 0
  direction = 1
  points = 0
  dead: Record<number, true> = {}
  drawDeck: IDeck = []
  trashDeck: IDeck = []
  playerDeck: IDeck[] = []
  logs: string[] = []
  lastAction: PlayCardPayload & { playerId: number } | null = null
}
