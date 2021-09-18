import React from 'react';
import { NavBar, Footer, CartItem, CheckoutBox } from '../Components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useGlobalSingleProductContext } from '../Contexts/SinglePrContext';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    footer: {
        marginTop: 'auto',
    },
    cartItems: {
        width: '60%',
    },
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        padding: '1rem',
        marginTop: '1rem',
        justifyContent: 'space-between',
    },
    checkOutBox: {
        width: '35%',
        height: '80vh',
        marginRight: '2rem',
        position: 'sticky',
        top: '0',
    },
    '@media (max-width: 1150px)': {
        container: {
            flexDirection: 'column',
        },
        cartItems: {
            width: '100%',
        },
        checkOutBox: {
            marginTop: '3rem',
            width: '100%',
        },
    },
    '@media (max-width: 750px)': {},
    '@media (max-width: 600px)': {},
}));

function CartPage() {
    const { cartItems } = useGlobalSingleProductContext();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar isShow={false} />
            <div className={classes.container}>
                <div className={classes.cartItems}>
                    {cartItems.map((cur, i) => (
                        <CartItem key={i} {...cur} />
                    ))}
                </div>

                <div className={classes.checkOutBox}>
                    <CheckoutBox />
                </div>
            </div>

            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default CartPage;
