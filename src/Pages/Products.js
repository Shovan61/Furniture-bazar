import React, { useState } from 'react';
import { NavBar, Filter, ShowCase, Footer } from '../Components';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import OneProduct from '../Components/OneProduct';
import Typography from '@material-ui/core/Typography';
import { useGlobalProductsContext } from '../Contexts/Product_Context';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    nav: {
        // position: 'sticky',
        // top: '0',
        width: '100%',
        zIndex: '2',
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    top: {
        height: '5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
    },
    sortContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '20%',
    },
    leftBar: {
        position: 'sticky',
        top: '0',
        width: '18vw',
        height: '100vh',
        // marginTop: '13.5vh',
    },
    right: {
        width: '82vw',
        position: 'relative',
        // left: '18vw',
        // marginTop: '13.5vh',
    },
    show: {
        width: '100%',
    },
    loader: {
        width: '100%',
        marginTop: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayProducts: {
        marginLeft: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 33.33%)',
        gap: '15px',
    },

    '@media (max-width: 900px)': {
        root: {
            flexDirection: 'column',
        },
        leftBar: {
            width: '100vw',
            height: '50vh',
            zIndex: '1',
            position: 'relative',
        },
        right: {
            marginTop: '0',
            width: '100%',
        },
        show: {
            display: 'none',
        },
    },
    '@media (max-width: 992px)': {
        displayProducts: {
            gridTemplateColumns: 'repeat(2, 50%)',
        },
    },
    '@media (max-width: 552px)': {
        displayProducts: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
}));

function Products() {
    const classes = useStyles();
    const {
        filteredProducts,
        isLoading,
        curSortValue,
        handleSort,
        isFetchError,
    } = useGlobalProductsContext();

    return (
        <div>
            <div className={classes.nav}>
                <NavBar isShow={false} />
            </div>
            <div className={classes.root}>
                <div className={classes.leftBar}>
                    <Filter />
                </div>

                <div className={classes.right}>
                    <div className={classes.show}>
                        <ShowCase />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <Divider />
                    </div>

                    <div className={classes.top}>
                        <Typography variant='h6' color='textSecondary'>
                            {filteredProducts.length} Products found
                        </Typography>
                        <div className={classes.sortContainer}>
                            {/* <Typography
                                style={{ width: '40%' }}
                                variant='h7'
                                color='textSecondary'>
                                Sort By
                            </Typography> */}
                            <FormControl
                                variant='outlined'
                                style={{ width: '100%', marginBottom: '1rem' }}>
                                <InputLabel id='sort'>Sort</InputLabel>
                                <Select
                                    id='sort'
                                    label='Sort'
                                    variant='outlined'
                                    value={curSortValue}
                                    onChange={(e) =>
                                        handleSort(e.target.value)
                                    }>
                                    <MenuItem value='lowest'>
                                        Price (Lowest)
                                    </MenuItem>
                                    <MenuItem value='highest'>
                                        Price (Highest)
                                    </MenuItem>
                                    <MenuItem value='a'>Name (A - Z)</MenuItem>
                                    <MenuItem value='z'>Name (Z - A)</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    {/* container of product diplay */}

                    {isFetchError && (
                        <Alert severity='error'>
                            <AlertTitle>Server Issue</AlertTitle>
                            The Server failed to load data —{' '}
                            <strong>Please try again after few moments!</strong>
                        </Alert>
                    )}

                    {isLoading ? (
                        <div className={classes.loader}>
                            <CircularProgress color='secondary' size='5rem' />
                        </div>
                    ) : (
                        <div className={classes.displayProducts}>
                            {filteredProducts.map((cur, i) => {
                                return <OneProduct key={i} {...cur} />;
                            })}
                        </div>
                    )}

                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
