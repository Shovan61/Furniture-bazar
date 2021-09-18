import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { showcase } from '../utils';
import ShowCaseItem from './ShowCaseItem';

const useStyles = makeStyles({
    root: {
        width: '100%',
        '& h1': {
            fontWeight: '600',
            letterSpacing: '3px',
            marginBottom: '1.5rem',
        },
    },
});

function ShowCase() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <Carousel
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'rgba(0,0,0, 0.3)',
                            borderRadius: '50%',
                            opacity: 1,
                        },
                    }}
                    stopAutoPlayOnHover={true}
                    fullHeightHover={false}
                    timeout={500}
                    autoPlay={true}>
                    {showcase.map((cur) => (
                        <ShowCaseItem key={cur.id} {...cur} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default ShowCase;
