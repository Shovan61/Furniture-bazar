import React, { useContext, useEffect, useState } from 'react';

const SingleProductContext = React.createContext();

const getFromLocalStrage = () => {
    const items = JSON.parse(window.localStorage.getItem('cart'));

    if (items) {
        return items;
    } else {
        return [];
    }
};

export const SingleProductProvider = ({ children }) => {
    const [state, setstate] = useState({
        cartItems: getFromLocalStrage(),
    });

    const AddToLocalStorage = (item) => {
        window.localStorage.setItem('cart', JSON.stringify(item));
    };

    useEffect(() => {
        AddToLocalStorage(state.cartItems);
    }, [state.cartItems]);

    const handleProduct = (product) => {
        setstate((pre) => {
            return { cartItems: [...pre.cartItems, product] };
        });
    };

    const updateProduct = (newProducts) => {
        setstate((prev) => {
            return { ...prev, cartItems: newProducts };
        });
    };

    const updateQuantity = (id, newQuantity) => {
        setstate((prev) => {
            return {
                ...prev,
                cartItems: prev.cartItems.map((curObj) => {
                    if (curObj.id === id) {
                        return { ...curObj, qntity: newQuantity };
                    } else {
                        return curObj;
                    }
                }),
            };
        });
    };

    const deleteItem = (id) => {
        setstate((prev) => {
            return {
                ...prev,
                cartItems: prev.cartItems.filter((curObj) => curObj.id !== id),
            };
        });
    };

    return (
        <SingleProductContext.Provider
            value={{
                cartItems: state.cartItems,
                handleProduct,
                updateProduct,
                updateQuantity,
                deleteItem,
            }}>
            {children}
        </SingleProductContext.Provider>
    );
};

export const useGlobalSingleProductContext = () => {
    return useContext(SingleProductContext);
};
