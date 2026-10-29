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
  name: "홍길동",
  bio: "세계 최강 바이브코더",
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
