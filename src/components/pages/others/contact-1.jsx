import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../common/breadcrumb';
import '../../../css/contact.css'

function ContactOne () {
    return (
        <div className="main">
            <Helmet>
                <title>Molla React Ecommerce - Contact Page</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Contact Page</h1>

            <Breadcrumb title="Contact Us" parent1={ [ "pages", "pages/about" ] } adClass="border-0 mb-0" />

            <div className="container container-contact">

                <div className="page-header page-header-big text-center col-md-8" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/contact-header-bg.jpg)` } }>
                    <h1 className="page-title text-white">Contact us<span className="text-white">keep in touch with us</span></h1>
                </div>
                <div className="col-md-8 text-contact" >
                    <div>
                    <div className="col-md-8">
                                <div className="contact-box text-center">
                                    <h3>Office</h3>
                                    <address>1 New York Plaza, New York, <br />NY 10004, USA</address>
                                </div>
                    </div>

                    <div className="col-md-8">
                        <div className="contact-box text-center">
                                <h3>Start a Conversation</h3>
                                <div><Link to="mailto:#">info@Molla.com</Link></div>
                                <div><Link to="tel:#">+1 987-876-6543</Link>, <Link to="tel:#">+1 987-976-1234</Link></div>	
                        </div>		
                    </div>
                    <div className="col-md-8">
                        <div className="contact-box text-center">
                                        <h3>Social</h3>

                                        <div className="social-icons social-icons-color justify-content-center">
                                            <Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                                            <Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                                            <Link to="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                                            <Link to="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>
                                            <Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                                        </div>
                        </div>
                    </div>
                    </div>
                </div>
						
            </div>
            


        </div>
    )
}

export default React.memo( ContactOne );