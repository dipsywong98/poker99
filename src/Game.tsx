import React, { FunctionComponent, useEffect, useState } from 'react'
import { usePoker99 } from './withPoker99Network'
import { PlayCardPayload, Poker99Action, Poker99ActionType } from './Poker99Action'
import { Deck } from './components/Deck'
import { ICard, ISuit } from './types'
import { isPmCard } from './cards/pm'
import { PlayCardAdditionalModal } from './components/PlayCardAdditionalModal'
import { cardPoints } from './constants'
import { isTargetCard } from './cards/target'
import { usePromise } from './usePromise'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export const Game: FunctionComponent = () => {
  const {
    state,
    dispatch,
    dispatchAs,
    myPlayerId,
    myLocals,
    hideDeck,
    setHideDeck,
    error,
    setError,
    renderedDeckId
  } = usePoker99()
  const [throttledRenderedId, setTrottledRenderedId] = useState(renderedDeckId)
  const handleError = (e: Error): void => {
    setError(e.message)
  }
  const playCard = async (payload: PlayCardPayload) => {
    const action: Poker99Action = {
      type: Poker99ActionType.PLAY_CARD,
      payload
    }
    if (state.turn === myPlayerId) {
      await dispatch(action).then(() => setError(''))
    } else if (myLocals.includes(state.players[state.turn])) {
      await dispatchAs(state.turn, action).then(() => setError(''))
    } else {
      throw new Error('Not my turn')
    }
    if (myLocals.length > 0) {
      setHideDeck(true)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setTrottledRenderedId(renderedDeckId)
    }, 500)
  }, [renderedDeckId])
  useEffect(() => {
    setTrottledRenderedId(myPlayerId)
  }, [myPlayerId])
  const targets: Array<[number, string]> = state.players.map((name, id) => [id, name] as [number, string]).filter(([id]) => id !== throttledRenderedId && !state.dead[id])
  const again = async (): Promise<void> => {
    await dispatch({
      type: Poker99ActionType.END
    }).catch(handleError)
  }
  const [modalCard, setModalCard] = useState<null | ICard>(null)
  const [{ resolve, reject }, makePromise] = usePromise<void>()
  const handleCardClick = async (card: ICard) => {
    try {
      if (isPmCard(card)) {
        if (cardPoints[card.number] + state.points <= 99) {
          setModalCard(card)
          await makePromise()
        } else {
          await playCard({
            card,
            increase: false
          })
        }
      } else if (isTargetCard(card)) {
        if (targets.length === 1) {
          await playCard({
            card,
            target: targets[0][0]
          })
        } else {
          setModalCard(card)
          await makePromise()
        }
      } else {
        await playCard({ card })
      }
    } catch (e) {
      handleError(e)
      throw e
    }
  }

  const handleModalClose = (payload?: PlayCardPayload) => {
    if (payload !== undefined) {
      playCard(payload).then(resolve).catch(handleError).catch(reject)
    } else {
      reject?.(new Error('the operation is cancelled'))
    }
    setModalCard(null)
  }
  return (
    <div style={{ pointerEvents: 'all' }}>
      {state.started && myPlayerId !== undefined &&
      <Deck
        cards={state.playerDeck[throttledRenderedId ?? myPlayerId]}
        onCardClick={handleCardClick}
        hide={hideDeck}
        reveal={() => setHideDeck(false)}
      />}
      <div style={{ maxHeight: '50%' }}>
        {state.winner !== undefined && state.winner !== null && <div>winner is {state.players[state.winner]}
          <button onClick={again}>again</button>
        </div>}
        {state.logs.slice().reverse().map((s, k) => <div key={k}>{s}</div>)}
      </div>
      <PlayCardAdditionalModal
        open={modalCard !== null}
        card={modalCard ?? { suit: ISuit.SPADE, number: 0 }}
        onClose={handleModalClose}
        targets={targets}
      />
      <Dialog open={error !== ''} onClose={() => setError('')} aria-labelledby="form-dialog-title">
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setError('')} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
