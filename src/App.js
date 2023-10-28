import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          <a href="https://github.com/its-aprilleon/weather-react-app">
            Open Source Code
          </a>{" "}
          By <a href="https://github.com/its-aprilleon">April</a>
        </footer>
      </div>{" "}
    </div>
  );
}

export default App;
