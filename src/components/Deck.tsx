import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { ICard } from '../types'
import { Card } from './Card'
import { Grid, IconButton } from '@material-ui/core'
import { Visibility } from '@material-ui/icons'

const PlaceHolder: FunctionComponent<{ reverse?: boolean, card?: ICard }> = ({ reverse, card }) => {
  const [width, setWidth] = useState(reverse ? '0' : '158px')
  const [startAnimation, setStartAnimation] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setWidth(reverse ? '158px' : '0')
      setStartAnimation(true)
    }, 1)
  }, [reverse])
  return (
    <div style={{
      maxWidth: width,
      minWidth: width,
      transition: 'min-width 0.3s ease-in-out',
      position: 'relative'
    }}>
      {card && <div style={{
        transform: startAnimation ? 'translateX(0)' : 'translateX(100vw)',
        transition: 'transform 0.3s ease-in-out',
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '8px'
      }}>
        <Card card={card} disabled/>
      </div>}
    </div>
  )
}

export const Deck: FunctionComponent<{ cards: ICard[], hide: boolean, reveal: () => void, onCardClick: (card: ICard) => Promise<void> }> = ({ cards, onCardClick, hide, reveal }) => {
  const [playedIndex, setPlayedIndex] = useState(-1)
  const handleCardClick = async (card: ICard, index: number) => {
    onCardClick(card)
      .then(() => {
        setPlayedIndex(index)
        setTimeout(() => {
          setPlayedIndex(-1)
        }, 1000)
      })
      .catch(e => console.error(e.message))
  }
  const [hovering, setHovering] = useState<number | null>(null)
  const withMaxWidth = (children: ReactNode, index: number) => (
    <div
      style={{
        padding: '8px',
        maxWidth: hovering === null
          ? 'calc(100% / 6)'
          : hovering === index ? '142px' : 'calc((100% - 142px) / 5)',
        transition: 'max-width 0.1s ease-in-out'
      }}
      onMouseEnter={() => setHovering(index)}
      onTouchStart={() => setHovering(index)}
      onMouseLeave={() => setHovering(null)}
      onTouchEnd={() => setHovering(null)}>
      {children}
    </div>
  )
  return <div style={{
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    transform: hide ? 'translateY(100%)' : 'translateY(50%)',
    transition: 'transform 0.3s ease-in-out',
    pointerEvents: 'none'
  }}>
    {hide && <IconButton onClick={reveal} style={{
      transform: 'translateY(-100%)',
      margin: 'auto',
      display: 'block',
      pointerEvents: 'all'
    }}><Visibility/></IconButton>}
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap' }}>
      {cards.map((card, index) => (
        <>
          {index === playedIndex &&
          withMaxWidth(<PlaceHolder/>, index)
          }
          {playedIndex !== -1 && index === 4
            ? withMaxWidth(<PlaceHolder reverse={true} card={card}/>, index)
            : withMaxWidth(<Grid item key={card.number * 10 + card.suit}>
              <Card card={card} onClick={() => handleCardClick(card, index)} disabled={hide}/>
            </Grid>, index)
          }
        </>
      ))}
    </div>
  </div>
}
