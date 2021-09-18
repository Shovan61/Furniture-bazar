import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
    HomePage,
    About,
    Products,
    SingleProduct,
    CartPage,
    CheckOut,
    PrivateRoute,
    ErrorPage,
} from './Pages';

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' render={() => <HomePage />}></Route>

                <Route exact path='/about' render={() => <About />}></Route>

                <Route
                    exact
                    path='/products'
                    render={() => <Products />}></Route>

                <Route
                    exact
                    path='/products/:id'
                    render={() => <SingleProduct />}></Route>

                <Route exact path='/cart' render={() => <CartPage />}></Route>
                <PrivateRoute exact path='/checkout'>
                    <CheckOut />
                </PrivateRoute>

                <Route path='*' render={() => <ErrorPage />}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
