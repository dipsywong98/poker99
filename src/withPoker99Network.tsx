import React, { createContext, FunctionComponent, useContext, useEffect } from 'react'
import { BoardGameContextInterface, useBoardGameNetwork } from 'gamenet'
import { Poker99State } from './Poker99State'
import { Poker99Reducer } from './Poker99Reducer'
import { Poker99Action } from './Poker99Action'
import { aiAction } from './aiAction'

const Poker99Context = createContext<BoardGameContextInterface<Poker99State, Poker99Action> | null>(null)

export const withPoker99Network = (Component: FunctionComponent): FunctionComponent => {
  const WithGameNetwork: FunctionComponent = props => {
    const network = useBoardGameNetwork(Poker99Reducer, new Poker99State())
    const {myAis, state,dispatchAs} = network
    useEffect(() => {
      if (aiAction !== undefined && myAis.includes(state.players[state.turn]) && state.started && state.winner === null) {
        const cb = (): void => {
          const action = aiAction(state, state.turn)
          // action.peerId = Object.keys(state.members).filter(peerId => state.members[peerId] === state.players[state.turn])[0]
          dispatchAs(state.turn, action).catch(console.error)
        }
        const n = window.setTimeout(cb, 1000)
        return () => {
          window.clearTimeout(n)
        }
      }
    }, [dispatchAs, myAis, state])
    return (
      <Poker99Context.Provider value={network}>
        <Component {...props} />
    </Poker99Context.Provider>
  )
  }
  WithGameNetwork.displayName = 'WithGameNetwork'
  return WithGameNetwork
}

export const usePoker99 = (): BoardGameContextInterface<Poker99State, Poker99Action> => {
  const network: BoardGameContextInterface<Poker99State, Poker99Action> | null = useContext(Poker99Context)
  if (network === null) {
    throw new Error('please wrap it using withPoker99Network before calling this hook')
  }
  return network
}
