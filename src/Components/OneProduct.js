import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { priceFixer } from '../helper';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '350px',
        width: '280px',
        cursor: 'pointer',
        position: 'relative',
        transition: 'box-shadow 0.4s ease-in-out',
        '&:hover img': {
            opacity: '0.5',
        },
        '&:hover svg': {
            display: 'block',
        },
        '&:hover': {
            boxShadow: '2px 2px 9px 0px rgba(0,0,0,0.75)',
        },
    },
    bottom: {
        padding: '1rem',
        height: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        transition: 'all 0.2s ease-in-out',
    },
    icon: {
        transition: 'all 0.2s ease-in-out',
        position: 'absolute',
        top: '7.5rem',
        left: '8rem',
        display: 'none',
    },
}));

function OneProduct(props) {
    const classes = useStyles();
    let history = useHistory();
    const { name, price, image, id } = props;

    const goToPage = () => {
        history.push(`/products/${id}`);
    };

    return (
        <Card className={classes.root} onClick={goToPage}>
            <VisibilityIcon className={classes.icon} />
            <img
                className={classes.img}
                height='75%'
                width='100%'
                src={image}
                alt='img'
            />

            <div className={classes.bottom}>
                <Typography color='textSecondary'>{name}</Typography>
                <Typography color='secondary'>{priceFixer(price)}</Typography>
            </div>
        </Card>
    );
}

export default OneProduct;
