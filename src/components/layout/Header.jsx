import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    return (
        <>
            <header className="wp-block-template-part">
                <div className="guten-element guten-popup-builder guten-W4UBQz" data-trigger="click" data-anchor="search" data-close-overlay="true">
                    <div className={`guten-popup guten-popup-center guten-popup-side-space ${isSearchOpen ? 'show' : ''}`}>
                        <div className="guten-popup-overlay" onClick={() => setIsSearchOpen(false)}></div>
                        <div className="guten-popup-wrapper guten-popup-wrapper-center">
                            <div className="guten-popup-content">
                                <div className="guten-popup-close" style={{ cursor: 'pointer' }} onClick={() => setIsSearchOpen(false)}><i className="fas fa-times"></i></div>
                                <div className="guten-popup-container">
                                    <div className="guten-element guten-popup-content-inner above">
                                        <div className="guten-popup-content-wrapper">
                                            <div className="section-wrapper" data-id="TvP2Pr">
                                                <section className="wp-block-gutenverse-section guten-element guten-section guten-TvP2Pr animated  desktop-fadeInUp layout-fullwidth align-stretch">
                                                    <div className="guten-container guten-column-gap-default">
                                                        <div className="wp-block-gutenverse-column guten-element guten-column guten-cspggs">
                                                            <div className="guten-column-wrapper" data-id="cspggs">
                                                                <div className="guten-element guten-XgiZKu guten-search">
                                                                    <form className="gutenverse-search-form">
                                                                        <div className="search-input-container-outer">
                                                                            <div className="search-input-container"><input type="text" placeholder="Search..." name="s" className="gutenverse-search gutenverse-search-input" />
                                                                                <div className="close-icon"><i className="gtn gtn-x-line"></i></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="guten-search-button-wrapper">
                                                                            <div className="guten-element guten-button-wrapper guten-NrJRf2"><button className="guten-button guten-button-xs" type="submit"><i className="fa-lg gtn gtn-search11-light"></i><span></span></button></div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="guten-element guten-popup-content-inner bottom">
                                        <div className="guten-popup-content-wrapper"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="guten-element guten-popup-builder guten-LDtg6c" data-trigger="click" data-anchor="off-canvas" data-close-overlay="true">
                    <div className={`guten-popup guten-popup-right guten-popup-side-space ${isOffCanvasOpen ? 'show' : ''}`}>
                        <div className="guten-popup-overlay" onClick={() => setIsOffCanvasOpen(false)}></div>
                        <div className="guten-popup-wrapper guten-popup-wrapper-center">
                            <div className="guten-popup-content animated  fast desktop-slideInRight">
                                <div className="guten-popup-close" style={{ cursor: 'pointer' }} onClick={() => setIsOffCanvasOpen(false)}><i className="gtn gtn-x-line"></i></div>
                                <div className="guten-popup-container">
                                    <div className="guten-element guten-popup-content-inner above">
                                        <div className="guten-popup-content-wrapper">
                                            <div className="section-wrapper" data-id="bsxLTy">
                                                <section className="wp-block-gutenverse-section guten-element guten-section guten-bsxLTy layout-boxed align-middle">
                                                    <div className="guten-container guten-column-gap-no">
                                                        <div className="wp-block-gutenverse-column guten-element guten-column guten-kyJMhP">
                                                            <div className="guten-column-wrapper" data-id="kyJMhP">
                                                                <div className="guten-element guten-wrap-helper no-margin guten-6l5ON2">
                                                                    <div className="guten-inner-wrap" data-id="6l5ON2">
                                                                        <div className="wp-block-gutenverse-image guten-element guten-image guten-CVxKLU">
                                                                            <div className="guten-image-wrapper"><img fetchpriority="high" decoding="async" className="gutenverse-image-box-filled" src="/logo (4).png" height="188" width="800" /></div>
                                                                        </div>



                                                                        <div className="section-wrapper" data-id="BMO0M6">
                                                                            <section className="wp-block-gutenverse-section guten-element guten-section guten-BMO0M6 layout-fullwidth align-stretch">
                                                                                <div className="guten-container guten-column-gap-no">
                                                                                    <div className="wp-block-gutenverse-column guten-element guten-column guten-TKRXV5">
                                                                                        <div className="guten-column-wrapper" data-id="TKRXV5">
                                                                                            <h5 className="wp-block-gutenverse-heading guten-element guten-PuwwGd">Useful Link</h5>


                                                                                            <div className="guten-element guten-icon-list guten-nbPThU">
                                                                                                <div className=" list-wrapper ">
                                                                                                    <div className="guten-element guten-icon-list-item guten-SjjdpF">
                                                                                                        <div className="list-divider"></div><Link id="guten-SjjdpF" to="/about-us"><i className="fas fa-chevron-right"></i><span className="list-text ">About </span></Link></div>

                                                                                                    <div className="guten-element guten-icon-list-item guten-Gg0424">
                                                                                                        <div className="list-divider"></div><Link id="guten-Gg0424" to="/services"><i className="fas fa-chevron-right"></i><span className="list-text ">Services</span></Link></div>

                                                                                                    <div className="guten-element guten-icon-list-item guten-U4VPgR">
                                                                                                        <div className="list-divider"></div><Link id="guten-U4VPgR" to="/services"><i className="fas fa-chevron-right"></i><span className="list-text ">Pricing</span></Link></div>

                                                                                                    <div className="guten-element guten-icon-list-item guten-AIbFwM">
                                                                                                        <div className="list-divider"></div><Link id="guten-AIbFwM" to="/blog"><i className="fas fa-chevron-right"></i><span className="list-text ">Blog</span></Link></div>

                                                                                                    <div className="guten-element guten-icon-list-item guten-Hy7Oav">
                                                                                                        <div className="list-divider"></div><Link id="guten-Hy7Oav" to="/contact"><i className="fas fa-chevron-right"></i><span className="list-text ">Contact</span></Link></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>



                                                                                    <div className="wp-block-gutenverse-column guten-element guten-column guten-32ThVk">
                                                                                        <div className="guten-column-wrapper" data-id="32ThVk">
                                                                                            <h5 className="wp-block-gutenverse-heading guten-element guten-RS4MVH">Contact</h5>


                                                                                            <div className="guten-element guten-icon-list guten-upbbjA">
                                                                                                <div className=" list-wrapper ">
                                                                                                    <div className="guten-element guten-icon-list-item guten-glh03l">
                                                                                                        <div className="list-divider"></div><a id="guten-glh03l" href="tel:+19089550321"><i className="fas fa-phone-alt"></i><span className="list-text ">Call: +1-908-955-0321</span></a></div>

                                                                                                    <div className="guten-element guten-icon-list-item guten-krV6dn">
                                                                                                        <div className="list-divider"></div><a id="guten-krV6dn" href="#"><i className="fas fa-map-marker-alt"></i><span className="list-text ">Ariva Infotech, 330 Changebridge Road, Suite 101, Pine Brook, NJ-07058</span></a></div>

                                                                                                    <div className="guten-element guten-icon-list-item guten-eztPPG">
                                                                                                        <div className="list-divider"></div><a id="guten-eztPPG" href="mailto:info@arivainfotech.com"><i className="fas fa-envelope"></i><span className="list-text ">info@arivainfotech.com</span></a></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>



                                                                                    <div className="wp-block-gutenverse-column guten-element guten-column guten-RVgl6d">
                                                                                        <div className="guten-column-wrapper" data-id="RVgl6d">
                                                                                            <h5 className="wp-block-gutenverse-heading guten-element guten-k6ON7C">Social Media</h5>


                                                                                            <div className="guten-element guten-social-icons guten-RXnj1M circle horizontal fill">
                                                                                                <div className="guten-element guten-social-icon guten-c3zYKl facebook"><a id="guten-c3zYKl" href="#"><i className="gtn gtn-facebook-light"></i></a></div>

                                                                                                <div className="guten-element guten-social-icon guten-tklBxA twitter"><a id="guten-tklBxA" href="#"><i className="fab fa-x-twitter"></i></a></div>

                                                                                                <div className="guten-element guten-social-icon guten-RPexY3 instagram"><a id="guten-RPexY3" href="#"><i className="fab fa-instagram"></i></a></div>

                                                                                                <div className="guten-element guten-social-icon guten-Ky7Xmp youtube"><a id="guten-Ky7Xmp" href="#"><i className="gtn gtn-youtube-v-light"></i></a></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </section>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                                <div className="section-wrapper" data-id="Zh2JfC">
                                                                    <section className="wp-block-gutenverse-section guten-element guten-section guten-Zh2JfC layout-boxed align-stretch">
                                                                        <div className="guten-container guten-column-gap-no">
                                                                            <div className="wp-block-gutenverse-column guten-element guten-column guten-0sp8rx">
                                                                                <div className="guten-column-wrapper" data-id="0sp8rx">
                                                                                    <h5 className="wp-block-gutenverse-heading guten-element guten-hyywC8">Subscribe Our Newsletter</h5>
                                                                                </div>
                                                                            </div>



                                                                            <div className="wp-block-gutenverse-column guten-element guten-column guten-Pr6FJg">
                                                                                <div className="guten-column-wrapper" data-id="Pr6FJg">
                                                                                    <form className="guten-element guten-form-builder guten-hIp70M" data-form-id="785">
                                                                                        <div className="guten-element guten-wrap-helper no-margin guten-DSo4AT flex">
                                                                                            <div className="guten-inner-wrap" data-id="DSo4AT">
                                                                                                <div className="guten-element guten-form-input-email guten-form-input guten-input-position-top guten-wibuKB hide-label hide-helper">
                                                                                                    <div className="label-wrapper"></div>
                                                                                                    <div className="main-wrapper"><input data-validation="{&quot;type&quot;:&quot;email&quot;,&quot;required&quot;:false,&quot;validationType&quot;:&quot;none&quot;,&quot;validationWarning&quot;:&quot;Input Invalid&quot;}" placeholder="Enter your email" name="input-email" className="gutenverse-input gutenverse-input-email" type="email" />
                                                                                                        <div className="validation-error">Input Invalid</div>
                                                                                                    </div>
                                                                                                </div>



                                                                                                <div className="guten-element guten-button-wrapper guten-submit-wrapper guten-JYQE15">
                                                                                                    <div className="form-notification"></div><button className="guten-button gutenverse-input-submit guten-button-sm" type="submit"><span>Subscribe</span></button>
                                                                                                    <div className="gutenverse-input-submit-loader"><i className="fas fa-spinner fa-spin"></i></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="guten-element guten-popup-content-inner bottom">
                                        <div className="guten-popup-content-wrapper"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="section-wrapper guten-section-wrapper section-guten-liFRuO sticky-top" data-id="liFRuO">
                    <section className="wp-block-gutenverse-section guten-element guten-section guten-liFRuO layout-boxed align-stretch guten-sticky sticky-top">
                        <div className="guten-data">
                            <div data-var="stickyDataliFRuO" data-value="{&quot;sticky&quot;:{&quot;Desktop&quot;:true,&quot;Tablet&quot;:false},&quot;stickyShowOn&quot;:&quot;both&quot;,&quot;stickyPosition&quot;:&quot;top&quot;,&quot;stickyEase&quot;:&quot;power2.inOut&quot;,&quot;stickyDuration&quot;:0.25,&quot;topSticky&quot;:{&quot;Desktop&quot;:{&quot;point&quot;:&quot;0&quot;,&quot;unit&quot;:&quot;px&quot;},&quot;Tablet&quot;:{&quot;unit&quot;:&quot;px&quot;}},&quot;bottomSticky&quot;:{&quot;Desktop&quot;:{&quot;point&quot;:&quot;0&quot;,&quot;unit&quot;:&quot;px&quot;}}}"></div>
                        </div>
                        <div className="guten-container guten-column-gap-no">
                            <div className="wp-block-gutenverse-column guten-element guten-column guten-9I4DZd">
                                <div className="guten-column-wrapper" data-id="9I4DZd">
                                    <div className="wp-block-gutenverse-image guten-element guten-image guten-W0zRTr"><Link className="guten-image-wrapper" to="/"><img decoding="async" className="gutenverse-image-box-filled" src="/logo (4).png" height="188" width="800" alt="" /></Link></div>
                                </div>
                            </div>



                            <div className="wp-block-gutenverse-column guten-element guten-column guten-NKDRpm">
                                <div className="guten-column-wrapper" data-id="NKDRpm">
                                    <div id="guten-hV9rrC" className="guten-element guten-nav-menu nav-menu break-point-tablet submenu-click-title " data-item-indicator="gtn gtn-angle-down-solid" data-item-indicator-type="icon" data-item-indicator-svg="" data-close-on-click="1" aria-label="">
                                        <div className="gutenverse-hamburger-wrapper">
                                            <button className="gutenverse-hamburger-menu" aria-label="" onClick={(e) => { e.preventDefault(); setIsMenuOpen(!isMenuOpen); }}>
                                                <i aria-hidden="true" className="gtn gtn-bars-solid"></i>
                                            </button>
                                        </div>
                                        <div className={`guten-nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
                                        <div className={`gutenverse-menu-wrapper ${isMenuOpen ? 'active' : ''}`}>
                                            <div className="guten-popup-close mobile-menu-close" onClick={() => setIsMenuOpen(false)}><i className="gtn gtn-x-line"></i></div>
                                            <div className="gutenverse-menu-container">
                                                <ul id="menu-artifice-1" className="gutenverse-menu">
                                                    <li id="menu-item-51" className="menu-item-51  menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home"><Link to="/" aria-label="Home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                                                    <li id="menu-item-52" className="menu-item-52  menu-item menu-item-type-custom menu-item-object-custom"><Link to="/about-us" aria-label="About Us" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                                                    <li id="menu-item-53" className="menu-item-53  menu-item menu-item-type-custom menu-item-object-custom"><Link to="/services/" aria-label="Services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                                                    <li id="menu-item-54" className="menu-item-54  menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="/" aria-label="Pages">Pages</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-55" className="menu-item-55  menu-item menu-item-type-custom menu-item-object-custom"><Link to="/projects/" aria-label="Projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                                                            <li id="menu-item-56" className="menu-item-56  menu-item menu-item-type-custom menu-item-object-custom"><Link to="/faq/" aria-label="FAQ" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-57" className="menu-item-57  menu-item menu-item-type-custom menu-item-object-custom"><Link to="/blog/" aria-label="Blog">Blog</Link></li>
                                                    <li id="menu-item-58" className="menu-item-58  menu-item menu-item-type-custom menu-item-object-custom"><Link to="/contact/" aria-label="Contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="gutenverse-nav-identity-panel">
                                                    <div className="gutenverse-nav-site-title">
                                                        <Link aria-label="" to="/" className="gutenverse-nav-logo"><img decoding="async" loading="eager" src="/logo (4).png" alt="Ariva Infotech - AI & Robotics" width="800" height="188" /></Link>
                                                    </div>
                                                    <button className="gutenverse-close-menu" aria-label=""><i aria-hidden="true" className="gtn gtn-x-line"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="wp-block-gutenverse-column guten-element guten-column guten-Y3M6UW hide-tablet hide-mobile">
                                <div className="guten-column-wrapper" data-id="Y3M6UW">
                                    <div className="wp-block-gutenverse-icon guten-element guten-HcCS8m guten-icon hide-tablet hide-mobile"><a className="guten-icon-wrapper rounded stacked" href="#search" onClick={(e) => { e.preventDefault(); setIsSearchOpen(true); }}><i className="gtn gtn-search11-light"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </header>
        </>
    );
}
