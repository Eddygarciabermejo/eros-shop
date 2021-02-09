import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// Common Header Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import LoginModal from '../features/modal/login-modal';
import RegisterModal from '../features/modal/register';
import { showModal } from '../../actions';

import '../../css/header.css'
import AdminService from "../../api/AdminService";

function Header ( props ) {


    const [socialMedia, setSocialMedia] = useState({
        facebook: '',
        instagram: '',
        phoneHeader: ''
    });
    const {facebook, instagram, phoneHeader} = socialMedia;

    const { container = "container",  showModal } = props;

    useEffect(() => {
        AdminService.getHeaders().then( resp => {
            let face = resp[0]['Facebook']
            let inst = resp[0]['Instagram']
            let phone = resp[0]['Numero_Telefonico']
            setSocialMedia({
                facebook: face,
                instagram: inst,
                phoneHeader: phone
            })
        })
    }, [setSocialMedia]);


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
                                    <li>
                                        <Link to="tel:#">
                                            <i className="icon-phone"></i>
                                            Call: +1 {phoneHeader}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="social-icons social-icons-color">
                            <a href={facebook} className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a href={instagram} className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
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
