export const removeDuplicates = (items) => {
    let categories = items.map((cur) => {
        return cur.category;
    });

    let arr = ['all', ...new Set(categories)];

    const result = arr.map((curItem) => {
        return curItem[0].toUpperCase() + curItem.slice(1, curItem.length);
    });

    return result;
};

export const removeCompanyDuplicates = (items) => {
    let companies = items.map((cur) => {
        return cur.company;
    });

    let arr = ['all', ...new Set(companies)];

    const result = arr.map((curItem) => {
        return curItem[0].toUpperCase() + curItem.slice(1, curItem.length);
    });

    return result;
};

export const removeDuplicateColors = (items) => {
    let colors = items.map((cur) => {
        return cur.colors;
    });

    colors = colors.flat();

    let arr = [...new Set(colors)];

    return arr;
};

export const priceFixer = (ammount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(ammount / 100);
};

export const calcHighestPrice = (products) => {
    const prices = products.map((curObj) => curObj.price);
    const maxPrice = Math.max(...prices);
    return maxPrice / 100;
};

export const calcHelper = (ammount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(ammount);
};
