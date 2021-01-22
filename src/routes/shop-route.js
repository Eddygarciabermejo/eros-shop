import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import Sidebar from '../components/pages/shop/sidebar';
import NoSidebar from '../components/pages/shop/nosidebar';
import Category1 from '../components/pages/shop/category1';
import Category2 from '../components/pages/shop/category2';
import Category3 from '../components/pages/shop/category3';
import Category4 from '../components/pages/shop/category4';

import ProductCategory from '../components/pages/shop/product-category';
import MyAccount from '../components/pages/shop/dashboard';
import Wishlist from '../components/pages/shop/wishlist';
import Cart from '../components/pages/shop/cart';
import Checkout from '../components/pages/shop/checkout';
import Market from '../components/pages/shop/market';

export default function ShopRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/category/:grid` } component={ ProductCategory } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/sidebar/:grid` } component={ Sidebar } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/nosidebar/:grid` } component={ NoSidebar } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/category1/:grid` } component={ Category1 } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/category1/:grid` } component={ Category2 } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/category1/:grid` } component={ Category3 } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/category1/:grid` } component={ Category4 } />
             
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/market` } component={ Market } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/dashboard` } component={ MyAccount } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/wishlist` } component={ Wishlist } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/cart` } component={ Cart } />
                <Route exact path={ `${process.env.PUBLIC_URL}/shop/checkout` } component={ Checkout } />
            </Layout>
        </Switch>
    );
}