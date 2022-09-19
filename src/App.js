import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hikingsquirrel-2c96a.appspot.com/o/diary%2F%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C1.jpg?alt=media&token=8d138d1d-5955-4c43-8cff-1ce43d6f70e1"
          width="100%"></img>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React Jiyeon
        </a>
      </header>
    </div>
  );
}

export default App;
