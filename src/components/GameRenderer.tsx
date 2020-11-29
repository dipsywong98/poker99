import React, { useEffect, useState } from 'react'
import { usePoker99 } from '../withPoker99Network'
import { PlayCardPayload } from '../Poker99Action'
import { Card } from './Card'

export const GameRenderer = () => {
  const { state, myPlayerId } = usePoker99()
  const [prevCardPayload, setPrevCardPayload] = useState<undefined | (PlayCardPayload & { playerId: number })>(undefined)
  const [startAnimateCard, setStartAnimateCard] = useState(false)
  const [showAnimateCard, setShowAnimateCard] = useState(false)
  useEffect(() => {
    setShowAnimateCard(true)
    setTimeout(() => {
      setStartAnimateCard(true)
    }, 1)
    setTimeout(() => {
      setPrevCardPayload(state.lastAction)
      setStartAnimateCard(false)
      setShowAnimateCard(false)
    }, 300)
  }, [state.lastAction])
  const m4 = (id: number): number => id % 4
  const origins: Array<{ bottom?: string, left?: string, top?: string, right?: string }> = [{
    top: '100%',
    left: '50%'
  }, {
    left: '0',
    top: '50%'
  }, {
    top: '0',
    left: '50%'
  }, {
    left: '100%',
    top: '50%'
  }]
  const center = {
    top: '50%', left: '50%', right: '50%', bottom: '50%'
  }
  return (
    <div style={{ backgroundColor: 'green', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
         onClick={window.alert}>
      {[1, 2, 3].map(d => <div
        key={d}
        style={{ position: 'absolute', ...origins[d] }}>{state.players[m4(myPlayerId + d)]}</div>)}
      {prevCardPayload !== undefined &&
      <div style={{ position: 'absolute', ...center }}>
        <div style={{ transform: 'translate(-50%,-50%)', width: '110px', height: '192px' }}>
          <Card card={prevCardPayload.card} disabled/>
        </div>
      </div>}
      {showAnimateCard && state.lastAction !== undefined && <div style={{
        position: 'absolute',
        ...(startAnimateCard ? center : origins[m4(state.lastAction.playerId - myPlayerId + 4)]),
        transform: state.lastAction !== prevCardPayload ? 'translate(-50%,-50%)' : undefined,
        transition: ['top', 'bottom', 'left', 'right'].map(s => `${s} 0.2s ease-in-out`).join(',')
      }}>
        <div style={{ transform: 'translate(-50%,-50%)', width: '110px', height: '192px' }}>
          <Card card={state.lastAction.card} disabled/>
        </div>
      </div>}

    </div>
  )
}
