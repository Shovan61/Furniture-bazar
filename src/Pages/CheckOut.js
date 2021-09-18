import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavBar, Footer } from '../Components';
import Card from '@material-ui/core/Card';
import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    card: {
        padding: '1rem',
        marginTop: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '40vh',
        width: '70%',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginTop: '4rem',
    },
    left: {
        width: '45%',
    },

    right: {
        width: '45%',
    },
    '@media (max-width: 950px)': {
        card: {
            width: '90%',
        },
    },
}));
function CheckOut() {
    const classes = useStyles();
    const { user } = useAuth0();
    console.log(user);
    return (
        <div className={classes.root}>
            <NavBar isShow={false} />
            <Avatar
                alt={user.name}
                src={user.picture}
                className={classes.large}
            />
            <Typography
                variant='h6'
                color='textSecondary'
                style={{ marginTop: '1rem' }}>
                Welcome, {user.name}
            </Typography>
            <Card className={classes.card}>
                <div className={classes.left}>
                    <TextField
                        id='outlined-basic'
                        label='Full Name'
                        variant='outlined'
                        fullWidth
                        style={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        id='outlined-basic'
                        label='Email'
                        variant='outlined'
                        fullWidth
                        style={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        id='outlined-basic'
                        label='Phone Number'
                        variant='outlined'
                        type='number'
                        style={{ marginBottom: '1rem' }}
                        fullWidth
                    />
                </div>
                <div className={classes.right}>
                    <TextField
                        id='outlined-basic'
                        label='Card number'
                        variant='outlined'
                        type='number'
                        fullWidth
                        style={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        id='outlined-basic'
                        label='Name On Card'
                        variant='outlined'
                        fullWidth
                        style={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        id='outlined-basic'
                        label='MM/YY'
                        variant='outlined'
                        type='nmber'
                        style={{ marginBottom: '1rem' }}
                        fullWidth
                    />
                </div>
            </Card>
            <Button
                variant='contained'
                color='secondary'
                style={{ marginTop: '1.5rem' }}>
                Pay and checkout
            </Button>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default CheckOut;
