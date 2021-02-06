import React from 'react';
import Game from './components/game/Game';
import './App.css';
import image1 from './images/raccoon-player.jpg'
import image2 from './images/squirrel-player.png'
import image3 from './images/bunny-player.jpg'
import image4 from './images/hound-player.jpg'

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: image1
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: image2
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: image3
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: image4
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
