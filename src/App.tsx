import  API  from './index.tsx'
import './App.css'
//import NePPBookContentsUI from './NePPUIPackage';
import * as NePPUI from './NePPUIPackage';


function App() {
   const rest = API();
  console.log(rest);
  
  

    return (
        <div style={{
            padding: '40px',
            display: 'flex',
            gap: '54px',
            flexWrap: 'wrap' 
        }}>
            <NePPUI.NePPBookContentsUI
                 imageSrc="https://udobiaabiukosfucivbk.supabase.co/storage/v1/object/public/booksimage/World%20Engineer.jpg"
                 title="世界一流エンジニアの思考法"
                description="マイクロソフトに入った社員の体験をもとに、一流のエンジニアに必要な要素を学べます"
                isAvailable={true}
            />
             <NePPUI.NePPBookContentsUI
              imageSrc="https://udobiaabiukosfucivbk.supabase.co/storage/v1/object/public/booksimage//picture_large978-4-87311-758-4.jpeg"
               title="ゼロから作るDeepLearning"
               description=""
               isAvailable={false}
             />

        </div>
    );
}

export default App
