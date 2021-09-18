import img1 from './images/naomi-hebert-2dcYhvbHV-M-unsplash.jpg';
import img2 from './images/nathan-oakley-gj1dnc7yRG0-unsplash.jpg';
import img3 from './images/3360_SL CR.jpg';
import headphone from './images/headphones.svg';
import credit from './images/credit-card.svg';
import sheild from './images/shield.svg';
import deliver from './images/truck.svg';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

export const navigators = [
    {
        id: 1,
        name: 'Home',
        route: '/',
        icon: <HomeOutlinedIcon />,
    },

    {
        id: 2,
        name: 'About',
        route: '/about',
        icon: <InfoOutlinedIcon />,
    },

    {
        id: 3,
        name: 'Products',
        route: '/products',
        icon: <LocalMallOutlinedIcon />,
    },
];

export const showcase = [
    {
        id: 1,
        img: img1,
        text: '15% Off for this Product',
    },
    {
        id: 1,
        img: img2,
        text: '30% Off for this Product',
    },
    {
        id: 1,
        img: img3,
        text: '20% Off for this Product',
    },
];

export const facility = [
    {
        id: 1,
        title: 'Contrywide Delivery',
        des: 'We offer competitive prices on our 100 million plus product any range.',
        icon: deliver,
    },
    {
        id: 2,
        title: 'Safe Payment',
        des: 'We offer payment security with our reobust security process.',
        icon: credit,
    },
    {
        id: 3,
        title: 'Shop With Confidence',
        des: 'We offer product quality so you can shop with confidence',
        icon: sheild,
    },
    {
        id: 4,
        title: '24/7 Support',
        des: 'We offer 24/7 Support onine, via phone and non-virtually. Our customer care service is very sophisticated',
        icon: headphone,
    },
];

export const people = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'maria ferguson',
        title: 'Washington DC',
        quote: 'Excellent service and the new chairs have been well received by the users of our Village Hall.',
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'john doe',
        title: 'Texas',
        quote: 'Really content with the furniture. Very helpful staff reasonable prices & good quality. Thankyou',
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
        name: 'peter smith',
        title: 'California',
        quote: 'Service from start to finish was great, and good quality stools. Great friendly service.',
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'susan andersen',
        title: 'Los Angeles',
        quote: 'Great furniture, great prices, and really helpful staff..... The furniture is always of a good quality. ',
    },
];

export const catergoy = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Office',
    },
    {
        id: 3,
        name: 'Living Room',
    },
    {
        id: 4,
        name: 'Kitchen',
    },
    {
        id: 5,
        name: 'Bedroom',
    },
    {
        id: 6,
        name: 'Dining',
    },
    {
        id: 7,
        name: 'Kids',
    },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
