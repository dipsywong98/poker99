import React, { FunctionComponent } from 'react'
import { usePoker99, withPoker99Network } from './withPoker99Network'
import { GamePagesSlider, Home, Room } from 'gamenet-material'
import { Game } from './Game'
import { GameRenderer } from './components/GameRenderer'

const App: FunctionComponent = withPoker99Network(() => {
  const network = usePoker99()
  return (
    <GamePagesSlider gameAppState={network.gameAppState} fullPage={[false, false, true]} GameRenderer={<GameRenderer/>}>
      <Home {...network} gameName='Poker99'/>
      <Room {...network} />
      <Game/>
    </GamePagesSlider>
  )
})

export default App
