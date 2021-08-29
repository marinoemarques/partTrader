// import logo from './logo.svg';
import './App.css';
import {PartsForm} from "./components/PartsForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>PartsTrader Lookup</h1>
        <PartsForm/>
      </header>
    </div>
  );
}

export default App;
