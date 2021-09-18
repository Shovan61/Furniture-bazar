import React, { useContext, useEffect, useReducer } from 'react';
import { products_url } from '../utils';
import { calcHighestPrice } from '../helper';

const ProductContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'Set_Loader':
            return {
                ...state,
                isLoading: action.payload.isLoading,
                isFetchError: action.payload.isFetchError,
            };
        case 'Set_Products':
            return { ...state, allProducts: action.payload };
        case 'Set_Category':
            return {
                ...state,
                curItemIndex: action.payload.ind,
                curCategoy: action.payload.nameLowercase,
            };
        case 'Set_SelectVaue':
            return { ...state, curSelectVal: action.payload };
        case 'Set_Color':
            return { ...state, curColorValue: action.payload };
        case 'Set_FilterAll':
            return { ...state, filteredProducts: action.payload };
        case 'Filter_By_Search':
            return {
                ...state,
                filteredProducts: action.payload,
                curSelectVal: 'All',
                curColorValue: 'All',
                curCategoy: 'All',
                isChecked: false,
                curItemIndex: 0,
                price: calcHighestPrice(state.allProducts),
            };
        case 'Filter_By_category':
            return {
                ...state,
                filteredProducts: action.payload,
                curSelectVal: 'All',
                curColorValue: 'All',
                isChecked: false,
                curSearch: '',
                curSortValue: '',
                price: calcHighestPrice(state.allProducts),
            };
        case 'Set_Initial_Price':
            return { ...state, price: action.payload };
        case 'Set_New_Price':
            return { ...state, price: action.payload };
        case 'Set_Check':
            return { ...state, isChecked: action.payload };
        case 'Set_Search':
            return { ...state, curSearch: action.payload };
        case 'Set_Sort':
            return { ...state, curSortValue: action.payload };
        case 'Filter_By_Company':
            return {
                ...state,
                filteredProducts: action.payload,
                curColorValue: 'All',
                isChecked: false,
                curSearch: '',
                curItemIndex: 0,
                curCategoy: 'All',
                curSortValue: '',
                price: calcHighestPrice(state.allProducts),
            };
        case 'Filter_By_Color':
            return {
                ...state,
                filteredProducts: action.payload,
                isChecked: false,
                curSearch: '',
                curItemIndex: 0,
                curCategoy: 'All',
                curSelectVal: 'All',
                curSortValue: '',
                price: calcHighestPrice(state.allProducts),
            };
        case 'Filter_By_Price':
            return {
                ...state,
                filteredProducts: action.payload,
                curColorValue: 'All',
                isChecked: false,
                curSearch: '',
                curItemIndex: 0,
                curCategoy: 'All',
                curSortValue: '',
                curSelectVal: 'All',
            };

        case 'Filter_By_Shipping':
            return {
                ...state,
                filteredProducts: action.payload,
                curColorValue: 'All',
                curSearch: '',
                curItemIndex: 0,
                curCategoy: 'All',
                curSelectVal: 'All',
                curSortValue: '',
                price: calcHighestPrice(state.allProducts),
            };
        case 'Set_Clear':
            return {
                ...state,
                curColorValue: 'all',
                curSearch: '',
                curItemIndex: 0,
                curCategoy: 'all',
                curSelectVal: 'All',
                curSortValue: '',
                price: calcHighestPrice(state.allProducts),
                isChecked: false,
            };
        case 'Filter_By_Sort':
            return { ...state, filteredProducts: action.payload };
        default:
            throw new Error(`Can Not Find ${action.type}`);
    }
}

