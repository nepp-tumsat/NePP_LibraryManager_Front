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

    const handleToggle = (id: number) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, isAvailable: !book.isAvailable } : book
      )
    );
  };
  console.log(handleToggle);


   return (  
    <div
      style={{
        padding: '20px',
        display: 'flex',
        gap: '100px',
        flexWrap: 'nowrap', 
      }}
    >
      {books.map((book) => (

         <div key={book.id} onClick={() => handleToggle(book.id)}>
        <NePPUI.NePPBookContentsUI
          key={book.id} 
          title={book.title}
          imageSrc={book.cover_image_url} 
          description={book.description}
          isAvailable={book.isAvailable}
        />
        </div>
        
      ))}
    </div>
  );
}


export default App
