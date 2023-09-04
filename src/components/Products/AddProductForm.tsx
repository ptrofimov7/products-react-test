import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../api/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addProductAsync, getProductCategoriesAsync, selectProductCategories } from '../../redux/slices';
import {
    Button, IconButton, ImageList, ImageListItem, Input, InputLabel,
    MenuItem, Select, TextField, TextareaAutosize, Typography
} from '@mui/material';
import { Close, FileUploadOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';
import { validationSchema } from './settings';

const AddProductForm = () => {
    const formik = useFormik<Omit<Product, 'id'>>({
        initialValues: {
            title: '',
            description: '',
            author: '',
            publishing_year: 1980,
            addedByUser: true,
            price: 0,
            discountPercentage: 0,
            rating: 0,
            stock: 0,
            brand: '',
            category: '',
            thumbnail: '',
            images: [] as string[],
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                await dispatch(addProductAsync(values)).unwrap();
                resetForm();
                navigate('..');
            } catch (err) {
                console.error('Не вдалося додати продукт', err);
            }
        },
    });
    const dispatch = useAppDispatch();
    const categories = useAppSelector(
        selectProductCategories
    );
    const [photoUrl, setPhotoUrl] = React.useState('');
    const [imagesUrl, setImagesUrl] = React.useState('');
    const imagesRef = React.useRef<HTMLInputElement>();
    const photoRef = React.useRef<HTMLInputElement>();
    const navigate = useNavigate();
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const blobUrl = !files?.length ? '' : URL.createObjectURL(files[0]);
        setPhotoUrl(files?.[0].name || '');
        formik.setFieldValue('thumbnail', blobUrl);
    };
    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const blobUrl = (!files?.length ? [] : Array.from(files).map((file: File) =>
            URL.createObjectURL(file))) as string[];
        setImagesUrl(!files?.length ? '' : Array.from(files).map((file: File) => file.name).join(', '));
        formik.setFieldValue('images', blobUrl);
    };
    React.useEffect(() => {
        dispatch(getProductCategoriesAsync());
    }, [dispatch]);

    return (
        <Box component="section">
            <Typography
                variant="h2"
                sx={{
                    color: '#4E5AF2',
                    textAlign: 'center',
                    mb: '20px',
                }}
            >
                Додати новий продукт
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        label="Назва"
                        id="title"
                        fullWidth
                        {...formik.getFieldProps('title')}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <InputLabel
                        htmlFor="description"
                        sx={{ fontSize: '18px', fontWeight: 400 }}
                    >
                        Опис товара:
                    </InputLabel>
                    <TextareaAutosize
                        id="description"
                        placeholder="Опис товара"
                        minRows={4}
                        aria-label="Опис товара"
                        {...formik.getFieldProps('description')}
                        style={{
                            width: '100%',
                            padding: '16.5px 14px',
                            fontSize: '18px',
                            fontWeight: 400,
                            resize: 'none',
                        }}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        label="Автор"
                        id="author"
                        fullWidth
                        {...formik.getFieldProps('author')}
                        error={formik.touched.author && Boolean(formik.errors.author)}
                        helperText={formik.touched.author && formik.errors.author}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        label="Рік видання"
                        id="publishing_year"
                        type="number"
                        fullWidth
                        {...formik.getFieldProps('publishing_year')}
                        error={formik.touched.publishing_year && Boolean(formik.errors.publishing_year)}
                        helperText={formik.touched.publishing_year && formik.errors.publishing_year}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        label="Вартість"
                        id="price"
                        type="number"
                        fullWidth
                        {...formik.getFieldProps('price')}
                        error={formik.touched.price && Boolean(formik.errors.price)}
                        helperText={formik.touched.price && formik.errors.price}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        label="Відсоток знижки"
                        id="discountPercentage"
                        type="number"
                        fullWidth
                        {...formik.getFieldProps(
                            'discountPercentage'
                        )}
                        error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                        helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        label="Рейтинг"
                        id="rating"
                        type="number"
                        fullWidth
                        {...formik.getFieldProps('rating')}
                        error={formik.touched.rating && Boolean(formik.errors.rating)}
                        helperText={formik.touched.rating && formik.errors.rating}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        label="Запас"
                        id="stock"
                        type="number"
                        fullWidth
                        {...formik.getFieldProps('stock')}
                        error={formik.touched.stock && Boolean(formik.errors.stock)}
                        helperText={formik.touched.stock && formik.errors.stock}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        label="Бренд"
                        id="brand"
                        fullWidth
                        {...formik.getFieldProps('brand')}
                        error={formik.touched.brand && Boolean(formik.errors.brand)}
                        helperText={formik.touched.brand && formik.errors.brand}
                    />
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <InputLabel htmlFor="category" sx={{background: 'white'}}>
                        Категорія:
                    </InputLabel>
                    <Select
                        id="category"
                        fullWidth
                        {...formik.getFieldProps('category')}
                        error={formik.touched.category && Boolean(formik.errors.category)}
                    >
                        <MenuItem key="empty" value="" disabled>
                            Вибрати категорію
                        </MenuItem>
                        {categories.map((category: string) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        variant="standard"
                        fullWidth
                        type="text"
                        value={photoUrl}
                        placeholder="Виберіть фото"
                        InputProps={{
                            endAdornment: (
                                <>
                                    <IconButton component="label">
                                        <FileUploadOutlined />
                                        <Input
                                            type="file"
                                            id="thumbnail"
                                            sx={{ display: 'none' }}
                                            inputProps={{
                                                accept: '.jpg, .jpeg, .png',
                                                hidden: true,
                                            }}
                                            onChange={handlePhotoChange}
                                            error={formik.touched.thumbnail && Boolean(formik.errors.thumbnail)}
                                        />
                                    </IconButton>
                                    <IconButton
                                        component="label"
                                        onClick={() => {
                                            setPhotoUrl('');
                                            formik.setFieldValue('thumbnail', '');
                                            if (photoRef.current && photoRef.current.files) {
                                                photoRef.current.files = null;
                                            }
                                        }}
                                    >
                                        <Close />
                                    </IconButton>
                                </>
                            ),
                        }}
                    />
                    <Typography
                        style={{ marginTop: '10px' }}
                        variant="body1"
                    >
                        Вибране фото:
                    </Typography>
                    <Box style={{ marginTop: '10px' }}>
                        {formik.values.thumbnail ? (
                            <img
                                src={formik.values.thumbnail}
                                alt=""
                                width={100}
                                height="auto"
                            />
                        ) : (
                            'Нема'
                        )}
                    </Box>
                </Box>
                <Box sx={{ mb: '24px' }}>
                    <TextField
                        variant="standard"
                        fullWidth
                        type="text"
                        value={imagesUrl}
                        placeholder="Виберіть зображення"
                        InputProps={{
                            endAdornment: (
                                <>
                                    <IconButton component="label">
                                        <FileUploadOutlined />
                                        <Input
                                            ref={imagesRef}
                                            type="file"
                                            id="images"
                                            sx={{ display: 'none' }}
                                            inputProps={{
                                                accept: '.jpg, .jpeg, .png',
                                                multiple: true,
                                                hidden: true,
                                            }}
                                            onChange={handleImagesChange}
                                        />
                                    </IconButton>
                                    <IconButton
                                        component="label"
                                        onClick={() => {
                                            setImagesUrl('');
                                            formik.setFieldValue('images', '');
                                            if (imagesRef.current && imagesRef.current.files) {
                                                imagesRef.current.files = null;
                                            }
                                        }}
                                    >
                                        <Close />
                                    </IconButton>
                                </>
                            ),
                        }}
                    />
                    <Typography
                        variant="body1"
                        style={{ marginTop: '10px' }}
                    >
                        Вибрані зображення:
                    </Typography>
                    <ImageList
                        sx={{ width: 400, height: 'auto', marginTop: '10px' }}
                        cols={3}
                        rowHeight={100}
                    >
                        {formik.values.images?.length === 0
                            ? 'Нема'
                            : formik.values.images.map(
                                (image, index) => (
                                    <ImageListItem key={index}>
                                        <img
                                            src={image}
                                            style={{ width: 100, height: 'auto' }}
                                            alt=""
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                )
                            )}
                    </ImageList>
                </Box>
                <Button variant="contained" type="submit">
                    Зберегти Продукт
                </Button>
            </Box>
        </Box>
    );
};
export default AddProductForm;
