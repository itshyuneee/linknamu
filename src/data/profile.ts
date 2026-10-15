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
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
  links: [
    // TODO: [ ] 부분을 실제 값으로 바꾸세요.
    { id: "github", title: "💥 깃허브", url: "https://github.com/[내 아이디]" },
    { id: "blog", title: "✍️ 블로그", url: "https://[내 블로그 주소]" },
    { id: "email", title: "📧 이메일", url: "mailto:[내 이메일]" },
  ],
};
