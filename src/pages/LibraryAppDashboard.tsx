import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../API/auth";
import "./library-app-dashboard.css";

function LibraryAppDashboard() {
    const navigate = useNavigate();

    return (
        <div className="library-dashboard">
            <div className="app-container">
                <aside className="sidebar">
                    <div className="logo">
                        <h1>
                            <div className="logo-icon">📚</div>
                            Library
                        </h1>
                    </div>

                    <nav>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? " active" : ""}`
                                    }
                                >
                                    <svg
                                        className="nav-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    マイページ
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/books"
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? " active" : ""}`
                                    }
                                >
                                    <svg
                                        className="nav-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    蔵書一覧
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/books/new"
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? " active" : ""}`
                                    }
                                >
                                    <svg
                                        className="nav-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                    蔵書登録
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/email-auth"
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? " active" : ""}`
                                    }
                                >
                                    <svg
                                        className="nav-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    メール認証
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link"
                                    onClick={async () => {
                                        await logout();
                                        navigate("/email-auth", {
                                            replace: true,
                                        });
                                    }}
                                >
                                    <svg
                                        className="nav-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    ログアウト
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <main className="main-content">
                    <header className="header">
                        <h1 className="welcome">ようこそ、田中さん</h1>
                        <p className="welcome-subtitle">
                            今日も良い読書の時間を
                        </p>
                    </header>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-value">3</div>
                            <div className="stat-label">借りている本</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">2</div>
                            <div className="stat-label">
                                返却期限が近い
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">24</div>
                            <div className="stat-label">今月読んだ本</div>
                        </div>
                    </div>

                    <div className="alert-banner">
                        <svg
                            className="alert-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <div className="alert-content">
                            <h3>返却期限が近い本があります</h3>
                            <p>
                                2冊の本が3日以内に返却期限を迎えます
                            </p>
                        </div>
                    </div>

                    <section className="section">
                        <div className="section-header">
                            <h2 className="section-title">
                                返却期限が近い本
                            </h2>
                            <a href="#" className="view-all">
                                すべて見る
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div className="books-grid">
                            <div className="book-card due-soon">
                                <div className="book-header">
                                    <div className="book-cover">📘</div>
                                    <div className="book-info">
                                        <h3 className="book-title">
                                            人間失格
                                        </h3>
                                        <p className="book-author">太宰治</p>
                                        <div className="book-meta">
                                            <div className="meta-item">
                                                <svg
                                                    className="meta-icon"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                貸出日: 2024/12/15
                                            </div>
                                        </div>
                                        <span className="due-date urgent">
                                            明後日 (12/29) 返却期限
                                        </span>
                                    </div>
                                </div>
                                <div className="book-actions">
                                    <button className="btn btn-primary">
                                        返却手続き
                                    </button>
                                    <button className="btn btn-secondary">
                                        延長申請
                                    </button>
                                </div>
                            </div>

                            <div className="book-card due-soon">
                                <div className="book-header">
                                    <div className="book-cover">📗</div>
                                    <div className="book-info">
                                        <h3 className="book-title">
                                            ノルウェイの森
                                        </h3>
                                        <p className="book-author">
                                            村上春樹
                                        </p>
                                        <div className="book-meta">
                                            <div className="meta-item">
                                                <svg
                                                    className="meta-icon"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                貸出日: 2024/12/17
                                            </div>
                                        </div>
                                        <span className="due-date urgent">
                                            3日後 (12/30) 返却期限
                                        </span>
                                    </div>
                                </div>
                                <div className="book-actions">
                                    <button className="btn btn-primary">
                                        返却手続き
                                    </button>
                                    <button className="btn btn-secondary">
                                        延長申請
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="section-header">
                            <h2 className="section-title">借りている本</h2>
                            <a href="#" className="view-all">
                                すべて見る
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div className="books-grid">
                            <div className="book-card">
                                <div className="book-header">
                                    <div className="book-cover">📕</div>
                                    <div className="book-info">
                                        <h3 className="book-title">羅生門</h3>
                                        <p className="book-author">
                                            芥川龍之介
                                        </p>
                                        <div className="book-meta">
                                            <div className="meta-item">
                                                <svg
                                                    className="meta-icon"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                貸出日: 2024/12/10
                                            </div>
                                        </div>
                                        <span className="due-date">
                                            2025/01/07 返却期限
                                        </span>
                                    </div>
                                </div>
                                <div className="book-actions">
                                    <button className="btn btn-primary">
                                        返却手続き
                                    </button>
                                    <button className="btn btn-secondary">
                                        延長申請
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default LibraryAppDashboard;
