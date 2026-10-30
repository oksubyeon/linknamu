import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하세요",
};

// 첫 렌더 전에 테마를 적용해 화면 깜빡임을 막는다
const themeScript = `
try {
  var t = localStorage.getItem("theme");
  if (t === "dark" || (!t && matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* 한글이 포함된 둥근 산세리프. 쓰는 글자만 받아오는 subset 버전 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-[#FFF9F0] via-[#FFF0E3] to-[#FCDCC6] bg-fixed text-stone-800 antialiased transition-colors dark:from-[#1A1513] dark:via-[#1F1815] dark:to-[#2B1D17] dark:text-stone-100">
        {children}
      </body>
    </html>
  );
}
