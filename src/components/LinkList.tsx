"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Props = {
  links: LinkItem[];
};

export default function LinkList({ links }: Props) {
  // 서버에서 받은 값과, 이 화면에서 누른 횟수를 따로 두고 합쳐서 보여 줍니다.
  // 응답 전에는 서버 값이 없으므로 0회로 표시됩니다.
  const [serverCounts, setServerCounts] = useState<Record<string, number>>({});
  const [localClicks, setLocalClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/links", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Record<string, number> | null) => {
        if (data) setServerCounts(data);
      })
      .catch(() => {
        // 조회 실패 시에는 0회 표시를 그대로 둡니다.
      });
    return () => controller.abort();
  }, []);

  // 클릭 즉시 화면의 숫자를 1 올립니다. 실제 저장은 LinkCard의 sendBeacon이 담당합니다.
  const handleClick = (id: string) => {
    setLocalClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <ul className="mt-10 flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            id={link.id}
            title={link.title}
            url={link.url}
            count={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onClick={handleClick}
          />
        </li>
      ))}
    </ul>
  );
}
