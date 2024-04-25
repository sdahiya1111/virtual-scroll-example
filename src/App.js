import './App.css';
import Card from './Card';
import movies from './movies.json';

function App() {

  return (
    <div className="App">
      <header>
        <h1 className="page-title">
          Virtual Scrolling example
        </h1>
      </header>
      <main>
        <div role="list" className="card-list">
          {movies.map(({ name, genre }, idx) => (<Card key={idx} name={name} genre={genre} />))}
        </div>
      </main>
    </div>
  );
}

export default App;
