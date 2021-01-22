import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-two';

// import Services & Actions
import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

// import Slider Settings
import { featuredSlider } from "../settings";

// import Data
import _data from '../../mock_data/data';

import '../../css/shoes-collection.css'

function FeaturedCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;
    products = products.slice( 0, 50 );

    return (

        <div className="container">
                <div className="heading-left title-desta">
                    <h2 className="title"> Productos arneces</h2>
                </div>

                <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="row">
                    <div className="col-lg-12 top-margin-products">
                        { _data.category.map( ( cat, index ) =>
                            <TabPanel key={ index }>
                                <OwlCarousel adClass="owl-simple carousel-euqal-height carousel-with-shadow" carouselOptions={ featuredSlider }>
                                    { getProductsByCategory( getProductsByCategory( products, cat ), 'Clothing' ).map( ( item, index ) =>
                                        <ProductNine product={ item }
                                            adClass="text-center product-7"
                                            key={ index }
                                            onAddToCart={ addToCart }
                                            onToggleWishlist={ toggleWishlist }
                                            showQuickView={ showQuickViewModal }
                                        />
                                    ) }
                                </OwlCarousel>
                            </TabPanel>
                        ) }
                        </div>
                    </div>
                
                </Tabs>

                <div className="heading-left title-desta">
                    <h2 className="title"> Productos Lencerías</h2>
                </div>
                <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="row">
                    <div className="col-lg-12 top-margin-products">
                        { _data.category.map( ( cat, index ) =>
                            <TabPanel key={ index }>
                                <OwlCarousel adClass="owl-simple carousel-euqal-height carousel-with-shadow" carouselOptions={ featuredSlider }>
                                    { getProductsByCategory( getProductsByCategory( products, cat ), 'Shoes' ).map( ( item, index ) =>
                                        <ProductNine product={ item }
                                            adClass="text-center product-7"
                                            key={ index }
                                            onAddToCart={ addToCart }
                                            onToggleWishlist={ toggleWishlist }
                                            showQuickView={ showQuickViewModal }
                                        />
                                    ) }
                                </OwlCarousel>
                            </TabPanel>
                        ) }
                        </div>
                    </div>
                
                </Tabs>
        </div>
        
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( FeaturedCollection );