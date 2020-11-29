import { ISuit } from './types'

export const cardPoints: Record<number, number> = {
  1: 1, // spade set 1
  2: 2,
  3: 3,
  4: 0, // reverse
  5: 0, // target
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10, // +- 10
  11: 0, //  skip
  12: 20, // +=20
  13: 99 //   set to 99
}

export const numberString: Record<number, string> = {
  1: 'A',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'J',
  12: 'Q',
  13: 'K'
}

export const suitString: Record<ISuit, string> = {
  [ISuit.CLUB]: '♣',
  [ISuit.SPADE]: '♠',
  [ISuit.HEART]: '♥',
  [ISuit.DIAMOND]: '♦'
}

export const suitColor: Record<ISuit, string> = {
  [ISuit.CLUB]: 'black',
  [ISuit.SPADE]: 'black',
  [ISuit.HEART]: 'red',
  [ISuit.DIAMOND]: 'red'
}

export const playerColor = ['red', 'yellow', 'green', 'blue']

export const maxCard = 5
