import { useCallback, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonCpn from "./components/ButtonCpn";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const handleOnclick = useCallback(() => {
    // setCount1((pre) => pre + 1);
  }, []);

  // const setIntervalNumber = useMemo(() => {
  //   console.log("run in memo fnc");
  //   const testArray = [];
  //   for (let i = 0; i < 100; i++) {
  //     testArray.push(i);
  //   }
  //   return testArray;
  // }, []);

  const setIntervalNumber = useCallback(() => {
    console.log("run in memo fnc");
    const testArray = [];
    for (let i = 0; i < 100; i++) {
      testArray.push(i + count1);
    }
    return testArray;
  }, []);

  const test = setIntervalNumber();
  // const test2 = useMemo(() => {
  //   const result = test.reduce((acc, cur) => {
  //     console.log("run in reducer");
  //     acc += cur;
  //     return acc;
  //   }, 0);
  //   return result;
  // }, [test]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React 19</h1>
      {/* <p>{test?.length && test[0]} </p> */}
      {/* <p>test2 :{test2} </p> */}
      <ButtonCpn onClick={handleOnclick} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
