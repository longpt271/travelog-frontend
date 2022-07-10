import { Carousel, Select, Tabs } from 'antd'
import React from 'react'
import "./Category.css"
import { Link } from 'react-router-dom'
import { Link as Linkrt } from "react-router-dom";
import ShopeePic1 from './img/shopeePic1.png'
import ShopeePic2 from './img/shopeePic2.png'
import ShopeePic3 from './img/shopeePic3.png'
import ShopeePic4 from './img/shopeePic4.png'
import ShopeePic5 from './img/shopeePic5.png'
import ShopeePic6 from './img/shopeePic6.png'
import ShopeePic7 from './img/shopeePic7.png'
import ShopeePic8 from './img/shopeePic8.png'
import ShopeePic9 from './img/shopeePic9.png'
import ShopeePic10 from './img/shopeePic10.png'
import ShopeePic11 from './img/shopeePic11.png'
import ShopeePic12 from './img/shopeePic12.png'

import { Menu, Dropdown} from 'antd';


export default function Category() {

  const { SubMenu } = Menu;   // Thêm thẻ Sub menu
      
  const menuCategory1 = (
    <Menu>
      <SubMenu key="sub1" title={"Thuê xe"}>
        <Menu.Item key="0">
          <Linkrt to="/list-tour">Xe 4&minus;7 chỗ</Linkrt>
        </Menu.Item>
        <Menu.Item key="1">
          <Linkrt to="/list-tour">Xe &gt; 16 chỗ</Linkrt>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="2">
        <Linkrt to="/list-tour">Vé máy bay</Linkrt>
      </Menu.Item>
      <Menu.Item key="3">
        <Linkrt to="/list-tour">Lưu trú</Linkrt>
      </Menu.Item>
    </Menu>
  );

  const menuCategory2 = (
    <Menu>
      <Menu.Item key="0">
        <Linkrt to="/list-tour">Quán ngon địa phương</Linkrt>
      </Menu.Item>
      <Menu.Item key="1">
        <Linkrt to="/list-tour">Đặc sản miền núi</Linkrt>
      </Menu.Item>
      <Menu.Item key="2">
        <Linkrt to="/list-tour">Đặc sản miền Tây</Linkrt>
      </Menu.Item>
      <Menu.Item key="3">
        <Linkrt to="/list-tour">Đặc sản làng chài</Linkrt>
      </Menu.Item>
    </Menu>
  );

  const menuCategory3 = (
    <Menu>
      <Menu.Item key="0">
        <Linkrt to="/list-tour">Hương &amp; vàng mã</Linkrt>
      </Menu.Item>
      <Menu.Item key="1">
        <Linkrt to="/list-tour">Hoa quả địa phương</Linkrt>
      </Menu.Item>
      <Menu.Item key="2">
        <Linkrt to="/list-tour">Bánh kẹo</Linkrt>
      </Menu.Item>
      <Menu.Item key="3">
        <Linkrt to="/list-tour">Xôi chè &amp; Mâm cỗ địa phương</Linkrt>
      </Menu.Item>
    </Menu>
  );

  const menuCategory8 = (
    <Menu>
      <Menu.Item key="0">
        <Linkrt to="/list-tour">Chụp ảnh kỷ yếu</Linkrt>
      </Menu.Item>
      <Menu.Item key="1">
        <Linkrt to="/list-tour">Gói chụp ảnh cá nhân</Linkrt>
      </Menu.Item>
      <Menu.Item key="2">
        <Linkrt to="/list-tour">Chụp ảnh cưới</Linkrt>
      </Menu.Item>
      <Menu.Item key="3">
        <Linkrt to="/list-tour">Chụp studio</Linkrt>
      </Menu.Item>
    </Menu>
  );

  const menuCategory10 = (
    <Menu>
      <Menu.Item key="0">
        <Linkrt to="/list-tour">Sunworld</Linkrt>
      </Menu.Item>
      <Menu.Item key="1">
        <Linkrt to="/list-tour">Typhoon Water Park</Linkrt>
      </Menu.Item>
      <Menu.Item key="2">
        <Linkrt to="/list-tour">Vinpearl Land</Linkrt>
      </Menu.Item>
      <Menu.Item key="2">
        <Linkrt to="/list-tour">Đại Nam</Linkrt>
      </Menu.Item>
    </Menu>
  );
    return (
        <div id="category-services">
                <div>
                    <div className="image-carousel">
                        <div class="image-carousel__item-list-wrapper">
                        <div class="image-carousel__item-list">
                            <div class="image-carousel__item caro-li-first">
                                <Dropdown overlay={menuCategory1}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic1} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Quà lưu niệm</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                                <Dropdown overlay={menuCategory2}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic2} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Đặc sản <br /> địa phương</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                            </div>
                            <div class="image-carousel__item caro-li-first">
                                <Dropdown overlay={menuCategory3}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic3} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Combo phục vụ <br /> lễ hội&#8725;đền&#8725;chùa</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                                <Dropdown overlay={menuCategory1}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic4} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Đồ đi rừng <br /> &amp; phượt</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                            </div>
                            <div class="image-carousel__item caro-li-first">
                                <Dropdown overlay={menuCategory1}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic5} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Đồ bơi</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                                <Dropdown overlay={menuCategory1}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic6} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Đồ chơi <br /> thể thao</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                            </div>
                            <div class="image-carousel__item caro-li-first">
                                <Dropdown overlay={menuCategory1}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic7} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Thuốc men <br /> &amp; mỹ phẩm</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                                <Dropdown overlay={menuCategory8}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic8} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Dịch vụ quay video, Chụp ảnh</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                            </div>
                            <div class="image-carousel__item caro-li-first">
                                <Dropdown overlay={menuCategory1}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic9} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Dịch vụ <br /> thuê xe</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                                <Dropdown overlay={menuCategory10}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic10} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Dịch vụ vui chơi giải trí</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                            </div>
                            <div class="image-carousel__item caro-li-first">
                                <Dropdown overlay={menuCategory1}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic11} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Bảo hiểm <br /> du lịch</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                                <Dropdown overlay={menuCategory1}  placement="topCenter" arrow={{ pointAtCenter: true }}>
                                    <div class="home-category-list__group">
                                        <Link
                                        class="home-category-list__category-grid"
                                        href="#"
                                        >
                                            <div class="caro-tab">
                                                <div>
                                                    <img src={ShopeePic12} alt="" class="img-caro-tabs"/>
                                                </div>
                                                <div>
                                                    <span>Thẻ thành viên</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div >
    )
}