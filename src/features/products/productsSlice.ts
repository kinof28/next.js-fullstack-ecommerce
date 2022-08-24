export interface ProductPreview {
  id: number;
  name: string;
  title: string;
  price: number;
  mainImag: string;
  models: Model[];
}

export interface Model {
  id: number;
  image: string;
}

const initilaState: ProductPreview[] = [];