const initialState = {
    isLoading: true,
    allProducts: [],
    filteredProducts: [],
    price: 0,
    curItemIndex: 0,
    curCategoy: 'All',
    curSelectVal: 'All',
    curColorValue: 'All',
    isChecked: false,
    curSearch: '',
    curSortValue: '',
    isFetchError: false,
};

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // set Search
    useEffect(() => {
        filterBySearch(state.curSearch.toLowerCase());
    }, [state.curSearch]);

    //  set the price
    useEffect(() => {
        dispatch({
            type: 'Set_Initial_Price',
            payload: calcHighestPrice(state.allProducts),
        });
    }, [state.isLoading]);

    // to put data in filtered products
    useEffect(() => {
        dispatch({ type: 'Set_FilterAll', payload: state.allProducts });
    }, [state.allProducts]);

    // to filter Category
    useEffect(() => {
        filterBycategory();
    }, [state.curCategoy]);

    // to filter company
    useEffect(() => {
        filterByCompany();
    }, [state.curSelectVal]);

    // To Filter Color
    useEffect(() => {
        filterByColor();
    }, [state.curColorValue]);

    //  to filter Price
    useEffect(() => {
        filterByPrice();
    }, [state.price]);

    // to fetch
    useEffect(() => {
        getProducts();
    }, []);

    // to shipping
    useEffect(() => {
        filterByShipping();
    }, [state.isChecked]);

    // to Sorting
    useEffect(() => {
        filterBySorting();
    }, [state.curSortValue]);

    const getProducts = async () => {
        dispatch({
            type: 'Set_Loader',
            payload: { isLoading: true, isFetchError: false },
        });
        try {
            const response = await fetch(products_url);
            const productArr = await response.json();

            dispatch({ type: 'Set_Products', payload: productArr });
            dispatch({
                type: 'Set_Loader',
                payload: { isLoading: false, isFetchError: false },
            });
        } catch (error) {
            // throw new Error(
            //     `${error} error in fetching all products from products context`
            // );
            dispatch({
                type: 'Set_Loader',
                payload: { isLoading: false, isFetchError: true },
            });
        }
    };

    const handleCategory = (ind, name) => {
        const nameLowercase = name.toLowerCase();
        dispatch({ type: 'Set_Category', payload: { ind, nameLowercase } });
    };

    const handleSelect = (val) => {
        dispatch({ type: 'Set_SelectVaue', payload: val });
    };

    const handleColor = (color) => {
        dispatch({ type: 'Set_Color', payload: color });
    };

    const handlePrice = (ammount) => {
        dispatch({ type: 'Set_New_Price', payload: ammount });
    };

    const handleCheck = () => {
        dispatch({ type: 'Set_Check', payload: !state.isChecked });
    };

    const handleSearch = (item) => {
        dispatch({ type: 'Set_Search', payload: item });
    };

    const handleSort = (val) => {
        dispatch({ type: 'Set_Sort', payload: val });
    };

    const filterBySearch = (searchRes) => {
        const copyFiltered = [...state.allProducts];
        const filteredProducts = copyFiltered.filter((curName) => {
            return curName.name.includes(searchRes);
        });
        dispatch({ type: 'Filter_By_Search', payload: filteredProducts });
    };

    const filterBycategory = () => {
        let returnFilter = [...state.allProducts];
        if (state.curCategoy === 'all') {
            returnFilter = state.allProducts;
        } else {
            returnFilter = returnFilter.filter(
                (curObj) => curObj.category === state.curCategoy
            );
        }

        dispatch({ type: 'Filter_By_category', payload: returnFilter });
    };

    const filterByCompany = () => {
        let returnFilter = [...state.allProducts];
        if (state.curSelectVal.toLowerCase() === 'all') {
            returnFilter = state.allProducts;
        } else {
            returnFilter = returnFilter.filter(
                (curObj) => curObj.company === state.curSelectVal.toLowerCase()
            );
        }

        dispatch({ type: 'Filter_By_Company', payload: returnFilter });
    };

    const filterByColor = () => {
        let returnFilter = [...state.allProducts];
        if (state.curColorValue === 'All') {
            returnFilter = state.allProducts;
        } else {
            returnFilter = returnFilter.filter(
                (curObj) => curObj.colors.indexOf(state.curColorValue) !== -1
            );
        }

        dispatch({ type: 'Filter_By_Color', payload: returnFilter });
    };

    const filterByPrice = () => {
        let returnFilter = [...state.allProducts];
        returnFilter = returnFilter.filter(
            (curObj) => curObj.price / 100 <= state.price
        );

        dispatch({ type: 'Filter_By_Price', payload: returnFilter });
    };

    const filterByShipping = () => {
        let returnFilter = [...state.allProducts];

        if (state.isChecked === false) {
            returnFilter = state.allProducts;
        } else {
            returnFilter = returnFilter.filter(
                (curObj) => curObj.shipping === true
            );
        }

        dispatch({ type: 'Filter_By_Shipping', payload: returnFilter });
    };

    const filterBySorting = () => {
        let returnFilter = [...state.filteredProducts];
        if (state.curSortValue === 'lowest') {
            returnFilter = returnFilter.sort((a, b) => a.price - b.price);
        } else if (state.curSortValue === 'highest') {
            returnFilter = returnFilter.sort((a, b) => b.price - a.price);
        } else if (state.curSortValue === 'a') {
            returnFilter = returnFilter.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else if (state.curSortValue === 'z') {
            returnFilter = returnFilter.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        }

        dispatch({ type: 'Filter_By_Sort', payload: returnFilter });
    };

    const clearFilters = () => {
        dispatch({ type: 'Set_Clear' });
    };

    return (
        <ProductContext.Provider
            value={{
                products: state.allProducts,
                isLoading: state.isLoading,
                handleSelect,
                handleCategory,
                handleColor,
                curSelectVal: state.curSelectVal,
                curItemIndex: state.curItemIndex,
                curColorValue: state.curColorValue,
                filteredProducts: state.filteredProducts,
                filterBySearch,
                handlePrice,
                price: state.price,
                isChecked: state.isChecked,
                handleCheck,
                curSearch: state.curSearch,
                handleSearch,
                clearFilters,
                curSortValue: state.curSortValue,
                handleSort,
                isFetchError: state.isFetchError,
            }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useGlobalProductsContext = () => {
    return useContext(ProductContext);
};
