import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../css/footer.css'
import AdminService from "../../api/AdminService";

function Footer ( props ) {
    const { logoFooter = "assets/images/home/Logo-white.png" } = props;
    const { container = "container" } = props;

    const [footerData, setFooterData] = useState({
        title: '',
        phoneFooter: ''
    });
    const {title, phoneFooter} = footerData;

    useEffect(() => {
        AdminService.getFooters().then(resp => {
            setFooterData({
                title: resp[0].Texto_WhatsApp,
                phoneFooter: resp[0].Numero_WhatsApp
            })
        })
    }, [setFooterData]);

    return (
        <footer className="footer footer-2">
            <div className="footer-middle border-0">
                <div className={ container }>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="widget widget-about">
                                <img src={ process.env.PUBLIC_URL + '/' + logoFooter } className="footer-logo" alt="Molla Logo" width="82" height="25" />
                                <p> </p>

                                <div className="widget-about-info">
                                    <div className="row payaements ">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title textf title-footer widget-title">{title}</span>
                                            <Link className="textf " to="tel:123456789"> <i className="icon-whatsapp icon-redes icon-whatsapp-footer"></i> +1 {phoneFooter}</Link>
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title textf title-footer widget-title payament-m ">Payment Method</span>
                                            <figure className="footer-payments">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/payments.png` } alt="Payment methods" width="272" height="20" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title title-footer">Information</h4>

                                <ul className="widget-list textf">
                                    <li><Link to={ `${process.env.PUBLIC_URL}/about` }>About Molla</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>How to shop on Molla</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact us</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Log in</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title title-footer">Customer Service</h4>

                                <ul className="widget-list textf">
                                    <li><Link to="#">Payment Methods</Link></li>
                                    <li><Link to="#">Money-back guarantee!</Link></li>
                                    <li><Link to="#">Returns</Link></li>
                                    <li><Link to="#">Shipping</Link></li>
                                    <li><Link to="#">Terms and conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ container }>
                    <p className="footer-copyright textf">Eros Boutique { ( new Date() ).getFullYear() } | Todos los derechos reservados | Hecho con <i  className="icon-heart-o"></i> por
							<a href="https://www.ds2.com.co" target="_blank"> <span >DS2 Design</span></a> </p>
                   

                    <div className="social-icons social-icons-color">
                        <span className="social-label textf">Siguenos en nuestras redes sociales</span>
                        <a href="https://www.facebook.com" className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook" target="_blank"><i className="icon-facebook-f icon-redes"></i></a>
                        <a href="https://instagram.com" className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram" target="_blank"><i className="icon-instagram icon-redes"></i></a>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
