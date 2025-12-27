import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetBooks } from "../API/index.tsx";
//import NePPBookContentsUI from './NePPUIPackage';
import * as NePPUI from "../NePPUIPackage"; // Adjusted the path to the correct location

function Books() {
    const [books, setBooks] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetBooks();
            if (result) {
                setBooks(result);
            }
        };
        fetchData();
    }, []);

    const handleToggle = (id: number) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === id
                    ? { ...book, isAvailable: !book.isAvailable }
                    : book
            )
        );
    };

    const createBook = () => {
        navigate("/books/new");
    };

    return (
        <div
            style={{
                padding: "20px",
                display: "flex",
                gap: "100px",
                flexWrap: "nowrap",
            }}
        >
            <button onClick={() => createBook()}>新規作成</button>
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

export default Books;
