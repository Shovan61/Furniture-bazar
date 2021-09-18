import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useAuth0 } from '@auth0/auth0-react';
import Grid from '@material-ui/core/Grid';
import img from '../images//armchair-256.ico';
import { navigators } from '../utils';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useGlobalSingleProductContext } from '../Contexts/SinglePrContext';
import './NavBar.css';
import { Link, useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const drawerWidth = 240;

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        bottom: '0.7rem',
        height: '100%',
    },
    phone: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '1rem',
    },
    logoContainer: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    logo: {
        height: '40px',
        width: '40px',
        marginTop: '10px',
        borderRadius: '50%',
    },
    contact: {
        fontSize: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in',
        '&:hover': {
            color: 'red',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
        logoContainer: {
            width: '120%',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        height: 600,
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    textarea: {
        resize: 'none',
        width: '100%',
        height: '100%',
        marginTop: '1rem',
        marginBottom: '1rem',
        '&:focus': {
            borderColor: 'red',
            outLine: 'none !important',
        },
    },
}));

function NavBar(props) {
    const { isShow } = props;
    console.log(isShow);
    const classes = useStyles();
    let history = useHistory();
    const theme = useTheme();
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    const { cartItems } = useGlobalSingleProductContext();
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    console.log(user);

    useEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }

        window.addEventListener('resize', updateSize);

        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        if (size > 800) {
            setOpen(false);
        }
    }, [size]);

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const gotoPage = (page) => {
        history.push(page);
        setOpen(false);
    };

    const gotoCart = () => {
        history.push('/cart');
    };

    const body = (
        <Card style={modalStyle} className={classes.paper}>
            <form
                action='https://formspree.io/f/xvodlqke'
                method='POST'
                className={classes.form}>
                <Typography variant='body1' color='textSecondary'>
                    Your Email
                </Typography>
                {/* <input type="email" name="_replyto"> */}
                <input
                    type='email'
                    name='_replyto'
                    style={{ marginBottom: '2rem', width: '100%' }}
                />
                <Typography variant='body1' color='textSecondary'>
                    Your Message
                </Typography>
                <TextareaAutosize
                    name='message'
                    minRows={20}
                    fullWidth
                    className={classes.textarea}
                    aria-label='maximum height'
                />

                {/* <!-- your other form fields go here --> */}
                <Button
                    variant='outlined'
                    color='secondary'
                    type='submit'
                    style={{ width: '100%', marginTop: '1rem' }}>
                    Send
                </Button>
            </form>
        </Card>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                style={{
                    height: '4.5vh',
                    backgroundColor: 'rgb(2, 2, 54)',
                    borderBottom: '0.2px solid white',
                }}
                position='static'>
                <Toolbar className={classes.toolbar}>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item xs={3}>
                            <div className={classes.left}>
                                <PhoneOutlinedIcon
                                    style={{
                                        fontSize: '15px',
                                        marginRight: '5px',
                                    }}
                                />
                                <p style={{ fontSize: '12px' }}>092 56 0894</p>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div className={classes.left}>
                                <EmailOutlinedIcon
                                    style={{
                                        fontSize: '15px',
                                        marginRight: '5px',
                                    }}
                                />
                                <p style={{ fontSize: '12px' }}>
                                    support@furniturebazar.com
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={3} alignContent='flex-end'>
                            {isShow && (
                                <div className={classes.left}>
                                    <p
                                        className={classes.contact}
                                        onClick={handleModalOpen}>
                                        Contact Us
                                    </p>
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* <Divider /> */}
            {/* Down bar */}

            <AppBar
                position='static'
                style={{
                    backgroundColor: 'rgb(2, 2, 54)',

                    height: '9vh',
                    boxShadow: 'none',
                }}>
                <Toolbar
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div className={classes.logoContainer}>
                            <img src={img} className={classes.logo} />
                            <Typography
                                variant='subtitle'
                                style={{ color: 'white' }}>
                                Furniture Bazar
                            </Typography>
                        </div>
                    </Link>

                    <div className='navigatorContainer'>
                        {navigators.map((nav, i) => (
                            <div key={i} to={nav.route} className='navigator'>
                                <span
                                    style={{
                                        cursor: 'pointer',
                                        // color: 'white',
                                    }}
                                    onClick={() => gotoPage(nav.route)}>
                                    {nav.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className='cart-login'>
                        <IconButton
                            onClick={gotoCart}
                            size='medium'
                            aria-label='show cart items'
                            color='inherit'>
                            <Badge
                                badgeContent={cartItems.length}
                                color='secondary'>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        {user ? (
                            <IconButton
                                size='medium'
                                aria-label='login-logout'
                                color='inherit'
                                onClick={logout}>
                                <PersonAddDisabledIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                size='medium'
                                aria-label='login-logout'
                                color='inherit'
                                onClick={loginWithRedirect}>
                                <PersonAddIcon />
                            </IconButton>
                        )}
                    </div>

                    {/* Hamburger */}
                    <div className='hamburger-menu'>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='end'
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                {/* Drawer */}
                <Drawer
                    className='drawer'
                    variant='persistent'
                    anchor='right'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {navigators.map((nav, index) => (
                            <ListItem
                                button
                                key={nav.name}
                                onClick={() => gotoPage(nav.route)}>
                                <ListItemIcon>{nav.icon}</ListItemIcon>
                                <ListItemText primary={nav.name} />
                            </ListItem>
                        ))}
                    </List>
                    {/* <Divider /> */}
                </Drawer>
            </AppBar>
            <Modal
                className={classes.modal}
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'>
                {body}
            </Modal>
        </div>
    );
}

export default NavBar;
