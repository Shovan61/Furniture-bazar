import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useGlobalSingleProductContext } from '../Contexts/SinglePrContext';
import Divider from '@material-ui/core/Divider';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
    },
    total: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textarea: {
        resize: 'none',
        width: '100%',
        marginTop: '1rem',
        '&:focus': {
            borderColor: 'red',
            outLine: 'none !important',
        },
    },
}));

function CheckoutBox() {
    const classes = useStyles();
    const { cartItems } = useGlobalSingleProductContext();
    const [total, settotal] = useState(null);
    let history = useHistory();
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    useEffect(() => {
        settotal(calcTotal);
    }, [cartItems]);

    const gotoCheckOut = () => {
        history.push('/checkout');
    };

    const calcTotal = () => {
        const allPrice = cartItems.map(
            (curObj) => curObj.price * curObj.qntity
        );

        const totalPRice = allPrice.reduce((a, b) => a + b, 0);

        return totalPRice.toFixed(2);
    };

    return (
        <Card className={classes.root}>
            <div className={classes.total}>
                <span>Total</span>
                <Typography
                    style={{ marginBottom: '3rem' }}
                    variant='h5'
                    color='secondary'>
                    ${total}
                </Typography>
            </div>
            <Divider />

            <div className={classes.comment}>
                <Typography
                    style={{ marginTop: '2rem' }}
                    variant='body1'
                    color='textSecondary'>
                    Additional Note
                </Typography>
                <TextareaAutosize
                    minRows={15}
                    fullWidth
                    className={classes.textarea}
                    aria-label='maximum height'
                />

                <Typography
                    style={{ marginTop: '2rem' }}
                    variant='body1'
                    color='textSecondary'>
                    Voucher
                </Typography>
                <TextareaAutosize
                    minRows={3}
                    fullWidth
                    className={classes.textarea}
                    aria-label='maximum height'
                />
            </div>
            {user ? (
                <Button
                    disabled={cartItems.length === 0}
                    variant='contained'
                    color='secondary'
                    style={{ marginTop: '3rem' }}
                    onClick={gotoCheckOut}>
                    Check Out
                </Button>
            ) : (
                <Button
                    variant='contained'
                    color='secondary'
                    style={{ marginTop: '3rem' }}
                    onClick={loginWithRedirect}>
                    Log In
                </Button>
            )}
        </Card>
    );
}

export default CheckoutBox;
