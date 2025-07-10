import  API  from './index.tsx'
import './App.css'
//import NePPBookContentsUI from './NePPUIPackage';
import * as NePPUI from './NePPUIPackage';
import logo from './assets/Lemon!!!.png';


function App() {
   const rest = API()
  console.log(rest)
    return (
        <div style={{
            padding: '40px',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap' 
        }}>
            <NePPUI.NePPBookContentsUI
                imageSrc={logo}
                title="タイトル1"
                description="説明1"
                isAvailable={true}
            />
            <NePPUI.NePPBookContentsUI
                imageSrc={logo}
                title="タイトル2"
                description="説明2"
                isAvailable={false}
            />
            <NePPUI.NePPBookContentsUI
                imageSrc={logo}
                title="タイトル3"
                description="説明3"
                isAvailable={true}
            />
            <NePPUI.NePPBookContentsUI
                imageSrc={logo}
                title="タイトル4"
                description="説明4"
                isAvailable={false}
            />
        </div>
    );
}

export default App
