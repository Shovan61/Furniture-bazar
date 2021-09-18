import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import googleplay from '../images/Google_Play-Badge-Logo.wine.svg';
import applestore from '../images/App_Store_(iOS)-Badge-Logo.wine.svg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(210, 63, 87)',
    },
    left: {
        marginLeft: '5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h1': {
            color: 'white',
            letterSpacing: '3px',
            marginBottom: '1.5rem',
        },
        '& p': {
            color: 'white',
            marginBottom: '2rem',
        },
    },
    right: {
        height: '100%',
    },
    store: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        marginTop: '1rem',
    },

    '@media (max-width: 980px)': {
        root: {
            flexDirection: 'column',
        },
        left: {
            width: '100%',
            marginRight: '4rem',
        },
        right: {
            '& img': {
                width: '100%',
            },
        },
    },
});

function ShowCaseItem({ id, text, img }) {
    const classes = useStyles();
    // const { id, text, img } = showcase[0];
    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <h1>{text}</h1>
                <p>To apply voucher be a premium member of our company.</p>
                <Button
                    variant='contained'
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                    }}>
                    Shop Now
                </Button>
                <div className={classes.store}>
                    <img
                        height='110px'
                        width='auto'
                        className={classes.image}
                        src={googleplay}
                        alt=''
                    />
                    <img height='110px' width='auto' src={applestore} alt='' />
                </div>
            </div>
            <div className={classes.right}>
                <img
                    style={{ marginBottom: '-5px' }}
                    height='310px'
                    width='500px'
                    src={img}
                    alt=''
                />
            </div>
        </div>
    );
}

export default ShowCaseItem;
