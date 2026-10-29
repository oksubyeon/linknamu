"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="rounded-full border border-gray-200 bg-white p-2 text-lg leading-none shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      {/* 마운트 전에는 아이콘을 숨겨 서버/클라이언트 불일치를 피한다 */}
      <span className={isDark === null ? "invisible" : ""}>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
