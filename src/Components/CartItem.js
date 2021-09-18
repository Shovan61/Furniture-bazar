import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { calcHelper } from '../helper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useGlobalSingleProductContext } from '../Contexts/SinglePrContext';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '140px',
        width: '100%',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        height: '100%',
        width: '45%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        width: '55%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    quantity: {
        marginTop: '1.5rem',
        marginBottom: '1.6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '15%',
        marginTop: '1.5rem',
    },
    // '@media (max-width: 1000px)': {
    //     img: {
    //         width: '55%',
    //     },
    // },
    '@media (max-width: 750px)': {
        img: {
            width: '65%',
        },
        right: {
            width: '25%',
        },
    },
    '@media (max-width: 500px)': {
        img: {
            width: '70%',
        },
        right: {
            width: '25%',
        },
    },
}));

function CartItem(props) {
    const { color, id, image, name, price, qntity, stock } = props;
    const { updateQuantity, deleteItem } = useGlobalSingleProductContext();
    const classes = useStyles();
    const [newQuantity, setnewQuantity] = useState(qntity);

    const calculatePrice = () => {
        return price * qntity;
    };

    const handleSubtract = () => {
        if (newQuantity > 1) {
            setnewQuantity((prev) => {
                return prev - 1;
            });
        }

        updateQuantity(id, newQuantity);
    };

    const handleAdd = () => {
        if (newQuantity < stock) {
            setnewQuantity((prev) => {
                return prev + 1;
            });
        }
        updateQuantity(id, newQuantity);
    };

    return (
        <Card className={classes.root}>
            {/* Left */}
            <div className={classes.img}>
                <img height='140px' width='130px' src={image} alt='img' />

                <div className={classes.content}>
                    <Typography variant='body1' gutterBottom>
                        {name.toUpperCase()}
                    </Typography>

                    <div className={classes.bottom}>
                        <Typography variant='subtitle' gutterBottom>
                            ${price} x {qntity}{' '}
                            <span style={{ color: 'red', marginLeft: '1rem' }}>
                                {calcHelper(calculatePrice())}
                            </span>
                        </Typography>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className={classes.right}>
                <IconButton onClick={() => deleteItem(id)}>
                    <DeleteIcon color='secondary' />
                </IconButton>
                <div className={classes.quantity}>
                    <IconButton
                        size='medium'
                        color='secondary'
                        onClick={handleSubtract}>
                        <RemoveIcon
                            style={{ cursor: 'pointer' }}
                            color='secondary'
                        />
                    </IconButton>

                    <span style={{ fontSize: '1rem' }}>{qntity}</span>
                    <IconButton
                        size='medium'
                        color='secondary'
                        onClick={handleAdd}>
                        <AddIcon
                            style={{ cursor: 'pointer' }}
                            color='secondary'
                        />
                    </IconButton>
                </div>
            </div>
        </Card>
    );
}

export default CartItem;
