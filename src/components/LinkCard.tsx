"use client";

type Props = {
  id: string;
  title: string;
  url: string;
  count: number;
  onClick?: (id: string) => void;
};

export default function LinkCard({ id, title, url, count, onClick }: Props) {
  // sendBeacon은 페이지를 떠나는 중에도 요청이 끝까지 전송되도록 보장합니다.
  const trackClick = () => {
    navigator.sendBeacon(`/api/links/${encodeURIComponent(id)}/click`);
    onClick?.(id);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      className="relative block w-full rounded-2xl border border-glass-border bg-glass px-16 py-4 text-center text-[15px] font-semibold tracking-tight shadow-[0_6px_24px_-12px_var(--color-shadow-tint)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-glass-hover hover:shadow-[0_10px_28px_-12px_var(--color-shadow-tint)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
      {/* 제목은 가운데에 두고, 클릭 수는 오른쪽 끝에 작게 표시합니다. */}
      <span className="absolute top-1/2 right-5 -translate-y-1/2 text-xs font-medium text-foreground/45 tabular-nums">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
