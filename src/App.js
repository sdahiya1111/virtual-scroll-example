import { useMemo, useState } from 'react';
import './App.css';
import Card from './Card';
import movies from './movies.json';

const listCount = 10;
const cardHeight = 152;

function App() {
  const moviesCount = useMemo(() => movies.length, []);

  const [startIdx, setStartIdx] = useState(0);
  const [padTop, setPadTop] = useState(0);

  const scrollHandler = (e) => {
    let newStartIdx = Number.parseInt(e.target.scrollTop / cardHeight);
    newStartIdx = Math.min(newStartIdx, moviesCount - listCount);
    setStartIdx(newStartIdx);
    setPadTop(newStartIdx * cardHeight);
  }

  const moviesSlice = useMemo(() => movies.slice(startIdx, listCount + startIdx), [startIdx]);

  return (
    <div className="App">
      <header>
        <h1 className="page-title">
          Virtual Scrolling example
        </h1>
      </header>
      <main onScroll={scrollHandler}>
        <div
          role="list"
          className="card-list"
          style={{ height: cardHeight * moviesCount }}
        >
          <div className="list-window" style={{transform: `translateY(${padTop}px)`}}>
            {moviesSlice.map(({ name, genre }, idx) => (<Card key={idx} name={name} genre={genre} />))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
