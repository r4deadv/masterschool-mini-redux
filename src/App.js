import logo from "./logo.svg";
import "./App.css";
import { createStore } from "./masterschool-mini-redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log("Counter:", store.getState());
});

store.dispatch({ type: "INCREMENT" });
// Counter: 1
store.dispatch({ type: "INCREMENT" });
// Counter: 2
store.dispatch({ type: "INCREMENT" });
const rade = store.subscribe(() => {
  console.log("Rade:", store.getState());
});
// Counter: 3
store.dispatch({ type: "DECREMENT" });
// Counter: 2
unsubscribe();
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });

console.log("Counter:", store.getState());
// Counter: 0

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
