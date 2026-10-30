export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 이미지 경로. 없으면 이름 첫 글자로 대체
  image?: string;
  links: LinkItem[];
};

// TODO: 보여 주기용 더미 값. 실제 내용으로 교체할 것
export const profile: Profile = {
  name: "옥수수깡",
  bio: "나도 AI 개발을 배워보려구요!",
  image: "/profile.jpg",
  links: [
    { id: "github", title: "🐙 깃허브", url: "https://github.com/oksubyeon" },
    { id: "blog", title: "✍️ 블로그", url: "https://www.naver.com" },  ],
};
