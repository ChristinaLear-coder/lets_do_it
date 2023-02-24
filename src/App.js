import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> React Weather App</h1>
          <a
            className="App-link"
            href="##"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coded by Christina Lear, open-sourced on GitHub
          </a>
        </header>
      </div>
    </div>
  );
}
