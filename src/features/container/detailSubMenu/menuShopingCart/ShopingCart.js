import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../trangchu/footer/Footer'
import { InputNumber } from 'antd';
import './ShopingCart.css'
import AnhSp from '../menuAboutUs/img/intro.png'
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

function ShopingCart() {
    
    return (
        <div id="shoping-cart">
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
                        <h3><span>Giỏ hàng</span></h3>
                        <div class="sub-heading">
                            {/* <p> We have a history of the brands we work with. </p> */}
                        </div>
                    </div>
                </div>
                <div>
                {/* Shoping Cart Section Begin */}
                <section class="shoping-cart spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="shoping__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th class="shoping__product">Sản phẩm</th>
                                                <th>Giá</th>
                                                <th>Số lượng</th>
                                                <th>Tổng tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="shoping__cart__checkbox">
                                                    <input type="checkbox" checked alt="" />
                                                </td>
                                                <td class="shoping__cart__item">
                                                    <img className="img-cart-sp" src={AnhSp} alt=""/>
                                                    <h5>Gói tour trong giỏ 1</h5>
                                                </td>
                                                <td class="shoping__cart__price">
                                                    $55.00
                                                </td>
                                                <td class="shoping__cart__quantity">
                                                    <div class="quantity">
                                                        <div class="pro-qty">
                                                            <InputNumber min={1} max={10} defaultValue={1}  />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="shoping__cart__total">
                                                    $110.00
                                                </td>
                                                <td class="shoping__cart__item__close">
                                                    <Popconfirm title="Bạn có muốn sửa？" icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                                        <span><i className="fas fa-times text-danger"></i></span>
                                                    </Popconfirm>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="shoping__cart__checkbox">
                                                    <input type="checkbox" alt="" />
                                                </td>
                                                <td class="shoping__cart__item">
                                                    <img className="img-cart-sp" src={AnhSp} alt=""/>
                                                    <h5>Gói tour trong giỏ 2</h5>
                                                </td>
                                                <td class="shoping__cart__price">
                                                    $39.00
                                                </td>
                                                <td class="shoping__cart__quantity">
                                                    <InputNumber min={1} max={10} defaultValue={2}  />
                                                </td>
                                                <td class="shoping__cart__total">
                                                    $39.99
                                                </td>
                                                <td class="shoping__cart__item__close">
                                                    <Popconfirm title="Hủy đặt trước miễn phí trong 25 phút？" icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                                        <span><i className="fas fa-times text-danger"></i></span>
                                                    </Popconfirm>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="shoping__cart__checkbox">
                                                    <input type="checkbox" alt="" />
                                                </td>
                                                <td class="shoping__cart__item">
                                                    <img className="img-cart-sp" src={AnhSp} alt=""/>
                                                    <h5>Gói tour trong giỏ 3</h5>
                                                </td>
                                                <td class="shoping__cart__price">
                                                    $69.00
                                                </td>
                                                <td class="shoping__cart__quantity">
                                                    <InputNumber min={1} max={10} defaultValue={3}  />
                                                </td>
                                                <td class="shoping__cart__total">
                                                    $69.99
                                                </td>
                                                <td class="shoping__cart__item__close">
                                                    <Popconfirm title="Bạn có muốn sửa？" icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                                        <span><i className="fas fa-times text-danger"></i></span>
                                                    </Popconfirm>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="shoping__cart__btns">
                                    <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                    <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                                        Upadate Cart</a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="shoping__continue">
                                    <div class="shoping__discount">
                                        <h5>Discount Codes</h5>
                                        <form action="#">
                                            <input type="text" placeholder="Enter your coupon code"/>
                                            <button type="submit" class="site-btn">APPLY COUPON</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="shoping__checkout">
                                    <h5>Cart Total</h5>
                                    <ul>
                                        <li>Subtotal <span>$454.98</span></li>
                                        <li>Total <span>$454.98</span></li>
                                    </ul>
                                    <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Shoping Cart Section End */}
                </div>
                <div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default ShopingCart;
