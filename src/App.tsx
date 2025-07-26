import  API  from './index.tsx'
import './App.css'
//import NePPBookContentsUI from './NePPUIPackage';
import * as NePPUI from './NePPUIPackage';


function App() {
   const rest = API();
  console.log(rest);
  
  

    return (
        <div  style={{
            padding: '20px',
            display: 'flex',
            gap: '20px',
            flexWrap: 'nowrap'
            
            
        }}>
            <NePPUI.NePPBookContentsUI
                 imageSrc="https://udobiaabiukosfucivbk.supabase.co/storage/v1/object/public/booksimage/World%20Engineer.jpg"
                 title="世界一流エンジニアの思考法"
                description=""
                isAvailable={true}
            />
             <NePPUI.NePPBookContentsUI
              imageSrc="https://udobiaabiukosfucivbk.supabase.co/storage/v1/object/public/booksimage//picture_large978-4-87311-758-4.jpeg"
               title="ゼロから作るDeepLearning"
               description=""
               isAvailable={false}
             />
             <NePPUI.NePPBookContentsUI
              imageSrc="https://udobiaabiukosfucivbk.supabase.co/storage/v1/object/public/booksimage//issue_begin.webp"
               title="issueからはじめよ"
               description=""
               isAvailable={false}
             />
             <NePPUI.NePPBookContentsUI
              imageSrc="https://udobiaabiukosfucivbk.supabase.co/storage/v1/object/public/booksimage//Unity2018.jpg"
               title="Unity2018入門"
               description=""
               isAvailable={false}
             />
             
        </div>
    );
}

export default App
