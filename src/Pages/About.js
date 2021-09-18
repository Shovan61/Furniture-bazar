import React from 'react';
import { NavBar, Footer } from '../Components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import image from '../images/furniture-21954.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    footer: {
        marginTop: 'auto',
    },
    container: {
        marginTop: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: '-3rem',
    },
    left: {
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
    },
    right: {
        width: '40%',
        height: '100%',
    },
    '@media (max-width: 900px)': {
        container: {
            flexDirection: 'column',
        },
        right: {
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    '@media (max-width: 750px)': {},
    '@media (max-width: 600px)': {},
}));

function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar isShow={false} />

            <div className={classes.container}>
                <div className={classes.left}>
                    <Typography
                        variant='h4'
                        color='textSecondary'
                        style={{ marginBottom: '3rem' }}>
                        About Us
                    </Typography>
                    <Typography
                        variant='subtitle'
                        style={{ lineHeight: '1.5rem' }}>
                        Furniture Bazar is an online furniture/home decor
                        retailer. We began as a regular Brick and Mortar
                        furniture store located in South Florida offering our
                        customers brand name furniture at affordable prices. Our
                        retail locations are proudly serving residents of South
                        Florida and The Bahamas. Home Furniture by Design
                        website is aimed to provide you with the latest in home
                        furnishings, home decor and accessories at a price you
                        can afford. We always carry products that will be the
                        focus of your home's décor with superior selection,
                        value, and quality.
                    </Typography>
                </div>
                <div className={classes.right}>
                    <img height='500px' width='400px' src={image} alt='img' />
                </div>
            </div>

            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default About;
