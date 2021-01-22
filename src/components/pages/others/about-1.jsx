import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';


// import Utils
import { mainSlider5 } from '../../settings';

import _data from '../../../mock_data/data.json';

import '../../../css/about.css'

function AboutOne () {
    useEffect( () => {
        document.querySelector( ".footer-middle" ) && document.querySelector( ".footer-middle" ).classList.add( "border-0" );
    } )

    return (
        <div className="main">
            <Helmet>
                <title>Molla React Ecommerce - About Page</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - About Page</h1>

            <Breadcrumb title="About Us" parent1={ [ "Pages", "pages/about" ] } adClass="border-0 mb-0" />

            <div className="container">
                <div className="page-header page-header-big text-center" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about-header-bg.jpg)` } }>
                    <h1 className="page-title text-white">About us<span className="text-white">Who we are</span></h1>
                </div>
            </div>

            <div className="page-content pb-0">

                <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8 about-pre-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-3 mb-lg-0">
                                <h2 className="title">Who We Are</h2>
                                <p className="lead text-primary mb-3">Pellentesque odio nisi, euismod pharetra a ultricies <br />in diam. Sed arcu. Cras consequat</p>
                                <p className="mb-2">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. </p>

                               
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-images">
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/about/img-1.jpg` } alt="" className="about-img-front" />
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/about/img-2.jpg` } alt="" className="about-img-back" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              

            </div>
        </div>
    )
}

export default React.memo( AboutOne );