import { JSX, useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { getAuthInfo } from "./API/auth";
import Books from "./pages/Books";
import NewBook from "./pages/NewBook";
import EmailAuth from "./pages/EmailAuth";
import LibraryAppDashboard from "./pages/LibraryAppDashboard";

type AuthStatus = "loading" | "authed" | "guest";

function RequireAuth({ children }: { children: JSX.Element }) {
    const [status, setStatus] = useState<AuthStatus>("loading");

    useEffect(() => {
        let isMounted = true;
        getAuthInfo()
            .then((user) => {
                if (!isMounted) return;
                setStatus(user ? "authed" : "guest");
            })
            .catch(() => {
                if (!isMounted) return;
                setStatus("guest");
            });
        return () => {
            isMounted = false;
        };
    }, []);

    if (status === "loading") {
        return <div style={{ padding: 24, fontSize: 14 }}>Loading...</div>;
    }

    if (status === "guest") {
        return <Navigate to="/email-auth" replace />;
    }

    return children;
}

function RequireAuthLayout() {
    return (
        <RequireAuth>
            <Outlet />
        </RequireAuth>
    );
}

function App() {
    return (
        <Routes>
            <Route element={<RequireAuthLayout />}>
                <Route path="/" element={<LibraryAppDashboard />} />
                <Route path="/dashboard" element={<LibraryAppDashboard />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/new" element={<NewBook />} />
            </Route>
            <Route path="/email-auth" element={<EmailAuth />} />
        </Routes>
    );
}

export default App;
