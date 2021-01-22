import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import _data from '../../../mock_data/data';

import '../../../css/main-menu.css'

export default function MainMenu ( props ) {
    const [ path, setPath ] = useState( "" );
    const PUBLIC_URL = "/react/molla";

    useEffect( () => {
        setPath( window.location.href );
    } )

    function showAllDemos ( e ) {
        let demoItems = document.querySelectorAll( '.demo-item.hidden' );

        for ( let i = 0; i < demoItems.length; i++ ) {
            demoItems[ i ].classList.toggle( 'show' );
        }

        document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
        e.preventDefault();
    }

    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li className={ `megamenu-container` } id="menu-home">
                    <Link to={ `${process.env.PUBLIC_URL}` } className="sf-with-ul down-none">Inicio</Link>           
                </li>
                <li className={ path.indexOf( "shop" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` } className="sf-with-ul">Tienda</Link>

                    <div className="megamenu megamenu-md div-catgory">
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="menu-col">
                                    <div className="row">
                                        
                                        <div className="col-md-6">
                                            <div className="menu-title">Categorias</div>
                                            <ul>
                                                <li className={ path.indexOf( "shop/category1/boxed" ) > -1 ? "active" : '' }><Link  to={ `${process.env.PUBLIC_URL}/shop/category1/boxed` }><span>Category1</span></Link></li>
                                                <li className={ path.indexOf( "shop/category2/boxed" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/shop/category2/boxed` }><span>Category2</span></Link></li>
                                                <li className={ path.indexOf( "shop/category3/boxed" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/shop/category3/boxed` }><span>Category3</span></Link></li>
                                                <li className={ path.indexOf( "shop/category4/boxed" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/shop/category4/boxed` }><span>Category4</span></Link></li>
                                            </ul>
                                        </div>

                      

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="banner banner-overlay">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner banner-menu">
                                        <img src={ `${process.env.PUBLIC_URL}/assets/images/menu/banner-1.jpg` } alt="Banner" />

                                        <div className="banner-content banner-content-top">
                                            <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={ path.indexOf( "product/" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul down-none">Somos</Link>

                </li>
            
                <li className={ path.indexOf( "element" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/contact` } className="sf-with-ul down-none">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}