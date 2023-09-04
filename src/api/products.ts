import { axiosInstance } from './instance';
import {
  Product,
  ProductResponseData,
  ProductsResponseData,
} from './types';

class ProductService {
  async getProducts(
    limit = 0
  ): Promise<ProductResponseData[]> {
    const response =
      await axiosInstance.get<ProductsResponseData>(
        `/products?limit=${limit}`
      );
    return response.data.products;
  }

  async addProduct(
    product: Omit<Product, 'id'>
  ): Promise<{ id: number }> {
    const response = await axiosInstance.post(
      '/products/add',
      {
        body: JSON.stringify(product),
      }
    );
    return response.data;
  }

  async deleteProduct(id: number): Promise<Product> {
    const response = await axiosInstance.delete(
      `/products/${id}`
    );
    return response.data;
  }

  async getProductCategories(): Promise<string[]> {
    const response = await axiosInstance.get(
      '/products/categories'
    );
    return response.data;
  }
}

export const productService = new ProductService();
