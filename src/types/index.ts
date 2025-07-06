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
