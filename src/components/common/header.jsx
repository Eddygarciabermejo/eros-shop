import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import LoginModal from '../features/modal/login-modal';
import RegisterModal from '../features/modal/register';
import { showModal } from '../../actions';

import '../../css/header.css'
function Header ( props ) {
    const { container = "container",  showModal } = props;

    function openLoginModal ( e ) {
        showModal( 'login' );
        e.preventDefault();
    }

    function openLoginModalr ( e ) {
        showModal( 'register' );
        e.preventDefault();
    }
    return (
        <header className="header header-6">
            <div className="header-top">
                <div className={ container }>
                    <div className="header-left">
                        <ul className="top-menu top-link-menu d-none d-md-block">
                            <li>
                                <Link to="#">Links</Link>
                                <ul>
                                    <li><Link to="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="social-icons social-icons-color">
                            <a href="" className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a href="" className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                        </div>
                        <ul className="top-menu top-link-menu">
                            <li>
                                <Link to="#">Links</Link>
                                <ul>
                                    <li><Link to="#signin-modal" data-toggle="modal" onClick={ openLoginModal }><i className="icon-user"></i>Login</Link></li>
                                    <li><Link to="#signin-modal" data-toggle="modal" onClick={ openLoginModalr }><i className="icon-info-circle"></i>Registrate</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className={ container }>
                    
                    <div className="header-center">
                        <Link to={ `${process.env.PUBLIC_URL}` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/home/logo.png` } alt="Molla Logo" width={ 150 } height={ 80 } />
                        </Link>
                    </div>

                    <div className="header-right">
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header" style={{backgroundColor: "#5a1526"}}>
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <i className="la la-lightbulb-o"></i><p>Tienda<span className="highlight">&nbsp; online erótica</span></p>
                    </div>
                </div>
            </div>
            <LoginModal />
            <RegisterModal/>


        </header>
    );
}

function mapStateToProps ( state ) {
    return {
        isWishlist: state.wishlist.list
    }
}

export default connect( mapStateToProps, { showModal } )( Header );
