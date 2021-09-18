import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import img from '../images//armchair-256.ico';
import Grid from '@material-ui/core/Grid';
import googleplay from '../images/Google_Play-Badge-Logo.wine.svg';
import applestore from '../images/App_Store_(iOS)-Badge-Logo.wine.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '45vh',
        backgroundColor: 'rgb(2, 2, 54)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 25%)',
        // gap: '0.2rem',
        paddingTop: '3rem',
        borderRadius: '5px',
        marginTop: '20vh',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // one: {
    //     height: '100%',
    //     // border: '1px solid white',
    // },
    logo: {
        height: '40px',
        width: '40px',
        marginTop: '10px',
        borderRadius: '50%',
    },

    store: {
        marginLeft: '0.5rem',
        marginTop: '1rem',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s ease-in',
        '& span': {
            marginBottom: '1rem',
            // cursor: 'pointer',
        },
    },

    two: {
        marginTop: '0.5rem',
        marginLeft: '4rem',
    },
    three: {
        marginTop: '0.5rem',
    },
    four: {
        // marginTop: '0.5rem',
    },

    '@media (max-width: 1147px)': {
        one: {
            width: '70%',
        },
        three: {
            marginLeft: '2rem',
        },

        root: {
            gridTemplateColumns: 'repeat(2, 50%)',
            height: '80vh',
        },
    },
    footerSpan: {
        cursor: 'pointer',
        color: 'white',
        transition: 'color 0.2s ease-in',
        '&:hover': {
            color: 'red',
        },
    },
    '@media (max-width: 550px)': {
        one: {
            width: '100%',
        },
        three: {
            display: 'none',
        },
        two: {
            display: 'none',
        },
        three: {
            display: 'none',
        },

        root: {
            gridTemplateColumns: 'repeat(1, 100%)',
            height: '45vh',
        },
    },
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* one */}
            {/* <Grid container spacing={3}>
                <Grid item xs={3}> */}
            <div className={classes.one}>
                <div className={classes.logoContainer}>
                    <img src={img} className={classes.logo} />
                    <Typography
                        variant='subtitle'
                        style={{
                            color: 'white',
                            marginBottom: '1rem',
                        }}>
                        Furniture Bazar
                    </Typography>
                    <Typography
                        variant='caption'
                        style={{
                            color: 'white',
                            marginLeft: '2rem',
                            cursor: 'copy',
                        }}>
                        Each piece [of wood] is unique, so we have to pay
                        attention to it, and I certainly try to read each piece.
                        Like people, it’s flaws are what make it interesting.
                    </Typography>
                </div>
                <div className={classes.store}>
                    <div className={classes.img1}>
                        <img
                            height='110px'
                            width='auto'
                            src={googleplay}
                            alt=''
                        />
                    </div>

                    <div style={{ position: 'relative', right: '2rem' }}>
                        <img
                            height='110px'
                            width='auto'
                            src={applestore}
                            alt=''
                        />
                    </div>
                </div>
            </div>
            {/* </Grid> */}

            {/* two */}
            {/* <Grid item xs={3}> */}
            <div className={classes.two}>
                <Typography
                    variant='h5'
                    style={{
                        color: 'white',
                        marginBottom: '3rem',
                    }}>
                    About Us
                </Typography>
                <div className={classes.list}>
                    <span className={classes.footerSpan}>Careers</span>
                    <span className={classes.footerSpan}>Our Stores</span>
                    <span className={classes.footerSpan}>Our Cares</span>
                    <span className={classes.footerSpan}>
                        Terms & Conditions
                    </span>
                    <span className={classes.footerSpan}>Privacy Policy</span>
                </div>
            </div>
            {/* </Grid> */}

            {/* Three */}
            {/* <Grid item xs={3}> */}
            <div className={classes.three}>
                <Typography
                    variant='h5'
                    style={{
                        color: 'white',
                        marginBottom: '3rem',
                    }}>
                    Customer Care
                </Typography>
                <div className={classes.list}>
                    <span className={classes.footerSpan}>Help Center</span>
                    <span className={classes.footerSpan}>How to Buy</span>
                    <span className={classes.footerSpan}>Track Your Order</span>
                    <span className={classes.footerSpan}>
                        Corporate & Bulk Purchasing
                    </span>
                    <span className={classes.footerSpan}>
                        Returns & Refunds
                    </span>
                </div>
            </div>
            {/* </Grid> */}

            {/* Four */}
            {/* <Grid item xs={3}> */}
            <div className={classes.four}>
                <div className={classes.three}>
                    <Typography
                        variant='h5'
                        style={{
                            color: 'white',
                            marginBottom: '3rem',
                        }}>
                        Contact Us
                    </Typography>
                    <div className={classes.list}>
                        <span style={{ color: 'white', width: '70%' }}>
                            70 Washington Square South, New York, NY 10012,
                            United States
                        </span>
                        <span style={{ color: 'white' }}>
                            Email: uilib.help@gmail.com
                        </span>
                        <span className={classes.footerSpan}>
                            Track Your Order
                        </span>
                        <span style={{ color: 'white' }}>
                            Phone: +1 1123 456 780
                        </span>
                    </div>
                </div>
            </div>
            {/* </Grid>
            </Grid> */}
        </div>
    );
}

export default Footer;
