import React, { useState } from 'react';
import RadarMap from './charts/topics';
import dload from './download-csv.PNG';
import csheet from './copy-sheet.PNG';
import sgraph from './select-graph.PNG';
import ddrop from './drag-drop.PNG';
import { Route, Link, Switch } from 'react-router-dom';
import { Link as SmoothLink } from 'react-scroll';
import links from './links.json';
import Fade from 'react-reveal/Fade';
import Fuse from 'fuse.js';
import './App.css';

function App() {

  const [topicsData, setTopicsData] = useState(
    {
      labels: ['example', 'example', 'example'],
      datasets: [
        {
          label: 'My Questions',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [1, 2, 3]
        }
      ]
    }
  );

  async function parse(e) {
    e.preventDefault();

    const respond = await e.dataTransfer.files
    const data = await respond[0].text();
    const parseData = await data.split('\n').slice(0, 2);
    let result = [];

    parseData.forEach(elem => {
      let row = elem.split(',');
      row = row.slice(6);
      result.push(row);
    });

    const titles = result[0]
    const vals = result[1]

    setTopicsData(topicsData => topicsData.labels = titles.slice(6), topicsData.datasets[0].data = vals.slice(6))
  }

  const [query, setQuery] = useState('');
  const [test, setTest] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQuery(test);
  }

  const fuse = new Fuse(links, {
    keys: [
      'title',
      'type'
    ],
    threshold: '0.35'
  })


  const results = fuse.search(query);

  const linkResult = query ? results.map(result => result.item) : links;

  return (
    <div className="App">
      <div className='header'>
        <div className='header-text'>
          <a className='twitter' href='https://hi-van.github.io/preeepare/'>
            <span className="emoji-logo-header" role="img" aria-label='paper'>📃 Preeepare</span>
          </a>
          <a className='twitter' href='https://twitter.com/Hi_Im_Van' target='_blank' rel='noopener noreferrer'>by Van S.</a>
        </div>
        <div className='header-div' />
      </div>

      <a href='https://github.com/Hi-Van/preeepare' target='_blank' rel='noopener noreferrer'>
        <button className="to-code">
          <span className="emoji-logo" role="img" aria-label='paper'>📃</span>
        </button>
      </a>

      <h1>Preeepare</h1>
      <h2>Visualize your progression</h2>

      <h1 className='chart-opt'>I am looking for...</h1>

      <div className='btn-layout'>
        <SmoothLink to="instructions" smooth={true} duration={1000}><button className='btn-nav'><span role="img" aria-label='papers'>📰</span> INSTRUCTIONS</button></SmoothLink>
        <SmoothLink to="graphs" smooth={true} duration={1000}><button className='btn-nav'><span role="img" aria-label='laptop'>📈</span> VISUALIZATIONS</button></SmoothLink>
        <SmoothLink to="info" smooth={true} duration={1000}><button className='btn-nav'><span role="img" aria-label='target'>💬</span> INFORMATION</button></SmoothLink>
      </div>

      <div className='spacer' id='instructions' />
      <h1 className='chart-opt'>Instructions...</h1>
      <Fade bottom>
        <h2>1. <a className='refer-one' href='https://docs.google.com/spreadsheets/d/1h2cHK-IY5JrR5z3KY5GVl0QYzofaX6ZPeebfQx9pKG4/edit?usp=sharing' target='_blank' rel='nooopener noreferrer'>Copy</a> the provided template sheet</h2>
        <img src={csheet} alt='download ' />
      </Fade>

      <Fade bottom>
        <h2>2. <a className='refer-two' href='https://youtu.be/ZL4XtwermIE' target='_blank' rel='nooopener noreferrer'>Download</a> sheet as CSV file</h2>
        <img src={dload} alt='download ' />
      </Fade>

      <Fade bottom>
        <h2>3. Choose which graph you want to view</h2>
        <img src={sgraph} alt='download ' />
      </Fade>

      <Fade bottom>
        <h2>4. Drag and drop file into Preeepare</h2>
        <img src={ddrop} alt='download ' />
      </Fade>

      <Fade bottom>
        <div
          className='input'
          onDragOver={(e) => { e.preventDefault(); }}
          onDrop={parse}
        >
          Drop File </div>
      </Fade>

      <div className='spacer' id='graphs' />
      <h1 className='chart-opt'>I want to see my...</h1>

      <div className='btn-layout'>
        <Link to='/topics'><button className='btn-chart'><span role="img" aria-label='books'>📚</span> TOPICS</button></Link>
      </div>

      <Switch>
        <Route exact path="/topics" render={(props) => <RadarMap {...props} data={topicsData} />} />
      </Switch>

      <h1 className='chart-opt' id='info'>I need more information...</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Wiki.." value={test} onChange={e => setTest(e.target.value)} className='search' />
        <input type="submit" value="Search" className='search-btn' />
      </form>

      <div className='btn-layout'>
        {linkResult.map(card => {
          const { title, link } = card;
          return (
            <a key={title} href={link} target='_blank' rel='noopener noreferrer'>
              <button className='btn-info'>{title}</button>
            </a>
          )
        })}
      </div>
    </div>
  );
}

export default App;


/*
        */