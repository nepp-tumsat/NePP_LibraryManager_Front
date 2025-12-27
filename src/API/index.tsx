import axios from "axios";
import { API_BASE } from "./auth";
import { csrfHeaders } from "../csrf";

export async function GetBooks() {
    try {
        const response = await axios.get(`${API_BASE}/books`, {
            withCredentials: true,
        });
        const data = response.data;

        if (data) {
            console.log("タスクは完了しています！");
        } else {
            console.log("タスクは未完了です。");
        }

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function PostBook(book: {
    title: string;
    cover_image_url: string;
    description: string;
}) {
    try {
        const response = await axios.post(
            `${API_BASE}/books`,
            book,
            {
                headers: {
                    ...csrfHeaders(),
                },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        console.error("API投稿エラー:", error);
        return null;
    }
}
