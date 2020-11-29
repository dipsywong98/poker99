import React, { FunctionComponent } from 'react'
import { ICard } from '../types'
import { Card } from './Card'
import { Grid, IconButton } from '@material-ui/core'
import { Visibility } from '@material-ui/icons'

export const Deck: FunctionComponent<{ cards: ICard[], hide: boolean, reveal: () => void, onCardClick: (card: ICard) => void }> = ({ cards, onCardClick, hide, reveal }) => {

  return <div style={{
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    transform: hide ? 'translateY(100%)' : 'translateY(50%)',
    transition: 'transform 0.3s ease-in-out'
  }}>
    {hide && <IconButton onClick={reveal} style={{
      transform: 'translateY(-100%)',
      margin: 'auto',
      display: 'block'
    }}><Visibility/></IconButton>}
    <Grid container justify='center' spacing={2}>
      {cards?.map(card => (
        <Grid item key={card.number * 10 + card.suit}>
          <Card card={card} onClick={() => onCardClick(card)} disabled={hide}/>
        </Grid>
      ))}
    </Grid>
  </div>
}
