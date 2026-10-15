import type { Metadata } from "next";
// 한글 포함 Pretendard. dynamic-subset은 필요한 글자 범위의 파일만 내려받습니다.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="relative min-h-full flex flex-col">
        {/* 글래스 카드 뒤로 비치는 부드러운 색 번짐 (장식용) */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-accent-soft/70 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
