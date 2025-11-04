export interface IFiltersValues {
  cities: {
    id: string;
    name: string;
  }[];
  categories: {
    id: string;
    label: string;
  }[];
  price: {
    min: number;
    max: number;
  };
}