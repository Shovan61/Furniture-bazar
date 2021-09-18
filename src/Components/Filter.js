import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {
    removeDuplicates,
    removeCompanyDuplicates,
    removeDuplicateColors,
    calcHighestPrice,
} from '../helper';
import './Filter.css';
import { useGlobalProductsContext } from '../Contexts/Product_Context';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
    },
    search: {
        marginBottom: '0.5rem',
    },
    spanContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    category: {
        marginBottom: '0.5rem',
    },
    categoryText: {
        marginBottom: '0.5rem',
    },
    company: {
        marginBottom: '0.5rem',
    },
    colorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginRight: '1.5rem',
        marginBottom: '1rem',
    },
    colorbox: {
        cursor: 'pointer',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
    },
    price: {
        marginTop: '0.5rem',
    },
    check: {
        marginTop: '0.5rem',
    },
    btn: {
        marginTop: '1rem',
    },
    '@media (max-width: 900px)': {
        bottom: {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
        },
        categoryText: {
            marginBottom: '1.4rem',
        },
        btn: {
            marginTop: '3.3rem',
        },
        search: {
            width: '100%',
        },
    },
}));

function Filter() {
    const classes = useStyles();
    const {
        products,
        curItemIndex,
        curSelectVal,
        curColorValue,
        handleSelect,
        handleCategory,
        handleColor,
        isLoading,
        filterBySearch,
        handlePrice,
        price,
        isChecked,
        handleCheck,
        curSearch,
        handleSearch,
        clearFilters,
    } = useGlobalProductsContext();

    const CatArr = removeDuplicates(products);
    const companyArr = removeCompanyDuplicates(products);
    const colorArr = removeDuplicateColors(products);

    const handleSearchBar = (val) => {
        handleSearch(val);
    };

    const handleSliderChange = (event, newValue) => {
        handlePrice(newValue);
    };

    const handleCheckBox = (e) => {
        handleCheck();
    };

    return (
        <Card className={classes.root}>
            <div className={classes.search}>
                <TextField
                    style={{ width: '100%' }}
                    id='outlined-basic'
                    label='Search'
                    variant='outlined'
                    value={curSearch}
                    onChange={(e) => handleSearchBar(e.target.value)}
                />
            </div>
            <Divider />
            <div className={classes.bottom}>
                <div className={classes.category}>
                    <Typography
                        className={classes.categoryText}
                        variant='h6'
                        component='h6'
                        gutterBottom>
                        Category
                    </Typography>
                    <div className={classes.spanContainer}>
                        {/* <span className={`filter-span`}>ALL</span> */}
                        {CatArr.map((cur, i) => {
                            return (
                                <span
                                    className={`filter-span ${
                                        curItemIndex === i ? 'active-span' : ''
                                    }`}
                                    onClick={() => handleCategory(i, cur)}>
                                    {cur}
                                </span>
                            );
                        })}
                    </div>
                    <Divider />
                </div>
                <div className={classes.companyOthers}>
                    <div className={classes.company}>
                        <Typography
                            style={{ marginBottom: '1rem' }}
                            variant='h6'
                            component='h6'
                            gutterBottom>
                            Company
                        </Typography>
                        {/* <InputLabel id='company'>Company</InputLabel> */}
                        <Select
                            style={{ marginBottom: '1rem' }}
                            value={curSelectVal}
                            onChange={(e) => handleSelect(e.target.value)}>
                            {companyArr.map((cur, i) => (
                                <MenuItem key={i} value={cur}>
                                    {cur}
                                </MenuItem>
                            ))}
                        </Select>

                        <Divider />
                    </div>

                    <div className={classes.colors}>
                        <Typography
                            style={{ marginBottom: '1rem' }}
                            variant='h6'
                            component='h6'
                            gutterBottom>
                            Colors
                        </Typography>

                        <div className={classes.colorContainer}>
                            <span
                                style={{
                                    color:
                                        curColorValue === 'All'
                                            ? 'red'
                                            : '#777',
                                    cursor: 'pointer',
                                    fontWeight:
                                        curColorValue === 'All'
                                            ? 'bold'
                                            : 'normal',
                                }}
                                onClick={() => handleColor('All')}>
                                All
                            </span>
                            {colorArr.map((cur, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={classes.colorbox}
                                        style={{
                                            backgroundColor: cur,
                                            opacity:
                                                curColorValue === cur
                                                    ? '1'
                                                    : '0.5',
                                        }}
                                        onClick={() => handleColor(cur)}>
                                        {curColorValue === cur ? (
                                            <CheckIcon
                                                style={{
                                                    color: 'white',
                                                    fontSize: '1.2rem',
                                                }}
                                            />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <Divider />
                        <div className={classes.price}>
                            <Typography
                                style={{ marginBottom: '1rem' }}
                                variant='h6'
                                component='h6'
                                gutterBottom>
                                Price
                            </Typography>
                            <span>${price}</span>

                            <div className={classes.slider}>
                                <Slider
                                    key={`slider-${calcHighestPrice(products)}`}
                                    color='secondary'
                                    step={1}
                                    min={0}
                                    max={calcHighestPrice(products)}
                                    defaultValue={calcHighestPrice(products)}
                                    onChange={handleSliderChange}
                                    aria-labelledby='input-slider'
                                />
                            </div>
                        </div>

                        <div className={classes.check}>
                            <span>Free Shipping</span>
                            <Checkbox
                                checked={isChecked}
                                onChange={handleCheckBox}
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                            />
                        </div>
                        <Divider />
                    </div>
                </div>
                <Button
                    className={classes.btn}
                    variant='contained'
                    color='secondary'
                    onClick={clearFilters}>
                    Clear Filters
                </Button>
            </div>
        </Card>
    );
}

export default Filter;
