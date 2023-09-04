import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProductStore, StatusType } from '../types';
import { productService } from '../../api/products';
import { Product } from '../../api/types';

const initialState: ProductStore = {
  categories: [] as string[],
  products: [] as Product[],
  status: StatusType.idle,
};

export const getProductsAsync = createAsyncThunk(
  'product/getProductsAsync',
  async (limit: number = 0): Promise<Product[]> => {
    const products =
      await productService.getProducts(limit);
    return products;
  }
);
let count = 0;
export const addProductAsync = createAsyncThunk(
  'product/addProductAsync',
  async (
    product: Omit<Product, 'id'>
  ): Promise<Product> => {
    const { id } =
      await productService.addProduct(product);
    if (!count) {
      count = id;
    }
    return { ...product, id: count++ };
  }
);

export const getProductCategoriesAsync = createAsyncThunk(
  'product/getProductCategoriesAsync',
  async (): Promise<string[]> => {
    const categories =
      await productService.getProductCategories();
    return categories;
  }
);

export const deleteProductAsync = createAsyncThunk(
  'product/deleteProductAsync',
  async (id: number): Promise<Product> => {
    const product =
      await productService.deleteProduct(id);
    return product;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteProductAddedByUser(
      state,
      action: PayloadAction<number>
    ) {
      state.products = (
        state.products as Product[]
      ).filter(
        (product: Product) =>
          product.id !== action.payload
      );
    },
    clearProducts: (state) => {
      state.products = initialState.products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.status = StatusType.loading;
      })
      .addCase(
        getProductsAsync.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = StatusType.idle;
          state.products = [
            ...state.products,
            ...(action.payload || []),
          ];
        }
      )
      .addCase(getProductsAsync.rejected, (state) => {
        state.status = StatusType.failed;
      })

      .addCase(addProductAsync.pending, (state) => {
        state.status = StatusType.loading;
      })
      .addCase(
        addProductAsync.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.status = StatusType.idle;
          state.products = [
            action.payload,
            ...state.products,
          ];
        }
      )
      .addCase(addProductAsync.rejected, (state) => {
        state.status = StatusType.failed;
      })

      .addCase(
        getProductCategoriesAsync.pending,
        (state) => {
          state.status = StatusType.loading;
        }
      )
      .addCase(
        getProductCategoriesAsync.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.status = StatusType.idle;
          state.categories = action.payload;
        }
      )
      .addCase(
        getProductCategoriesAsync.rejected,
        (state) => {
          state.status = StatusType.failed;
        }
      )

      .addCase(deleteProductAsync.pending, (state) => {
        state.status = StatusType.loading;
      })
      .addCase(
        deleteProductAsync.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.status = StatusType.idle;
          state.products = (
            state.products as Product[]
          ).filter(
            (product: Product) =>
              product.id !== action.payload.id
          );
        }
      )
      .addCase(deleteProductAsync.rejected, (state) => {
        state.status = StatusType.failed;
      });
  },
});

export const { deleteProductAddedByUser, clearProducts } =
  productSlice.actions;

export const selectProducts = (state: RootState) =>
  state.product.products;
export const selectProductCategories = (
  state: RootState
) => state.product.categories;
export const selectStatus = (state: RootState) =>
  state.product.status;

export default productSlice.reducer;
