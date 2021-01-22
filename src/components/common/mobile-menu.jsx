import React from 'react';
import { Link } from 'react-router-dom';

import MobileMainNav from './partials/mobile-nav';

export default function MobileMenu ( props ) {
    const { adClass } = props;

    return (
        <div className={ `mobile-menu-container ${adClass}` }>
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close"><i className="icon-close"></i></span>


                <nav className="mobile-nav">
                    <MobileMainNav />
                </nav>

                <div className="social-icons">
                    <Link to="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></Link>
                    <Link to="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></Link>
                </div>
            </div>
        </div>
    )
}