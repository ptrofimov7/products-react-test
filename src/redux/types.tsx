import { Product } from '../api/types';

export enum StatusType {
  idle = 'idle',
  loading = 'loading',
  failed = 'failed',
}

export type Status =
  | StatusType.idle
  | StatusType.loading
  | StatusType.failed;

export interface ProductStore {
  products: Partial<Product[]>;
  categories: string[];
  status: Status;
}

export type ProductPayloadData = Partial<
  Omit<ProductStore, 'status'>
>;
