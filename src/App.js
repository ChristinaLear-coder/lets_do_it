import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <center>
            <img src={logo} className="App-logo" alt="logo" />
          </center>
          <h1>
            <center>React Weather App</center>{" "}
          </h1>
          <Weather />
          <br />
          <a
            className="App-link"
            href="##"
            target="_blank"
            rel="noopener noreferrer"
          >
            <center>Coded by Christina Lear, open-sourced on GitHub</center>
          </a>
        </header>
      </div>
    </div>
  );
}
