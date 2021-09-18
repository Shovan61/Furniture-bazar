import React from 'react';
import Card from '@material-ui/core/Card';
import { facility } from '../utils';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '9rem',
        marginTop: '9rem',
    },
    card: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25rem',
        width: '18rem',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            boxShadow: '1px -1px 23px 0px rgba(0,0,0,0.75)',
        },
    },

    '@media (max-width: 1100px)': {
        root: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 50%)',
            gap: '10px',
            justifyItems: 'center',
        },
    },

    '@media (max-width: 605px)': {
        root: {
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 100%)',
            gap: '20px',
            justifyItems: 'center',
        },
        card: {
            alignSelf: 'center',
        },
    },
}));

function Facilities() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {facility.map((cur) => {
                const { id, title, des, icon } = cur;
                return (
                    <Card className={classes.card} key={id}>
                        <IconButton
                            aria-label='delete'
                            style={{
                                backgroundColor: '#e6e6e6',
                                marginBottom: '2rem',
                            }}
                            size='large'>
                            <img src={icon} alt='icon' />
                        </IconButton>
                        <Typography variant='h6' gutterBottom>
                            {title}
                        </Typography>
                        <Typography
                            style={{
                                textAlign: 'center',
                                marginTop: '3rem',
                            }}
                            variant='subtitle'
                            gutterBottom>
                            {des}
                        </Typography>
                    </Card>
                );
            })}
        </div>
    );
}

export default Facilities;
