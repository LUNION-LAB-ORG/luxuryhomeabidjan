export interface IGalleryImage {
  id: number;
  url: string;
}

export interface IBien {
  id: number;
  title: string;
  price: string;
  rating: number;
  image: string;
  surface: number;
  chambre: number;
  salleDeBain: number;
  localisation: string;
  type: string;
  video?: string;
  description?: string;

  interiorDetails?: string[];
  outdoorDetails?: string[];
  utilities?: string[];
  otherFeatures?: string[];
  gallery?: IGalleryImage[];
}
