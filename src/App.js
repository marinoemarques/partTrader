import logo from './logo.png';
import './App.css';
import PartsForm from "./components/PartsForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Find My Parts</h1>
          <div className="App-link">
        <PartsForm/>
          </div>
      </header>
    </div>
  );
}

export default App;
