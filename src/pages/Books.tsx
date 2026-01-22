import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetBooks } from "../API/book.tsx";
import { supabase } from "../supabaseClient";
//import NePPBookContentsUI from './NePPUIPackage';
import * as NePPUI from "../NePPUIPackage"; // Adjusted the path to the correct location

const BUCKET_NAME = "booksimage";

function Books() {
    const [books, setBooks] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetBooks();
            if (result) {
                if (
                    !import.meta.env.VITE_SUPABASE_URL ||
                    !import.meta.env.VITE_SUPABASE_ANON_KEY
                ) {
                    setBooks(result);
                    return;
                }

                const withCoverUrls = result.map((book: any) => {
                    if (!book.cover_image_url) return book;
                    const { data } = supabase.storage
                        .from(BUCKET_NAME)
                        .getPublicUrl(book.cover_image_url);
                    return {
                        ...book,
                        cover_image_url: data.publicUrl,
                    };
                });
                setBooks(withCoverUrls);
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
