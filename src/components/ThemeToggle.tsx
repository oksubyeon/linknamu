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
      className="rounded-full border border-white/70 bg-white/45 p-2 text-base leading-none shadow-[0_4px_16px_-8px_rgba(160,82,45,0.3)] backdrop-blur-md transition duration-200 hover:bg-white/65 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {/* 마운트 전에는 아이콘을 숨겨 서버/클라이언트 불일치를 피한다 */}
      <span className={isDark === null ? "invisible" : ""}>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
