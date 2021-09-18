import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextAnimation from './TextAnimation';
import Card from '@material-ui/core/Card';
import heroSvg from '../images/undraw_Chilling_re_4iq9 (1).svg';
import heroImg from '../images/hero_image.png';
import { width } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '86.5vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '2rem',
    },
    title: {
        fontSize: '2.5rem',
        width: '70%',
        color: '#444',
        marginLeft: '5rem',
        letterSpacing: '3px',
    },
    img: {
        width: '40%',
        marginRight: '5rem',
        marginBottom: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
        root: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        },
        img: {
            width: '100%',
            '& img': {
                height: '350px',
                width: '350px',
                marginLeft: '5rem',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            width: '100%',
            textAlign: 'center',
            marginLeft: '0px',
            fontSize: '30px',
        },
    },
}));

function Hero() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div>
                {' '}
                <h1 className={classes.title}>
                    Finest Furnitures to buy with unique design made by premium{' '}
                    <TextAnimation /> wood
                </h1>{' '}
            </div>

            <div className={classes.img}>
                <img height='450px' width='450px' src={heroImg} alt='hero' />
            </div>
        </Card>
    );
}

export default Hero;
