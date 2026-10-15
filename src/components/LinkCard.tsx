"use client";

type Props = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: Props) {
  // sendBeacon은 페이지를 떠나는 중에도 요청이 끝까지 전송되도록 보장합니다.
  const trackClick = () => {
    navigator.sendBeacon(`/api/links/${encodeURIComponent(id)}/click`);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      className="block w-full rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      {title}
    </a>
  );
}
