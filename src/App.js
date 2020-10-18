import React from 'react';
import RadarMap from './charts/radarmap';
import Horizontal from './charts/horizontal'
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <a href='https://github.com/Hi-Van/preeepare' target='_blank' rel='noopener noreferrer'>
        <button className="to-code">
          <span className="emoji-logo" role="img" aria-label='paper'>📃</span>
        </button>
      </a>

      <h1>Preeepare</h1>
      <h2>Visualize your progression</h2>

      <h1 className='chart-opt'>I want to see my...</h1>

      <div className='btn-layout'>
        <Link to='/topics'><button className='btn-chart'><span role="img" aria-label='books'>📚</span> TOPICS</button></Link>
        <Link to='/accuracy'><button className='btn-chart'><span role="img" aria-label='target'>🎯</span> ACCURACY</button></Link>
        <Link to='/speed'><button className='btn-chart'><span role="img" aria-label='runner'>🏃‍♂️💨</span> SPEED</button></Link>
      </div>

      <Switch>
        <Route path='/topics' component={RadarMap} />
        <Route path='/accuracy' component={Horizontal} />
      </Switch>
    </div>
  );
}

export default App;
