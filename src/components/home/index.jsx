import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import QuickView from '../features/product/common/quickview';
import ServiceBox from '../features/service';

// import Home Components.
import IntroSlide from './intro-slide';
import Banner from './banner';
import NewCollection from './new-collection';
import CTA from './cta-section';
import ShoesCollection from './shoes-collection'

// import Slider Settings
import { brandSlider, introSlider } from '../settings';

// import Data and Style.
import _data from '../../mock_data/data.json';
import style from './style.scss';
import ProductService from "../../api/ProducService";

export default function HomePage () {

    const [info, setInfo] = useState(
        [
            {
                title: '',
                subtitle: '',
                img: '',
                width: "575",
                height: "300"
            },
            {
                title: '',
                subtitle: '',
                img: '',
                width: "575",
                height: "300"
            },
        ]
    );



    useEffect( () => {
        document.getElementById( "menu-home" ).classList.add( "active" );

        style.use();

        return ( () => {
            document.getElementById( "menu-home" ).classList.remove( "active" );
            style.unuse();
        } )
    }, [] )

    useEffect(() => {
        ProductService.getCategoryGenero().then(res => {
            let resp = res[0];
            setInfo([
                {
                    title: resp.Titulo1_Hombres,
                    subtitle: resp.Titulo2_Hombres,
                    img: resp.Imagen_Hombres[0].url,
                    width: "575",
                    height: "300"
                },
                {
                    title: resp.Titulo1_Mujeres,
                    subtitle: resp.Titulo2_Mujeres,
                    img: resp.Imagen_mujeres[0].url,
                    width: "575",
                    height: "300"
                }
            ])
        })
    }, []);

    return (
        <>
            <Helmet>
                <title> Eros Boutique erótica | Tienda online erótica</title>
            </Helmet>

            <h1 className="d-none">Eros Boutique erótica | Tienda online erótica</h1>

            <div className="main">
                <div className="intro-slider-container">
                    <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider } >
                        {
                            _data.introBanners.map( ( item, index ) =>
                                <IntroSlide data={ item } key={ `intro_${index}` } />
                            )
                        }
                    </OwlCarousel>
                </div>

               
                <div className="pt-2 pb-3">
                    <div className="container">
                        <div className="row">
                            {
                                info.map( ( item, index ) => {
                                    return (<div className="col-sm-6" key={index}>
                                        <Banner banner={item}/>
                                    </div>)
                                })
                            }
                        </div>
                        <hr className="mt-0 mb-0" />
                    </div>
                </div>

                <div className="container featured mt-4 pb-2">
                    <ShoesCollection />
                </div>


                <div className="mb-5"></div>

                

                {/*<DealCollection />*/}

                <div className="pt-4 pb-3" style={ { backgroundColor: "#1a0a0f" } }>
                    <ServiceBox background="dark" />
                </div>

                <div className="mb-6"></div>

                <NewCollection />

                <div className="pb-3">
                    

                    <div className="mb-5 mb-lg-7"></div>

                    <div className="container newsletter-section">
                        <div className="row">
                            <div className="col-lg-6 banner-overlay-div">
                                <Banner banner={ _data.banner[ 2 ] } />
                            </div>

                            <div className="col-lg-6 d-flex align-items-stretch subscribe-div">
                                <CTA />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-2"></div>

            </div>

            <NewsletterModal />

            <QuickView />
        </>
    );
}
