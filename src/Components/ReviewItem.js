import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: theme.spacing(19),
        height: theme.spacing(19),
        border: '2px solid #999',
        boxShadow: '3px 2px 17px 0px rgba(0,0,0,0.75)',
    },
}));

function ReviewItem({ item }) {
    const classes = useStyles();
    const { name, id, image, title, quote } = item;
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <h1
                    style={{
                        fontSize: '33px',
                        color: '#666',
                        fontWeight: '300',
                        letterSpacing: '2px',
                        marginBottom: '2rem',
                    }}>
                    <span
                        style={{
                            color: '#cdac0a',
                            fontWeight: '1200',
                        }}>
                        /
                    </span>{' '}
                    Customer Reviews
                </h1>
            </div>

            {/* Avatar image */}

            <Avatar alt={name} src={image} className={classes.image} />
            <h3
                style={{
                    fontWeight: '500',
                    marginBottom: '4rem',
                    marginTop: '2rem',
                }}>
                {name}
            </h3>
            <p
                style={{
                    color: '#cdac0a',
                    marginBottom: '3rem',
                }}>
                {title}
            </p>

            <p
                style={{
                    marginBottom: '4rem',
                    fontSize: '18px',
                    color: '#777',
                    width: '50%',
                    textAlign: 'center',
                }}>
                {quote}
            </p>
        </div>
    );
}

export default ReviewItem;
