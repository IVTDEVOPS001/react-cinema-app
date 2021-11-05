import './App.css';
import logo from './selogo2.png';  
/*  import logo from './logo.svg';   */
/*  import './App.css';   */

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <img src="./selogo.png" alt=""/>
        </p>
        <p>
          The path is clear, and the time is now.
{/*          Edit <code>src/App.js</code> and save to reload.   */}
        </p>
        <a
          className="App-link"
          href="https://charleshodge.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to Boogie Down with The Hodge!!!
        </a>
      </header>
    </div>
  );
}

export default App;
