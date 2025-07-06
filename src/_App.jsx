import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./components/Test";
import ButtonBlock from "./components/ButtonBlock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonBlock
        title="長野で研究したい人"
        ookisa="small"
        iro="error"
        text="ログアウト"
      />
      <ButtonBlock
        title="かのみは年中きんぱつです"
        ookisa="large"
        iro="success"
        text="ログイン"
      />

      <Test aa="ちーふおおほり" />
      <Test aa="きんぱつかのみ" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React リアクトの授業</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
