import axios from "axios"


async function API() {
  try {
    const response = await axios.get('https://nepp-librarymanager-backend.onrender.com/books');
    const data = response.data;

    if (data) {
      console.log("タスクは完了しています！");
    } else {
      console.log("タスクは未完了です。");
    }

    return data; 
  } catch (error) {
    console.error(" API取得エラー:", error);
    return null; 
  }
}

export default API;