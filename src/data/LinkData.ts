interface Link {
  id: number;
  title: string;
  link: string;
}

export const linkData: Link[] = [
  {
    id: 23,
    title: "twitter",
    link: "https://twitter.com/intent/tweet",
  },
  { id: 22, title: "whatsApp", link: "https://wa.me/" },
  {
    id: 21,
    title: "linkedIn",
    link: "http://www.linkedin.com/shareArticle?mini=true",
  },
  {
    id: 26,
    title: "pinterest",
    link: "http://pinterest.com/pin/create/button",
  },
];
