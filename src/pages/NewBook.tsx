import React, { useCallback, useMemo, useRef, useState } from "react";
import { PostBook } from "../API/book";

type BookFormState = {
    title: string;
    author: string;
    description: string;
    pageCount: string;
    price: string;
    publishedDate: string;
    coverFile: File | null;
};

const NavItem = ({ label, active }: { label: string; active?: boolean }) => {
    return (
        <a
            href="#"
            className={[
                "text-sm font-medium transition-colors",
                active ? "text-gray-900" : "text-gray-600 hover:text-gray-900",
            ].join(" ")}
        >
            {label}
        </a>
    );
};

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
    <label className="block text-sm font-semibold text-gray-900 mb-2">
        {children}
    </label>
);

const TextInput = ({
    value,
    onChange,
    placeholder,
    inputMode,
    type = "text",
}: {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}) => (
    <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        type={type}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-gray-100"
    />
);

const TextArea = ({
    value,
    onChange,
    placeholder,
}: {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}) => (
    <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={6}
        className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-gray-100"
    />
);

const Avatar = () => (
    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200">
        <div className="h-full w-full grid place-items-center text-xs font-semibold text-gray-600">
            {/* Placeholder avatar */}A
        </div>
    </div>
);

const BellButton = () => (
    <button
        type="button"
        className="grid h-10 w-10 place-items-center rounded-full bg-gray-50 ring-1 ring-gray-200 transition hover:bg-gray-100"
        aria-label="Notifications"
    >
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
        >
            <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
    </button>
);

export default function NewBook() {
    const [form, setForm] = useState<BookFormState>({
        title: "",
        author: "",
        description: "",
        pageCount: "",
        price: "",
        publishedDate: "",
        coverFile: null,
    });

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const coverMeta = useMemo(() => {
        if (!form.coverFile) return null;
        const kb = Math.round(form.coverFile.size / 1024);
        return `${form.coverFile.name} • ${kb} KB`;
    }, [form.coverFile]);

    const setField = useCallback(
        <K extends keyof BookFormState>(key: K, value: BookFormState[K]) => {
            setForm((prev) => ({ ...prev, [key]: value }));
        },
        []
    );

    const openFilePicker = useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    const onSelectFile = useCallback(
        (file: File | null) => {
            setField("coverFile", file);
        },
        [setField]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            const file = e.dataTransfer.files?.[0] ?? null;
            if (file) onSelectFile(file);
        },
        [onSelectFile]
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const onSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            PostBook({
                title: form.title,
                cover_image_url: form.coverFile
                    ? URL.createObjectURL(form.coverFile)
                    : "",
                description: form.description,
            });
            console.log("Add Book:", form);
            alert("Submitted (demo). Check console.");
        },
        [form]
    );

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Top Nav */}
            <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-10">
                        <div className="text-lg font-extrabold tracking-tight">
                            BookCircle
                        </div>
                        <nav className="hidden items-center gap-8 md:flex">
                            <NavItem label="Home" />
                            <NavItem label="Explore" />
                            <NavItem label="My Books" active />
                            <NavItem label="Community" />
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <BellButton />
                        <Avatar />
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="mx-auto max-w-4xl px-6 py-10">
                <h1 className="text-4xl font-extrabold tracking-tight">
                    Add a New Book
                </h1>

                <form onSubmit={onSubmit} className="mt-10 space-y-10">
                    {/* Title */}
                    <section className="space-y-3">
                        <FieldLabel>Title</FieldLabel>
                        <div className="max-w-2xl">
                            <TextInput
                                value={form.title}
                                onChange={(v) => setField("title", v)}
                                placeholder="Enter book title"
                            />
                        </div>
                    </section>

                    {/* Upload */}
                    <section className="space-y-4">
                        <div className="max-w-3xl">
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={openFilePicker}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ")
                                        openFilePicker();
                                }}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                className={[
                                    "rounded-2xl border-2 border-dashed p-12 text-center transition",
                                    isDragging
                                        ? "border-gray-400 bg-gray-50"
                                        : "border-gray-200 bg-white",
                                ].join(" ")}
                            >
                                <div className="mx-auto max-w-md">
                                    <div className="text-base font-semibold">
                                        Upload Book Cover
                                    </div>
                                    <div className="mt-2 text-sm text-gray-600">
                                        Drag and drop or click to upload
                                    </div>

                                    <div className="mt-6 flex items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openFilePicker();
                                            }}
                                            className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-200"
                                        >
                                            Browse Files
                                        </button>
                                    </div>

                                    {coverMeta && (
                                        <div className="mt-4 text-xs text-gray-600">
                                            Selected:{" "}
                                            <span className="font-medium text-gray-800">
                                                {coverMeta}
                                            </span>
                                            <button
                                                type="button"
                                                className="ml-3 text-xs font-semibold text-gray-700 underline underline-offset-2 hover:text-gray-900"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onSelectFile(null);
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) =>
                                        onSelectFile(
                                            e.target.files?.[0] ?? null
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </section>

                    {/* Optional */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-extrabold">Optional</h2>

                        <div className="max-w-2xl space-y-6">
                            <div>
                                <FieldLabel>Author</FieldLabel>
                                <TextInput
                                    value={form.author}
                                    onChange={(v) => setField("author", v)}
                                    placeholder="Enter author's name"
                                />
                            </div>

                            <div>
                                <FieldLabel>Description</FieldLabel>
                                <TextArea
                                    value={form.description}
                                    onChange={(v) => setField("description", v)}
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <FieldLabel>Page Count</FieldLabel>
                                <TextInput
                                    value={form.pageCount}
                                    onChange={(v) => setField("pageCount", v)}
                                    placeholder="Enter number of pages"
                                    inputMode="numeric"
                                />
                            </div>

                            <div>
                                <FieldLabel>Price</FieldLabel>
                                <TextInput
                                    value={form.price}
                                    onChange={(v) => setField("price", v)}
                                    placeholder="Enter price"
                                    inputMode="decimal"
                                />
                            </div>

                            <div>
                                <FieldLabel>Published Date</FieldLabel>
                                <TextInput
                                    value={form.publishedDate}
                                    onChange={(v) =>
                                        setField("publishedDate", v)
                                    }
                                    placeholder="YYYY-MM-DD"
                                    type="date"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Action */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-200"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
