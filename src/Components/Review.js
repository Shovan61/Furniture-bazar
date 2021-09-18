import React from 'react';
import ReviewItem from './ReviewItem';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { people } from '../utils';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles({
    root: {
        height: '30vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '14rem',
        marginBottom: '25rem',
    },
});

function Review() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section>
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
                    timeout={600}
                    animation='slide'
                    autoPlay={true}
                    NextIcon={<NavigateNextIcon />}
                    PrevIcon={<NavigateBeforeIcon />}>
                    {people.map((item, i) => (
                        <ReviewItem key={i} item={item} />
                    ))}
                </Carousel>
            </section>
        </div>
    );
}

export default Review;
