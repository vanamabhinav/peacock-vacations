export type Destination = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
};

export type CardText = {
  title: string;
  subtitle: string;
  lowertext: string;
  url: string;
};

export type DestinationsData = {
  [key: string]: {
    destinations: Destination[];
    cardText: CardText;
  };
};

export type PackageData = {
  location: {
    icon: string;
    name: string;
  };
  image: string;
  title: string;
  description: string;
  url: string;
  pricing: {
    original: string;
    discounted: string;
  };
  includes: Array<{
    icon: string;
    text: string;
  }>;
};
