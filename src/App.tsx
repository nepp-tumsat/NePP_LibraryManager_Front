import { useState,useEffect } from "react";
import  API  from './func.files/index.tsx'
import './App.css'
//import NePPBookContentsUI from './NePPUIPackage';
import * as NePPUI from './NePPUIPackage';



 function App() {
  const [books , setBooks] = useState<any[]>([]);

  useEffect(() =>{
      const fetchData = async () =>{
        const result = await API();
        if (result){
          setBooks(result);
        }
      }
      fetchData();
  },[])
   return (  
    <div
      style={{
        padding: '20px',
        display: 'flex',
        gap: '20px',
        flexWrap: 'nowrap', 
      }}
    >
      {books.map((book) => (
        <NePPUI.NePPBookContentsUI
          key={book.id} 
          title={book.title}
          imageSrc={book.cover_image_url} 
          description={book.description}
          isAvailable={book.isAvailable}
        />
        
      ))}
    </div>
  );
}


export default App
