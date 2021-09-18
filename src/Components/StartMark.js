import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
    },
}));

function StartMark(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {[...Array(5)].map((curArr, i) => {
                const number = i + 0.5;
                if (props.stars >= i + 1) {
                    return <StarIcon style={{ color: 'orange' }} key={i} />;
                } else if (props.stars >= number) {
                    return <StarHalfIcon style={{ color: 'orange' }} key={i} />;
                } else {
                    return (
                        <StarBorderIcon style={{ color: 'orange' }} key={i} />
                    );
                }
            })}
        </div>
    );
}

export default StartMark;
