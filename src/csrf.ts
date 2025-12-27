export function getCsrfToken(): string | null {
    if (typeof document === "undefined") return null;

    const meta = document.querySelector(
        'meta[name="csrf-token"]'
    ) as HTMLMetaElement | null;
    if (meta?.content) return meta.content;

    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    for (const cookie of cookies) {
        if (!cookie) continue;
        const [rawKey, ...rest] = cookie.split("=");
        const key = rawKey?.trim();
        if (
            key === "csrf_token" ||
            key === "XSRF-TOKEN" ||
            key === "CSRF-TOKEN"
        ) {
            return decodeURIComponent(rest.join("="));
        }
    }

    return null;
}

export function csrfHeaders(): Record<string, string> {
    const token = getCsrfToken();
    return token ? { "X-CSRF-Token": token } : {};
}
