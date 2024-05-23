// Core
import React, { FC, useState } from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { Alert, Grid, Snackbar } from '@mui/material';

// components
import Cart from './Cart';
import Product from './Product';

// data
import allProducts from '../../../data/products.json'

// styles
import { MainWrapper } from './styles';

  export  interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity?: number
}

const ProductsPage: FC = () => {

    const [products, setProducts] = useState(allProducts)
    const [cart, setCart] = useState<IProduct[]>([])
    const [snackSuccessOpen, setSnackSuccessOpen] = useState<boolean>(false)
    const [snackFailedOpen, setSnackFailedOpen] = useState<boolean>(false)

    const handleClose = (event: any, reason: any) => {
        setSnackSuccessOpen(false);
        setSnackFailedOpen(false);
    };
    
    return (
        <MainWrapper>
            <Snackbar
                open={snackSuccessOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity="success">
                    Payment Successfull
                </Alert>
            </Snackbar>
            <Snackbar
                open={snackFailedOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity="error">
                    Payment Failed
                </Alert>
            </Snackbar>
            <Grid container>
              <Grid item lg={1}></Grid>
              <Grid item lg={10}><h1>JAYAMAL STORE</h1></Grid>
              <Grid item lg={1} sx={{ display: 'table' }}>
                <Cart cart={cart}
                  setSnackSuccessOpen={setSnackSuccessOpen}
                  setSnackFailedOpen={setSnackFailedOpen} />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
                <RenderProducts products={products} cart={cart} setCart={setCart} />
            </Grid>
        </MainWrapper>
    );
};

const RenderProducts  = ({ products, cart, setCart }: {products: IProduct[], cart: IProduct[], setCart:  (cart: IProduct[])=> void}) => {
    return (
      <>
        {products.map((product: IProduct) => (
              <Grid key={product.id} item xs={3}>
                  <Product product={product} cart={cart} setCart={setCart} />
              </Grid>
          ))}
      </>
    )
}

export default () => (
    <ErrorBoundary>
        <ProductsPage />
    </ErrorBoundary>
)