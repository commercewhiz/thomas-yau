export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/project/screenshots/hello_reality_investor_portfolio.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'Impact Gumshields',
    image: {
      src: '/static/images/project/screenshots/impact_event_page.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I maintained`,
    title: "Aim'n",
    image: {
      src: '/static/images/project/screenshots/Frame_1138.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I launched`,
    title: 'Hello Reality',
    image: {
      src: '/static/images/project/screenshots/hello_reality_investor_portfolio.webp',
      width: 600,
      height: 717,
    },
  },
];
