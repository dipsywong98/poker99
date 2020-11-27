import React, { FunctionComponent } from 'react'
import { usePoker99, withPoker99Network } from './withPoker99Network'
import { GamePagesSlider, Home, Room } from 'gamenet-material'
import { Game } from './Game'

const App: FunctionComponent = withPoker99Network(() => {
  const network = usePoker99()
  return (
    <GamePagesSlider gameAppState={network.gameAppState} fullPage={[false, false, true]}>
      <Home {...network} gameName='Poker100'/>
      <Room {...network} />
      <Game/>
    </GamePagesSlider>
  )
})

export default App
