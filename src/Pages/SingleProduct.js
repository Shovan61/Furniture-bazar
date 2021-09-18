import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { single_product_url } from '../utils';
import { NavBar, Footer, StartMark } from '../Components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import './SingleProduct.css';
import { priceFixer } from '../helper';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';
import { useGlobalSingleProductContext } from '../Contexts/SinglePrContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    nav: {
        width: '100%',
        zIndex: '2',
    },
    loader: {
        width: '100%',
        height: '80vh',
        marginTop: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
    },
    left: {
        width: '55%',
    },
    info: {
        marginBottom: '1rem',
        fontSize: '16px',
    },
    right: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '3rem',
    },

    bottomImages: {
        width: '100%',
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    stars: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    colorContainer: {
        marginTop: '2rem',
        display: 'flex',
    },
    descript: {
        lineHeight: '1.5rem',
        letterSpacing: '0.1rem',
        marginBottom: '2rem',
    },
    colors: {
        display: 'flex',
        width: '40%',
        justifyContent: 'space-evenly',
    },
    colorBox: {
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: '50%',
    },
    quantity: {
        marginTop: '1.5rem',
        marginBottom: '1.6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
    },
    '@media (max-width: 1140px)': {
        container: {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
        },
        right: {
            width: '100%',
            marginTop: '3rem',
        },
        left: {
            width: '100%',
        },
        descript: {
            width: '85%',
        },
        btn: {
            width: '50%',
        },
    },
    '@media (max-width: 992px)': {},
    '@media (max-width: 600px)': {
        mainImage: {
            '& img': {
                height: '470px',
                width: '480px',
            },
        },
        bottomImages: {
            '& img': {
                height: '60px',
                width: '70px',
            },
        },
        descript: {
            '& h6': {
                fontSize: '13px',
            },
        },
    },
}));

