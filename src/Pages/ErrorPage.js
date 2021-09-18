import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import warning from '../images/NicePng_warning-symbol-png_1358116.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        padding: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
}));

function ErrorPage() {
    let history = useHistory();
    const classes = useStyles();

    const gotohome = () => {
        history.push('/');
    };

    return (
        <div className={classes.root}>
            <img height='400px' width='auto' src={warning} alt='warning' />
            <Typography
                variant='h3'
                color='secondary'
                style={{ marginBottom: '3rem', marginTop: '2rem' }}>
                Page Not Found
            </Typography>
            <Button variant='contained' color='secondary' onClick={gotohome}>
                Go To Home
            </Button>
        </div>
    );
}

export default ErrorPage;
