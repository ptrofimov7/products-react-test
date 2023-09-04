export type ProductResponseData = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductsResponseData = {
  products: ProductResponseData[];
  total: number;
  skip: number;
  limit: number;
};

type ProductExtraFields = Partial<{
  author: string;
  publishing_year: number;
  addedByUser: boolean;
}>;

export type Product = ProductResponseData &
  ProductExtraFields;
