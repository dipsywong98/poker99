import React, { FunctionComponent } from 'react'
import { ICard } from '../types'
import { makeStyles, Paper } from '@material-ui/core'
import { numberString, suitColor, suitString } from '../constants'
import { hintText } from '../utils'

const useStyle = makeStyles(() => ({
  root: {
    padding: '16px',
    width: '110px',
    height: '160px',
    borderRadius: '8px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'transform 0.1s ease-in-out',
    '&:hover': {
      transform: 'translateY(-50%)'
    }
  }
}))

export const Card: FunctionComponent<{ card: ICard, onClick: () => void, disabled?: boolean }> = ({ card, card: { suit, number }, onClick, disabled }) => {
  const classes = useStyle()

  return (
    <Paper elevation={4} style={{color: suitColor[suit], pointerEvents: disabled ? 'none' : 'auto'}} className={classes.root} onClick={!disabled ? onClick : undefined}>
      <h2 style={{fontFamily: 'Big Shoulders Inline Text, inherit', margin: 0}}>
        <div>
          {numberString[number]}
        </div>
        <div>
          {suitString[suit]}
        </div>
      </h2>
      <div>
        {hintText(card)}
      </div>
    </Paper>
  )
}
