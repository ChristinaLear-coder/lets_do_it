import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Weather App</p>
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
  );
}
