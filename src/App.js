import React, { useState } from 'react';
import RadarMap from './charts/topics';
import Horizontal from './charts/accuracy';
import HorizontalTwo from './charts/exp';
import { Route, Link, Switch } from 'react-router-dom';
import { Link as SmoothLink } from 'react-scroll';
import './App.css';

function App() {

  const [topicsData, setTopicsData] = useState(
    {
      labels: ['Arrays & Strings', 'Searching & Sorting', 'Graphs & Trees', 'Stacks & Queues', 'Traversal Algorithms', 'Linked Lists', 'Dynamic Programming'],
      datasets: [
        {
          label: 'My Questions',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [64, 67, 74, 72, 60, 81, 92]
        }
      ]
    }
  );

  const [expData, setexpData] = useState(
    {
      labels: ['My Attempts'],
      datasets: [
        {
          label: 'Easy',
          backgroundColor: 'rgba(140, 204, 92,0.2)',
          borderColor: 'rgba(140, 204, 92,1)',
          borderWidth: 1,
          data: [68]
        },
        {
          label: 'Medium',
          backgroundColor: 'rgba(219, 158, 72,0.2)',
          borderColor: 'rgba(219, 158, 72,1)',
          borderWidth: 1,
          data: [100]
        },
        {
          label: 'Hard',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          data: [32]
        }
      ]
    }
  );

  const [accuracyData, setAccuracyData] = useState(
    {
      labels: ['My Attempts'],
      datasets: [
        {
          label: 'Total Attempts',
          backgroundColor: 'rgba(92, 129, 204,0.2)',
          borderColor: 'rgba(92, 129, 204,1)',
          borderWidth: 1,
          data: [100]
        },
        {
          label: 'Correct',
          backgroundColor: 'rgba(140, 204, 92,0.2)',
          borderColor: 'rgba(140, 204, 92,1)',
          borderWidth: 1,
          data: [68]
        },
        {
          label: 'Incorrect',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          data: [32]
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

    for (let i = 0; i < titles.length; i++) {
      console.log(titles[i], vals[i]);
    }

    setTopicsData(topicsData => topicsData.labels = titles.slice(6), topicsData.datasets[0].data = vals.slice(6))
  }

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


      <div
        className='input'
        onDragOver={(e) => { e.preventDefault(); }}
        onDrop={parse}
      >
        Drop File </div>

      <h1 className='chart-opt' id='graphs'>I want to see my...</h1>

      <div className='btn-layout'>
        <Link to='/topics'><button className='btn-chart'><span role="img" aria-label='books'>📚</span> TOPICS</button></Link>
        <Link to='/accuracy'><button className='btn-chart'><span role="img" aria-label='target'>🎯</span> ACCURACY</button></Link>
        <Link to='/work'><button className='btn-chart'><span role="img" aria-label='laptop'>🤵</span> EXPERIENCE</button></Link>
      </div>

      <Switch>
        <Route exact path="/topics" render={(props) => <RadarMap {...props} data={topicsData} />} />
        <Route exact path='/accuracy' render={(props) => <Horizontal {...props} data={accuracyData} />} />
        <Route exact path='/work' render={(props) => <HorizontalTwo {...props} data={expData} />} />
      </Switch>

      <h1 className='chart-opt' id='info'>I need more information...</h1>

      <div className='btn-layout'>
        <a href='https://yangshun.github.io/tech-interview-handbook/' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>🧾</span> TECH INTERVIEW HANDBOOK</button>
        </a>

        <a href='https://yangshun.github.io/front-end-interview-handbook/' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>🎭</span> FRONTEND INTERVIEW HANDBOOK</button>
        </a>

        <a href='https://www.educative.io/courses/grokking-the-coding-interview' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>🔧</span> GROKKING THE CODING INTERVIEW</button>
        </a>

        <a href='https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>💼</span> CRACKING THE CODING INTERVIEW</button>
        </a>

        <a href='https://www.educative.io/courses/grokking-the-system-design-interview' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>💻</span> GROKKING THE SYSTEM INTERVIEW</button>
        </a>

        <a href='https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>📙</span> DESIGNING DATA INTENSIVE APPLICATIONS</button>
        </a>

        <a href='https://roadmap.sh/' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>🚘</span> DEVELOPER ROADMAPS</button>
        </a>

        <a href='https://education.github.com/' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>🎓</span> GITHUB EDUCATION</button>
        </a>

        <a href='https://interviewing.io/' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>🤝</span> PRACTICE INTERVIEWS</button>
        </a>

        <a href='https://leetcode.com/' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>✍</span> PRACTICE QUESTIONS</button>
        </a>

        <a href='https://github.com/Pitt-CSC/Summer2021-Internships' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>🙋‍♂️</span> FIND INTERNSHIPS</button>
        </a>

        <a href='https://www.udemy.com/' target='_blank' rel='noopener noreferrer'>
          <button className='btn-info'><span role="img" aria-label='books'>🚀</span> FIND COURSES</button>
        </a>
      </div>
    </div>
  );
}

export default App;
