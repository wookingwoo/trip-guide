export interface City {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  attractions: {
    name: string;
    description: string;
    image: string;
  }[];
  foods: {
    name: string;
    description: string;
    image: string;
  }[];
  tips: string[];
  bestTime: string;
}

export const cities: Record<string, City> = {
  sapporo: {
    id: 'sapporo',
    name: 'Sapporo',
    country: 'Japan',
    description: 'The capital of Hokkaido, famous for its beer, ramen, and annual snow festival.',
    image: '/images/sapporo-hero.png',
    attractions: [
      {
        name: 'Odori Park',
        description: 'A park that spans 1.5 km and serves as the main site of the Sapporo Snow Festival.',
        image: '/images/odori-park.jpg',
      },
      {
        name: 'Sapporo Beer Museum',
        description: 'The only beer museum in Japan, located in a historic brick building.',
        image: '/images/beer-museum.jpg',
      },
    ],
    foods: [
      {
        name: 'Miso Ramen',
        description: 'Sapporo is the birthplace of Miso Ramen.',
        image: '/images/miso-ramen.jpg',
      },
      {
        name: 'Soup Curry',
        description: 'A light curry flavored soup served with vegetables and meat.',
        image: '/images/soup-curry.jpg',
      },
    ],
    tips: [
      'Wear comfortable shoes for walking.',
      'Visit the snow festival in February.',
    ],
    bestTime: 'Winter for snow, Summer for flowers.',
  },
  rome: {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    description: 'The Eternal City, known for its nearly 3,000 years of globally influential art, architecture, and culture.',
    image: '/images/rome-hero.jpg',
    attractions: [
      {
        name: 'Colosseum',
        description: 'An oval amphitheatre in the centre of the city of Rome, Italy.',
        image: '/images/colosseum.jpg',
      },
      {
        name: 'Trevi Fountain',
        description: 'A Baroque fountain in the Trevi district in Rome.',
        image: '/images/trevi-fountain.jpg',
      },
    ],
    foods: [
      {
        name: 'Carbonara',
        description: 'An Italian pasta dish from Rome made with egg, hard cheese, cured pork, and black pepper.',
        image: '/images/carbonara.jpg',
      },
      {
        name: 'Gelato',
        description: 'Italian ice cream.',
        image: '/images/gelato.jpg',
      },
    ],
    tips: [
      'Book tickets for Colosseum in advance.',
      'Carry a water bottle to refill at fountains.',
    ],
    bestTime: 'Spring (April-May) or Autumn (September-October).',
  },
  bangkok: {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    description: 'The vibrant capital of Thailand, known for its ornate shrines and vibrant street life.',
    image: '/images/bangkok-hero.jpg',
    attractions: [
      {
        name: 'Grand Palace',
        description: 'A complex of buildings at the heart of Bangkok, Thailand. The palace has been the official residence of the Kings of Siam.',
        image: '/images/grand-palace.jpg',
      },
      {
        name: 'Wat Arun',
        description: 'The Temple of Dawn, a Buddhist temple in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River.',
        image: '/images/wat-arun.jpg',
      },
    ],
    foods: [
      {
        name: 'Pad Thai',
        description: 'A stir-fried rice noodle dish commonly served as a street food and at most restaurants in Thailand.',
        image: '/images/pad-thai.jpg',
      },
      {
        name: 'Tom Yum Goong',
        description: 'A type of hot and sour Thai soup, usually cooked with shrimp.',
        image: '/images/tom-yum-goong.jpg',
      },
    ],
    tips: [
      'Dress modestly when visiting temples.',
      'Negotiate prices with tuk-tuk drivers before getting in.',
    ],
    bestTime: 'November to February for cooler weather.',
  },
};
