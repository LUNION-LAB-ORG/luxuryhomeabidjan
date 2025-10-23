export interface IGalleryImage {
  id: number;
  url: string;
}

export interface Iproduct {
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
  video: string;

  interiorDetails: string[];
  outdoorDetails: string[];
  utilities: string[];
  otherFeatures: string[];
  gallery: IGalleryImage[];
}

export const products: Iproduct[] = [
  {
    id: 1,
    title: "VILLA LA CASA",
    video: "/assets/videos/video1.mp4",
    price: "650 000 FCFA/nuitée",
    rating: 4.7,
    image: "/assets/images/coup-de-coeur/coup1.jpg",
    surface: 600,
    chambre: 3,
    salleDeBain: 4,
    localisation: "Cocody",
    type: "Location",
    interiorDetails: ["Hardwood floors", "Luxury"],
    outdoorDetails: ["Deck yard", "Garage Attached", "Pool"],
    utilities: ["Cable TV", "Heating", "Ventilation"],
    otherFeatures: [
      "Close Accessible",
      "Fireplace",
      "Washer and dryer",
      "Gym",
      "Media Room",
      "Basketball court",
      "Hot tub",
      "Electricity",
      "Natural Gas",
      "Water",
      "Elevator",
      "Smoke detectors",
      "WiFi",
    ],
    gallery: [
      { id: 1, url: "/assets/images/coup-de-coeur/la-casa1.jpg" },
      { id: 2, url: "/assets/images/coup-de-coeur/la-casa2.jpg" },
      { id: 3, url: "/assets/images/coup-de-coeur/la-casa3.jpg" },
      { id: 4, url: "/assets/images/coup-de-coeur/la-casa4.jpg" },
      { id: 5, url: "/assets/images/coup-de-coeur/la-casa5.jpg" },
      { id: 6, url: "/assets/images/coup-de-coeur/la-casa6.jpg" },
      { id: 7, url: "/assets/images/coup-de-coeur/la-casa7.jpg" },
      { id: 8, url: "/assets/images/coup-de-coeur/la-casa8.jpg" },
      { id: 9, url: "/assets/images/coup-de-coeur/la-casa9.jpg" },
      { id: 10, url: "/assets/images/coup-de-coeur/la-casa10.jpg" },
    ],
  },
  {
    id: 2,
    title: "VILLA PRESTIGE",
    video: "/assets/videos/video1.mp4",
    price: "850 000 FCFA", // prix de vente, sans nuitée
    rating: 4.8,
    image: "/assets/images/coup-de-coeur/coup2.jpg",
    surface: 700,
    chambre: 4,
    salleDeBain: 5,
    localisation: "Bingerville",
    type: "Vente",
    interiorDetails: ["Hardwood floors", "Luxury"],
    outdoorDetails: ["Deck yard", "Garage Attached", "Pool"],
    utilities: ["Cable TV", "Heating", "Ventilation"],
    otherFeatures: [
      "Close Accessible",
      "Fireplace",
      "Washer and dryer",
      "Gym",
      "Media Room",
      "Basketball court",
      "Hot tub",
      "Electricity",
      "Natural Gas",
      "Water",
      "Elevator",
      "Smoke detectors",
      "WiFi",
    ],
    gallery: [
      { id: 1, url: "/assets/images/coup-de-coeur/prestige1.jpg" },
      { id: 2, url: "/assets/images/coup-de-coeur/prestige2.jpg" },
      { id: 3, url: "/assets/images/coup-de-coeur/prestige3.jpg" },
      { id: 4, url: "/assets/images/coup-de-coeur/prestige4.jpg" },
      { id: 5, url: "/assets/images/coup-de-coeur/prestige5.jpg" },
      { id: 6, url: "/assets/images/coup-de-coeur/prestige6.jpg" },
      { id: 7, url: "/assets/images/coup-de-coeur/prestige7.jpg" },
      { id: 8, url: "/assets/images/coup-de-coeur/prestige8.jpg" },
      { id: 9, url: "/assets/images/coup-de-coeur/prestige9.jpg" },
      { id: 10, url: "/assets/images/coup-de-coeur/prestige10.jpg" },
    ],
  },
  {
    id: 3,
    title: "VILLA PRESTIGE II",
    video: "/assets/videos/video1.mp4",
    price: "950 000 FCFA", // prix de vente
    rating: 4.8,
    image: "/assets/images/coup-de-coeur/coup4.png",
    surface: 720,
    chambre: 4,
    salleDeBain: 5,
    localisation: "Bingerville",
    type: "Vente",
    interiorDetails: ["Hardwood floors", "Luxury"],
    outdoorDetails: ["Deck yard", "Garage Attached", "Pool"],
    utilities: ["Cable TV", "Heating", "Ventilation"],
    otherFeatures: [
      "Close Accessible",
      "Fireplace",
      "Washer and dryer",
      "Gym",
      "Media Room",
      "Basketball court",
      "Hot tub",
      "Electricity",
      "Natural Gas",
      "Water",
      "Elevator",
      "Smoke detectors",
      "WiFi",
    ],
    gallery: [
      { id: 1, url: "/assets/images/coup-de-coeur/prestige2-1.jpg" },
      { id: 2, url: "/assets/images/coup-de-coeur/prestige2-2.jpg" },
      { id: 3, url: "/assets/images/coup-de-coeur/prestige2-3.jpg" },
      { id: 4, url: "/assets/images/coup-de-coeur/prestige2-4.jpg" },
      { id: 5, url: "/assets/images/coup-de-coeur/prestige2-5.jpg" },
      { id: 6, url: "/assets/images/coup-de-coeur/prestige2-6.jpg" },
      { id: 7, url: "/assets/images/coup-de-coeur/prestige2-7.jpg" },
      { id: 8, url: "/assets/images/coup-de-coeur/prestige2-8.jpg" },
      { id: 9, url: "/assets/images/coup-de-coeur/prestige2-9.jpg" },
      { id: 10, url: "/assets/images/coup-de-coeur/prestige2-10.jpg" },
    ],
  },
  {
    id: 4,
    title: "Moana",
    video: "/assets/videos/video1.mp4",
    price: "550 000 FCFA/nuitée",
    rating: 4.7,
    image: "/assets/images/coup-de-coeur/coup3.png",
    surface: 600,
    chambre: 3,
    salleDeBain: 4,
    localisation: "Assinie km 17.8",
    type: "Location",
    interiorDetails: ["Hardwood floors", "Luxury"],
    outdoorDetails: ["Deck yard", "Garage Attached", "Pool"],
    utilities: ["Cable TV", "Heating", "Ventilation"],
    otherFeatures: [
      "Close Accessible",
      "Fireplace",
      "Washer and dryer",
      "Gym",
      "Media Room",
      "Basketball court",
      "Hot tub",
      "Electricity",
      "Natural Gas",
      "Water",
      "Elevator",
      "Smoke detectors",
      "WiFi",
    ],
    gallery: [
      { id: 1, url: "/assets/images/moana/moana1.jpg" },
      { id: 2, url: "/assets/images/moana/moana2.jpg" },
      { id: 3, url: "/assets/images/moana/moana3.jpg" },
      { id: 4, url: "/assets/images/moana/moana4.jpg" },
      { id: 5, url: "/assets/images/moana/moana5.jpg" },
      { id: 6, url: "/assets/images/moana/moana6.jpg" },
      { id: 7, url: "/assets/images/moana/moana7.jpg" },
      { id: 8, url: "/assets/images/moana/moana8.jpg" },
      { id: 9, url: "/assets/images/moana/moana9.jpg" },
      { id: 10, url: "/assets/images/moana/moana10.jpg" },
      { id: 11, url: "/assets/images/moana/moana11.jpg" },
      { id: 12, url: "/assets/images/moana/moana12.jpg" },
      { id: 13, url: "/assets/images/moana/moana13.jpg" },
    ],
  },
];
