import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../trangchu/footer/Footer'
import './CoCauToChuc.css'
import Avt1 from './img/avt1.jpg'
import Avt2 from './img/avt2.jpg'
import Avt3 from './img/avt3.jpg'
import Avt4 from './img/avt4.jpg'
import AnhIntro from './img/intro.png'

function CoCauToChuc() {
    

    return (
        <div id="co-cau-to-chuc">
            <div className="breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
                        <li className="breadcrumb-item"><Link to="/co-cau-to-chuc" disabled>Về chúng tôi</Link></li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="title text-center">
                    <div class="heading">
                        <h3><span>About us</span></h3>
                        <div class="sub-heading">
                            <p> We have a history of the brands we work with. </p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Intro */}
                    <div class="intro">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="intro_image"><img src={AnhIntro} alt=""/></div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="intro_content">
                                        <div class="intro_title">we have the best tours</div>
                                        <p class="intro_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
                                        <div class="button intro_button"><div class="button_bcg"></div><Link href="#">explore now<span></span><span></span><span></span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Section about */}
                    <section class="section">
                        <div class="container">
                        <div class="row">
                            <div class="col-3">
                            <img src={Avt1} alt="" class="img-polaroid" />
                            <div class="roles">
                                <h5><strong>Baby Stewards Jr</strong></h5>
                                <p>
                                CEO - Founder
                                </p>
                                <ul class="social-profile">
                                    <li><Link href="#"><i class="fas fa-poo icon-32 icon-circled"></i></Link></li>
                                    <li><Link href="#"><i class="fas fa-poo icon-32 icon-circled"></i></Link></li>
                                    <li><Link href="#"><i class="fas fa-poo icon-32 icon-circled"></i></Link></li>
                                </ul>
                            </div>
                            </div>
                            <div class="col-3">
                            <img src={Avt2} alt="" class="img-polaroid" />
                            <div class="roles">
                                <h5><strong>Tommy Kreunichev</strong></h5>
                                <p>
                                Lead designer
                                </p>
                                <ul class="social-profile">
                                    <li><Link href="#"><i class="icon-facebook icon-32 icon-circled"></i></Link></li>
                                    <li><Link href="#"><i class="icon-twitter icon-32 icon-circled"></i></Link></li>
                                    <li><Link href="#"><i class="icon-Linkedin icon-32 icon-circled"></i></Link></li>
                                </ul>
                            </div>
                            </div>
                            <div class="col-3">
                            <img src={Avt3} alt="" class="img-polaroid" />
                            <div class="roles">
                                <h5><strong>Moriella Maccini</strong></h5>
                                <p>
                                Customer support
                                </p>
                                <ul class="social-profile">
                                    <li><Link href="#"><i class="icon-facebook icon-32 icon-circled"></i></Link></li>
                                    <li><Link href="#"><i class="icon-twitter icon-32 icon-circled"></i></Link></li>
                                    <li><Link href="#"><i class="icon-Linkedin icon-32 icon-circled"></i></Link></li>
                                </ul>
                            </div>
                            </div>
                            <div class="col-3">
                            <img src={Avt4} alt="" class="img-polaroid" />
                            <div class="roles">
                                <h5><strong>Brian James Scoothie</strong></h5>
                                <p>
                                Coffee maker
                                </p>
                                <ul class="social-profile">
                                    <li><Link href="#"><i class="icon-facebook icon-32 icon-circled"></i></Link></li>
                                    <li><Link href="#"><i class="icon-twitter icon-32 icon-circled"></i></Link></li>
                                    <li><Link href="#"><i class="icon-Linkedin icon-32 icon-circled"></i></Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* end section about */}
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default CoCauToChuc;
