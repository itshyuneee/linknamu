export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: LinkItem[];
};

// 프로필과 링크 목록은 이 파일에서 수정합니다.
// id는 클릭 수 집계 키로 쓰이므로 한번 정한 뒤에는 바꾸지 마세요.
// TODO: 아래는 보여 주기용 더미 값입니다. 실제 내용으로 교체하세요.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageUrl: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/username" },
    {
      id: "linkedin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/username",
    },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
