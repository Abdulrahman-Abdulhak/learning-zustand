import { useCount } from "./store";
import "./App.css";

function App() {
  const count = useCount((state) => state.count);
  const increment = useCount((state) => state.increment);

  return (
    <>
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
