import httpClient from '../../../shared/configs/axios_client';
import { Product } from '../../../shared/models/product';

export async function getAllProducts(params: ProductsParams): Promise<Product[]> {
  return httpClient
    .get('/products', {
      params: {
        offset: params.offset,
        limit: params.limit,
        ...params.filter,
      },
    })
    .then((v) => v.data);
}
export async function getProduct(id: number): Promise<Product> {
  return httpClient.get(`/products/${id}`).then((v) => v.data);
}

interface ProductsParams {
  offset: number;
  limit: number;
  filter?: {};
}
