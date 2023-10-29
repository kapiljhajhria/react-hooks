import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const wrongUsage = () => {
        setCount(count+1)
        // do some task
        setCount(count+1)
    }

    const correctUsage = () => {
        setCount(prevCount => prevCount+1)
        // do some task
        setCount(prevCount => prevCount+1)
    }

  return (
    <>
      <h1>Vite + React</h1>
        <p>Count is {count}</p>
      <div className="card">
        <button onClick={wrongUsage}>
          Incorrect Usage
        </button>
        <div
            style={{
                width: '100%',
                height: '10px',
            }}
        ></div>

        <button onClick={correctUsage}>
          Correct Usage
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
