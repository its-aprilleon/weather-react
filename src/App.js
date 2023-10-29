import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          <a
            href="https://github.com/its-aprilleon/weather-react-app"
            target="_blank"
          >
            Open Source Code
          </a>{" "}
          By{" "}
          <a href="https://github.com/its-aprilleon" target="_blank">
            April
          </a>
        </footer>
      </div>{" "}
    </div>
  );
}

export default App;
