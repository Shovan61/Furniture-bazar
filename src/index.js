import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductProvider } from './Contexts/Product_Context';
import { SingleProductProvider } from './Contexts/SinglePrContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain='dev-fjq3od11.us.auth0.com'
            clientId='8xQDocYjc5Fo3NrLDTJUt2ZotpvCbtSi'
            redirectUri={window.location.origin}
            cacheLocation='localstorage'>
            <ProductProvider>
                <SingleProductProvider>
                    <Router>
                        <App />
                    </Router>
                </SingleProductProvider>
            </ProductProvider>
        </Auth0Provider>
    </React.StrictMode>,

    document.getElementById('root')
);
