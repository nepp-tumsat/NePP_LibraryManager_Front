import { csrfHeaders } from "../csrf";

type EnvWithVite = {
    env?: {
        VITE_API_URL?: string;
    };
};

const viteEnv = (import.meta as EnvWithVite).env;
const nodeEnv =
    typeof process !== "undefined" ? process.env.REACT_APP_API_BASE : undefined;

export const API_BASE = viteEnv?.VITE_API_URL ?? nodeEnv ?? "/api";

export async function getAuthInfo() {
    const res = await fetch(`${API_BASE}/session`, {
        method: "GET",
        credentials: "include",
    });
    if (!res.ok) return null;
    return res.json();
}

export async function logout() {
    await fetch(`${API_BASE}/session`, {
        method: "DELETE",
        headers: {
            ...csrfHeaders(),
        },
        credentials: "include",
    });
}
