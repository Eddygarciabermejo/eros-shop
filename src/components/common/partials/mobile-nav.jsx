import React from 'react';
import { Link } from 'react-router-dom';

import { mobileMenu } from '../../../utils';

function MobileMainNav ( props ) {
    const PUBLIC_URL = "/react/molla"

    React.useEffect( () => {
        mobileMenu();
    } )

    return (
        <nav className="mobile-nav">
            <ul className="mobile-menu">
                <li>
                    <Link to={ `${process.env.PUBLIC_URL}` }>
                        Inicio
                    </Link>
                </li>

                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` }>
                        Tienda
                    </Link>

                    <ul>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/category1/boxed` }>Category 1</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/category2/boxed` }>Category 2</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/category3/boxed` }>Categpry 3</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/category4/boxed` }>Category 4</Link></li>
                      
                    </ul>
                </li>

                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul">
                        Somos
                    </Link>
                </li>

                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>
                        Contacto
                    </Link>
                  
                </li>
            </ul>
        </nav>
    );
}

export default MobileMainNav;