import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const [count, setCount] = useState(0)
  //aaaaaaaaa

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
  )
=======
=======
>>>>>>> Stashed changes
    return (
        <div style={{
            padding: '40px',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap' 
        }}>
            <NePPBookContentsUI
                imageSrc={logo}
                title="タイトル1"
                description="説明1"
                isAvailable={true}
            />
            <NePPBookContentsUI
                imageSrc={logo}
                title="タイトル2"
                description="説明2"
                isAvailable={false}
            />
            <NePPBookContentsUI
                imageSrc={logo}
                title="タイトル3"
                description="説明3"
                isAvailable={true}
            />
            <NePPBookContentsUI
                imageSrc={logo}
                title="タイトル4"
                description="説明4"
                isAvailable={false}
            />
        </div>
    );
>>>>>>> Stashed changes
}

export default App
