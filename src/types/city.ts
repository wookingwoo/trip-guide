export interface CityFeature {
  name: string;
  description: string;
  image: string;
}

export interface CityArea {
  name: string;
  description: string;
}

export interface CityItineraryItem {
  title: string;
  description: string;
}

export interface City {
  id: string;
  name: string;
  country: string;
  description: string;
  overview: string;
  image: string;
  highlights: string[];
  attractions: CityFeature[];
  foods: CityFeature[];
  gettingAround: string[];
  recommendedAreas: CityArea[];
  sampleItinerary: CityItineraryItem[];
  tips: string[];
  bestTime: string;
}
