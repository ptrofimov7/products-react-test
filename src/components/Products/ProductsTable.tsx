import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
   GridColDef,
   GridToolbarContainer,
   GridActionsCellItem,
   GridRowId,
   GridRowsProp,
   DataGrid,
} from '@mui/x-data-grid';
import { Product } from '../../api/types';
import { useAppDispatch } from '../../redux/hooks';
import {
   deleteProductAddedByUser,
   deleteProductAsync,
} from '../../redux/slices';
import { useNavigate } from 'react-router-dom';
import DeleteProductDialog from './DeleteProductDialog';
import { GRID_DEFAULT_LOCALE_TEXT } from './settings';

const AddToolbar = () => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate('add');
   };

   return (
      <GridToolbarContainer>
         <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleClick}
         >
            Додати продукт
         </Button>
      </GridToolbarContainer>
   );
};

interface ProductsTableProps {
   data: Product[];
}

interface DeletedElement {
   id: number;
   title: string;
   addedByUser: boolean;
}

const ProductsTable = ({ data }: ProductsTableProps) => {
   const [deletedElement, setDeletedElement] =
      React.useState<DeletedElement>({
         id: 0,
         title: '',
         addedByUser: false,
      });
   const [open, setOpen] = React.useState<boolean>(false);
   const dispatch = useAppDispatch();
   const handleClose = () => {
      setDeletedElement({} as DeletedElement);
      setOpen(false);
   };
   const handleDelete = () => {
      const { id, addedByUser } = deletedElement;
      if (!id) {
         return;
      }
      if (addedByUser) {
         dispatch(deleteProductAddedByUser(Number(id)));
      } else {
         dispatch(deleteProductAsync(Number(id)));
      }
      setOpen(false);
      setDeletedElement({} as DeletedElement);
   };
   const handleDeleteOpenDialog =
      (
         id: GridRowId,
         title: string,
         addedByUser: boolean
      ) =>
         () => {
            setDeletedElement({
               id: id as number,
               title,
               addedByUser,
            });
            setOpen(true);
         };

   const columns: GridColDef[] = [
      {
         field: 'id',
         headerName: 'Id',
         type: 'number',
         width: 120,
         align: 'left',
         headerAlign: 'left',
         editable: false,
      },
      {
         field: 'title',
         headerName: 'Назва',
         width: 150,
         editable: false,
      },
      {
         field: 'description',
         headerName: 'Опис',
         width: 255,
         editable: false,
      },
      {
         field: 'price',
         headerName: 'Ціна',
         type: 'number',
         width: 120,
         align: 'left',
         headerAlign: 'left',
         editable: false,
      },
      {
         field: 'photo',
         headerName: 'Фото',
         width: 150,
         renderCell: (params) => (
            <img
               src={params.row.thumbnail}
               alt={params.row.title}
               style={{ width: '100%', height: 'auto' }}
            />
         ),
      },
      {
         field: 'rating',
         headerName: 'Рейтинг',
         type: 'number',
         width: 120,
         align: 'left',
         headerAlign: 'left',
         editable: false,
      },
      {
         field: 'stock',
         headerName: 'Запас',
         type: 'number',
         width: 120,
         align: 'left',
         headerAlign: 'left',
         editable: false,
      },
      {
         field: 'category',
         headerName: 'Категорія',
         width: 150,
         editable: false,
         type: 'string',
      },
      {
         field: 'addedByUser',
         headerName: 'Додано користувачем',
         width: 150,
         editable: false,
         type: 'boolean',
      },
      {
         field: 'actions',
         type: 'actions',
         headerName: 'Дії',
         width: 150,
         cellClassName: 'actions',
         getActions: (params) => {
            return [
               <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={handleDeleteOpenDialog(
                     params.id,
                     params.row.title,
                     params.row.addedByUser
                  )}
                  color="inherit"
               />,
            ];
         },
      },
   ];

   return (
      <>
         <Box
            sx={{
               height: 500,
               width: '100%',
               '& .actions': {
                  color: 'text.secondary',
               },
               '& .textPrimary': {
                  color: 'text.primary',
               },
            }}
         >
            <DataGrid
               localeText={{
                  ...GRID_DEFAULT_LOCALE_TEXT,
                  MuiTablePagination: {
                     labelRowsPerPage:
                        'Кількість рядків на сторінці',
                     labelDisplayedRows: ({ from, to, count }) =>
                        `${from} - ${to} із ${count}`,
                  },
               }}
               initialState={{
                  columns: {
                     columnVisibilityModel: {
                        addedByUser: false,
                     },
                  },
               }}
               rows={data as GridRowsProp}
               columns={columns}
               slots={{
                  toolbar: AddToolbar,
               }}
               slotProps={{
                  filterPanel: {
                    sx: {
                     '@media (max-width: 700px)': {
                        '& .MuiDataGrid-filterForm': {
                           flexDirection: 'column',
                           gap: '15px',
                           alignItems: 'center',
                        },
                        '& .MuiDataGrid-filterFormLogicOperatorInput, & .MuiDataGrid-filterFormColumnInput, & .MuiDataGrid-filterFormOperatorInput, & .MuiDataGrid-filterFormValueInput': {
                           width: '75%',
                        },
                        '& .MuiDataGrid-filterFormDeleteIcon': {
                           alignSelf: 'flex-end',
                        },
                     },
                    },
                  },
                }}
            />
         </Box>
         <DeleteProductDialog
            caption="Видалення продукта"
            question={`Ви дійсно хочете видалити товар ${deletedElement.title}?`}
            open={open}
            handleClose={handleClose}
            handlePerform={handleDelete}
         />
      </>
   );
};

export default ProductsTable;