function SingleProduct() {
    let { id } = useParams();
    const classes = useStyles();
    const { handleProduct, cartItems, updateProduct } =
        useGlobalSingleProductContext();
    const [state, setstate] = useState({
        isLoading: true,
        data: null,
        isFetchError: false,
        displayImg: 0,
        curColorValue: null,
        curColor: '',
        quantity: 1,
    });

    const getData = async () => {
        setstate((previous) => {
            return { ...previous, isLoading: true, isFetchError: false };
        });

        try {
            const response = await fetch(`${single_product_url}${id}`);
            const crudData = await response.json();
            setstate((previous) => {
                return { ...previous, data: crudData };
            });
            setstate((previous) => {
                return { ...previous, isLoading: false };
            });
        } catch (error) {
            // throw new Error(
            //     `${error}, error happend in fetching single product data`
            // );
            setstate((previous) => {
                return { ...previous, isFetchError: true, isLoading: false };
            });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleBorder = (ind) => {
        setstate((previous) => {
            return { ...previous, displayImg: ind };
        });
    };

    const handleColorClick = (color, ind) => {
        setstate((prev) => {
            return { ...prev, curColor: color, curColorValue: ind };
        });
    };

    const handleSubtract = () => {
        if (state.quantity > 1) {
            setstate((prev) => {
                return { ...prev, quantity: prev.quantity - 1 };
            });
        }
    };

    const handleAdd = () => {
        if (state.quantity < state.data.stock) {
            setstate((prev) => {
                return { ...prev, quantity: prev.quantity + 1 };
            });
        }
    };

    const AddToCart = () => {
        const stateId = state.data.id;
        const stateColor = state.curColor;

        const tempItem = cartItems.find(
            (item) => item.id === stateId + stateColor
        );

        if (tempItem) {
            const tempCart = cartItems.map((cartItem) => {
                if (cartItem.id === stateId + stateColor) {
                    let newAmount = cartItem.qntity + state.quantity;
                    if (newAmount > state.data.stock) {
                        newAmount = state.data.stock;
                    }
                    return { ...cartItem, qntity: newAmount };
                } else {
                    return cartItem;
                }
            });

            return updateProduct(tempCart);
        } else {
            const name = state.data.name;
            const price = state.data.price / 100;
            const color = stateColor;
            const image = state.data.images[0].url;
            const qntity = state.quantity;
            const id = stateId + stateColor;
            const stock = state.data.stock;

            const obj = {
                name,
                price,
                color,
                image,
                qntity,
                id,
                stock,
            };

            handleProduct(obj);
        }
    };

    return (
        <div>
            <div className={classes.nav}>
                <NavBar />
            </div>
            <div className={classes.root}>
                {state.isFetchError && (
                    <Alert severity='error' style={{ marginTop: '5rem' }}>
                        <AlertTitle>Server Issue</AlertTitle>
                        The Server failed to load data —{' '}
                        <strong>Please try again after few moments!</strong>
                    </Alert>
                )}

                {state.isLoading ? (
                    <div className={classes.loader}>
                        <CircularProgress color='secondary' size='5rem' />
                    </div>
                ) : (
                    <div className={classes.container}>
                        <div className={classes.left}>
                            <div className={classes.mainImage}>
                                <img
                                    style={{
                                        borderRadius: '5px',
                                        border: '1px solid #999',
                                    }}
                                    height='550px'
                                    width='600px'
                                    src={
                                        state.data.images[state.displayImg].url
                                    }
                                    alt={
                                        state.data.images[state.displayImg]
                                            .filename
                                    }
                                />
                            </div>
                            <div className={classes.bottomImages}>
                                {state.data.images.map((curObj, i) => (
                                    <div
                                        key={i}
                                        onClick={() => handleBorder(i)}>
                                        <img
                                            className={`mini-image ${
                                                state.displayImg === i
                                                    ? 'active-border'
                                                    : ''
                                            }`}
                                            height='90px'
                                            width='100px'
                                            src={curObj.url}
                                            alt={curObj.filename}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={classes.right}>
                            <Typography
                                color='textSecondary'
                                variant='h4'
                                component='h2'
                                gutterBottom>
                                {state.data.name.toUpperCase()}
                            </Typography>

                            <div className={classes.stars}>
                                <div>
                                    <StartMark {...state.data} />
                                </div>
                                <Typography
                                    style={{ marginTop: '0.5rem' }}
                                    color='textSecondary'
                                    variant='subtitle'
                                    gutterBottom>
                                    ({state.data.reviews} Customer Reviews)
                                </Typography>
                            </div>
                            <Typography
                                style={{ marginBottom: '2rem' }}
                                color='secondary'
                                variant='h5'
                                component='h2'
                                gutterBottom>
                                {priceFixer(state.data.price)}
                            </Typography>

                            <span className={classes.descript}>
                                {state.data.description}
                            </span>
                            <span
                                className={classes.info}
                                style={{
                                    color:
                                        state.data.stock > 0 ? 'green' : 'red',
                                }}>
                                {`${
                                    state.data.stock > 0
                                        ? ' In Stock'
                                        : 'Out Of Stock'
                                }`}
                            </span>
                            <span className={classes.info}>SKU: {id}</span>
                            <span className={classes.info}>
                                Brand: {state.data.company.toUpperCase()}
                            </span>
                            <Divider />
                            {state.data.stock > 0 && (
                                <React.Fragment>
                                    {/* Colors */}
                                    {state.curColor === '' && (
                                        <span
                                            style={{
                                                marginTop: '1rem',
                                                color: 'red',
                                            }}>
                                            Pick a color
                                        </span>
                                    )}

                                    <div className={classes.colorContainer}>
                                        <span className={classes.info}>
                                            Colors:
                                        </span>
                                        <div className={classes.colors}>
                                            {state.data.colors.map(
                                                (curCol, i) => (
                                                    <div
                                                        key={i}
                                                        className={
                                                            classes.colorBox
                                                        }
                                                        style={{
                                                            backgroundColor:
                                                                curCol,
                                                            opacity:
                                                                state.curColorValue ===
                                                                i
                                                                    ? '1'
                                                                    : '0.5',
                                                        }}
                                                        onClick={() =>
                                                            handleColorClick(
                                                                curCol,
                                                                i
                                                            )
                                                        }>
                                                        {state.curColorValue ===
                                                            i && (
                                                            <CheckIcon
                                                                style={{
                                                                    color: 'white',
                                                                    fontSize:
                                                                        '2rem',
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    {/* quantity */}
                                    <div className={classes.quantity}>
                                        <IconButton
                                            size='medium'
                                            color='secondary'>
                                            <RemoveIcon
                                                style={{ cursor: 'pointer' }}
                                                color='secondary'
                                                onClick={handleSubtract}
                                            />
                                        </IconButton>

                                        <span style={{ fontSize: '2rem' }}>
                                            {state.quantity}
                                        </span>
                                        <IconButton
                                            size='medium'
                                            color='secondary'>
                                            <AddIcon
                                                style={{ cursor: 'pointer' }}
                                                color='secondary'
                                                onClick={handleAdd}
                                            />
                                        </IconButton>
                                    </div>
                                    <Button
                                        disabled={state.curColor === ''}
                                        className={classes.btn}
                                        variant='contained'
                                        color='primary'
                                        onClick={AddToCart}>
                                        Add To Cart
                                    </Button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default SingleProduct;
