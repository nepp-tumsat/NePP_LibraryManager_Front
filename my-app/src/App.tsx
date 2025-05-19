import { NePPBookContentsUI } from './NePPUIPackage';
import 

function App() {
  const [count, setCount] = useState(0)
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
}

export default App;