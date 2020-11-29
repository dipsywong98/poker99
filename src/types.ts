import { Poker99State } from './Poker99State'
import { PlayCardPayload } from './Poker99Action'

export enum ISuit {
  SPADE,
  HEART,
  CLUB,
  DIAMOND
}

export interface ICard {
  suit: ISuit
  number: number
}

export type IDeck = ICard[]

export type IStateMapper = (prevState: Poker99State) => Poker99State

export type IsCard = (card: ICard) => boolean

export type IPlayCard = (payload: PlayCardPayload, playerId: number) => IStateMapper
