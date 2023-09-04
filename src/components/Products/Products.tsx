import * as Styled from './Products.styles';
import ProductsTable from './ProductsTable';
import SearchProductsField from './SearchProductsField';
import {
  selectProducts,
  selectStatus,
} from '../../redux/slices';
import { useMemo, useState } from 'react';
import { Product } from '../../api/types';
import { useAppSelector } from '../../redux/hooks';
import { Box, Typography } from '@mui/material';
import { StatusType } from '../../redux/types';

const Products = () => {
  const [search, setSearch] = useState('');
  let data = useAppSelector(selectProducts) as Product[];
  let status = useAppSelector(selectStatus);

  data = useMemo(() => {
    if (!search) {
      return data;
    }
    return data.filter((value: Product) => {
      return (
        value.title
          .trim()
          .toLowerCase()
          .includes(search.trim().toLowerCase()) ||
        value.category
          .trim()
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      );
    });
  }, [data, search]);

  const handleChange = (value: string) => {
    setSearch(value);
  };

  if (status === StatusType.loading) {
    return <Typography variant='body1'>Завантажується ...</Typography>;
  }

  if (status === StatusType.failed) {
    return (
      <Typography variant='body1' color='red'>Щось пішло так. Виникла якась помилка!</Typography>
    );
  }

  return (
    <Box component="section">
      <Styled.CustomHeading variant="h2">
        Продукти
      </Styled.CustomHeading>
      <SearchProductsField
        value={search}
        onChange={handleChange}
      />
      <ProductsTable data={data} />
    </Box>
  );
};
export default Products;
