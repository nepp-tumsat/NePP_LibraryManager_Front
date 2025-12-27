import { useState } from "react";
import { API_BASE } from "../API/auth";
import { csrfHeaders } from "../csrf";
import "./email-auth.css";

function EmailAuth() {
    const [isSent, setIsSent] = useState(false);
    const [email, setEmail] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="email-auth-page">
            <div className="container">
                <div className="card">
                    <div className="header">
                        <div className="icon-circle">
                            <svg
                                className="icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h1>メールアドレスでログイン</h1>
                        <p className="subtitle">
                            メールアドレスにログイン用リンクを送信します
                        </p>
                    </div>

                    <div className="email-step">
                        {isSent ? (
                            <div className="info-box">
                                <p>
                                    送信しました。メールに届いたリンクからログインしてください。
                                </p>
                            </div>
                        ) : null}
                        <form
                            onSubmit={async (event) => {
                                event.preventDefault();
                                setError(null);
                                setIsSending(true);
                                try {
                                    const res = await fetch(
                                        `${API_BASE}/magic_links`,
                                        {
                                            method: "POST",
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                                ...csrfHeaders(),
                                            },
                                            credentials: "include",
                                            body: JSON.stringify({ email }),
                                        }
                                    );

                                    if (!res.ok) {
                                        throw new Error(
                                            "メールの送信に失敗しました。"
                                        );
                                    }

                                    setIsSent(true);
                                } catch (err) {
                                    setError(
                                        err instanceof Error
                                            ? err.message
                                            : "メールの送信に失敗しました。"
                                    );
                                } finally {
                                    setIsSending(false);
                                }
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="email">メールアドレス</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="example@email.com"
                                    required
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                <p className="helper-text">
                                    入力したメールアドレスにログイン用リンクを送信します
                                </p>
                            </div>
                            {error ? (
                                <p className="helper-text">{error}</p>
                            ) : null}
                            <button type="submit" className="button">
                                {isSending ? "送信中..." : "メールを送信"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailAuth;
