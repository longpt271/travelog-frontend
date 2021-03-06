import React, { useEffect, useState } from 'react'
import { Badge, Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './nav.css'
import Headers from './../header/Header'
import Doanhthu from './../Doanhthu/Doanhthu'
import Themloaitour from './../Loaitour/Themloaitour'
import Loaitour from './../Loaitour/Loaitour'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Taikhoan from '../taikhoan/Taikhoan';
import Chitiettaikhoan from '../taikhoan/Chitiettaikhoan'
import Chitietquocgia from "../Quocgia/Chitietquocgia"
import Themquocgia from '../Quocgia/Themquocgia'
import Quocgia from '../Quocgia/Quocgia';
import Themdiadiem from '../DiaDiem/Themdiadiem';
import Mangxahoi from '../mxh/Mangxahoi';
import Themmangxahoi from '../mxh/Themmangxahoi';
import Diadiem from '../DiaDiem/Diadiem';
import Tour from "../Tour/Tour"
import Themtour from "../Tour/Themtour"
import Chitiettour from "../Tour/Chitiettour";
import Binhluan from "../Binhluan/Binhluan"
import Chitietbinhluan from '../Binhluan/Chitietbinhluan';
import Anh from "../Anh/Anh";
import Dichvu from "../Dichvu/Dichvu";
import Themdichvu from "../Dichvu/Themdichvu"
import Role from "../Role/Role";
import Themrole from '../Role/Themrole';
import Lienhe from "../Lienhe/Lienhe";
import Themlienhe from "../Lienhe/Themlienhe";
import Ngaydi from "..//Ngaydi/Ngaydi";
import Camnangdulich from "../Camnangdulich/Camnangdulich";
import Themcamnang from "../Camnangdulich/Themcamnang";
import Khuyenmai from "../Khuyenmai/Khuyenmai"
import Themkhuyenmai from "../Khuyenmai/Themkhuyenmai"
import { useDispatch, useSelector } from 'react-redux';
import Chiphi from '../Chiphi/Chiphi';
import Themchiphi from '../Chiphi/Themchiphi';
import Hoadon from "../Hoadon/Hoadon";
import Themhoadon from "../Hoadon/Themhoadon";
import Kiemduyet from '../Kiemduyet/Kiemduyet';
import Hoadoncanhan from '../Hoadoncanhan/Hoadoncanhan';
import Themhoadoncanhan from "../Hoadoncanhan/Themhoadoncanhan";
import { hoadoncanhanData } from '../Hoadoncanhan/hoadoncanhanSlice';

export default function Nav() {
    const match = useRouteMatch();
    const { Header, Sider, Content } = Layout;
    const [state, setState] = useState({
        collapsed: true,
        visible: true
    })
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(hoadoncanhanData()) }
    useEffect(() => {
        actionResult();
        window.scrollTo(0, 0);
    }, []);
    const hoadoncanhan = useSelector(state => state.hoadoncanhans.hoadoncanhan.data);
    let counthoadon = 0;
    if (hoadoncanhan) {
        for (let i = 0; i < hoadoncanhan.length; i++) {
            if (hoadoncanhan[i].kiemduyet === 0) {
                counthoadon++
            }
        }
    }
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    const user = useSelector(state => state.infor.infor.data);

    const { SubMenu } = Menu;   // Th??m th??? Sub menu

    const nhanvienKD = (
        <div>
            
            <Route exact path={`${match.path}/chiphi`}>
                <Chiphi url={match.url} />
            </Route>
            <Route path={`${match.path}/chiphi/suachiphi/:id`}  >
                <Themchiphi url={match.url} />
            </Route>
            <Route exact path={`${match.path}/chiphi/themchiphi`}>
                <Themchiphi url={match.url} />
            </Route>
            <Route exact path={`${match.path}/kiemduyet`}>
                <Kiemduyet url={match.url} />
            </Route>

            <Route exact path={`${match.path}/hoadon`}  >
                <Hoadon url={match.url} />
            </Route>
            <Route path={`${match.path}/hoadon/themhoadon`}  >
                <Themhoadon url={match.url} />
            </Route>
            <Route path={`${match.path}/hoadon/suahoadon/:id`}  >
                <Themhoadon url={match.url} />
            </Route>
            <Route exact path={`${match.path}/hoadoncanhan`}  >
                <Hoadoncanhan url={match.url} />
            </Route>
            <Route path={`${match.path}/hoadoncanhan/themhoadoncanhan`}  >
                <Themhoadoncanhan url={match.url} />
            </Route>
            <Route path={`${match.path}/hoadoncanhan/suahoadoncanhan/:id`}  >
                <Themhoadoncanhan url={match.url} />
            </Route>

            <Route exact path={`${match.path}/tour`}  >
                <Tour url={match.url} />
            </Route>
            <Route path={`${match.path}/tour/chitiettour/:id`}  >
                <Chitiettour />
            </Route>
            <Route path={`${match.path}/tour/themtour`}  >
                <Themtour />
            </Route>
            <Route path={`${match.path}/tour/suatour/:id`}  >
                <Themtour />
            </Route>
        </div>
    )
    const nhanvienCSKH = (
        <div>
            <Route exact path={`${match.path}/hoadon`}  >
                <Hoadon url={match.url} />
            </Route>
            <Route exact path={`${match.path}/hoadoncanhan`}  >
                <Hoadoncanhan url={match.url} />
            </Route>

            <Route exact path={`${match.path}/tour`}  >
                <Tour url={match.url} />
            </Route>
            <Route path={`${match.path}/tour/chitiettour/:id`}  >
                <Chitiettour />
            </Route>
            <Route path={`${match.path}/tour/themtour`}  >
                <Themtour />
            </Route>
            <Route path={`${match.path}/tour/suatour/:id`}  >
                <Themtour />
            </Route>
            <Route path={`${match.path}/loaitour/sualoaitour/:id`}  >
                <Themloaitour />
            </Route>
            <Route exact path={`${match.path}/loaitour`}  >
                <Loaitour url={match.url} />
            </Route>
            <Route path={`${match.path}/loaitour/themloaitour`}  >
                <Themloaitour />
            </Route>
            <Route path={`${match.path}/quocgia/suaquocgia/:id`}  >
                <Themquocgia />
            </Route>
            <Route exact path={`${match.path}/quocgia`}  >
                <Quocgia url={match.url} />
            </Route>
            <Route path={`${match.path}/quocgia/themquocgia`}  >
                <Themquocgia />
            </Route>
            <Route exact path={`${match.path}/diadiem`}  >
                <Diadiem url={match.url} />
            </Route>
            <Route path={`${match.path}/diadiem/themdiadiem`}  >
                <Themdiadiem />
            </Route>
            <Route path={`${match.path}/diadiem/suadiadiem/:id`}  >
                <Themdiadiem />
            </Route>
            <Route exact path={`${match.path}/ngaydi`}  >
                <Ngaydi />
            </Route>

            <Route exact path={`${match.path}/dichvu`}  >
                <Dichvu url={match.url} />
            </Route>
		<Route path={`${match.path}/dichvu/themdichvu`}  >
                <Themdichvu />
            </Route>
            <Route path={`${match.path}/dichvu/suadichvu/:id`}  >
                <Themdichvu />
            </Route>


            <Route exact path={`${match.path}/khuyenmai`}  >
                <Khuyenmai url={match.url} />
            </Route>
            <Route path={`${match.path}/khuyenmai/themkhuyenmai`}  >
                <Themkhuyenmai url={match.url} />
            </Route>
            <Route path={`${match.path}/khuyenmai/suakhuyenmai/:id`}  >
                <Themkhuyenmai url={match.url} />
            </Route>
            
            <Route exact path={`${match.path}/binhluan`}  >
                <Binhluan url={match.url} />
            </Route>
            <Route path={`${match.path}/binhluan/chitietbinhluan/:id`}  >
                <Chitietbinhluan />
            </Route>
            
            <Route exact path={`${match.path}/camnangdulich`}  >
                <Camnangdulich url={match.url} />
            </Route>
            <Route exact path={`${match.path}/themcamnangdulich`}  >
                <Themcamnang />
            </Route>
            <Route path={`${match.path}/camnangdulich/suacamnangdulich/:id`}  >
                <Themcamnang />
            </Route>
        </div>
    )
    const admin = (
        <div>
            <Route exact path={match.path}>
                <Doanhthu />
            </Route>
            <Route exact path={`${match.path}/chiphi`}>
                <Chiphi url={match.url} />
            </Route>
            <Route path={`${match.path}/chiphi/suachiphi/:id`}  >
                <Themchiphi url={match.url} />
            </Route>
            <Route exact path={`${match.path}/chiphi/themchiphi`}>
                <Themchiphi url={match.url} />
            </Route>
            <Route exact path={`${match.path}/kiemduyet`}>
                <Kiemduyet url={match.url} />
            </Route>
            <Route exact path={`${match.path}/khuyenmai`}  >
                <Khuyenmai url={match.url} />
            </Route>
            <Route path={`${match.path}/khuyenmai/themkhuyenmai`}  >
                <Themkhuyenmai url={match.url} />
            </Route>
            <Route path={`${match.path}/khuyenmai/suakhuyenmai/:id`}  >
                <Themkhuyenmai url={match.url} />
            </Route>
            <Route exact path={`${match.path}/diadiem`}  >
                <Diadiem url={match.url} />
            </Route>
            <Route path={`${match.url}/diadiem/themdiadiem`}  >
                <Themdiadiem />
            </Route>
            <Route path={`${match.path}/diadiem/suadiadiem/:id`}  >
                <Themdiadiem />
            </Route>
            <Route exact path={`${match.path}/camnangdulich`}  >
                <Camnangdulich url={match.url} />
            </Route>
            <Route exact path={`${match.path}/lienhe`}  >
                <Lienhe url={match.url} />
            </Route>
            <Route exact path={`${match.path}/ngaydi`}  >
                <Ngaydi />
            </Route>
            
            <Route exact path={`${match.path}/hoadon`}  >
                <Hoadon url={match.url} />
            </Route>
            <Route path={`${match.path}/hoadon/themhoadon`}  >
                <Themhoadon url={match.url} />
            </Route>
            <Route path={`${match.path}/hoadon/suahoadon/:id`}  >
                <Themhoadon url={match.url} />
            </Route>
            <Route exact path={`${match.path}/hoadoncanhan`}  >
                <Hoadoncanhan url={match.url} />
            </Route>
            <Route path={`${match.path}/hoadoncanhan/themhoadoncanhan`}  >
                <Themhoadoncanhan url={match.url} />
            </Route>
            <Route path={`${match.path}/hoadoncanhan/suahoadoncanhan/:id`}  >
                <Themhoadoncanhan url={match.url} />
            </Route>

            <Route exact path={`${match.path}/anh`}  >
                <Anh url={match.url} />
            </Route>
            <Route exact path={`${match.path}/dichvu`}  >
                <Dichvu url={match.url} />
            </Route>
            <Route exact path={`${match.path}/binhluan`}  >
                <Binhluan url={match.url} />
            </Route>
            <Route exact path={`${match.path}/tour`}  >
                <Tour url={match.url} />
            </Route>
            <Route exact path={`${match.path}/role`}  >
                <Role url={match.url} />
            </Route>
            <Route exact path={`${match.path}/themcamnangdulich`}  >
                <Themcamnang />
            </Route>
            <Route path={`${match.path}/lienhe/themlienhe`}  >
                <Themlienhe />
            </Route>
            <Route path={`${match.path}/role/themrole`}  >
                <Themrole />
            </Route>
            <Route path={`${match.path}/dichvu/themdichvu`}  >
                <Themdichvu />
            </Route>
            <Route path={`${match.path}/binhluan/chitietbinhluan/:id`}  >
                <Chitietbinhluan />
            </Route>
            <Route path={`${match.path}/tour/chitiettour/:id`}  >
                <Chitiettour />
            </Route>
            <Route path={`${match.path}/quocgia/chitietquocgia/:id`}  >
                <Chitietquocgia />
            </Route>
            <Route path={`${match.path}/camnangdulich/suacamnangdulich/:id`}  >
                <Themcamnang />
            </Route>
            <Route path={`${match.path}/role/suarole/:id`}  >
                <Themrole />
            </Route>
            <Route path={`${match.path}/lienhe/sualienhe/:id`}  >
                <Themlienhe />
            </Route>
            <Route path={`${match.path}/mangxahoi/suamangxahoi/:id`}  >
                <Themmangxahoi />
            </Route>
            <Route path={`${match.path}/dichvu/suadichvu/:id`}  >
                <Themdichvu />
            </Route>
            <Route path={`${match.path}/loaitour/sualoaitour/:id`}  >
                <Themloaitour />
            </Route>
            <Route path={`${match.path}/quocgia/suaquocgia/:id`}  >
                <Themquocgia />
            </Route>
            <Route exact path={`${match.path}/quocgia`}  >
                <Quocgia url={match.url} />
            </Route>
            <Route exact path={`${match.path}/loaitour`}  >
                <Loaitour url={match.url} />
            </Route>
            <Route exact path={`${match.path}/taikhoan`}  >
                <Taikhoan url={match.url} />
            </Route>
            <Route exact path={`${match.path}/mangxahoi`}  >
                <Mangxahoi url={match.url} />
            </Route>
            <Route path={`${match.path}/loaitour/themloaitour`}  >
                <Themloaitour />
            </Route>
            <Route path={`${match.path}/taikhoan/chitiettaikhoan/:id`}  >
                <Chitiettaikhoan />
            </Route>
            <Route path={`${match.path}/quocgia/themquocgia`}  >
                <Themquocgia />
            </Route>
            <Route path={`${match.path}/tour/themtour`}  >
                <Themtour />
            </Route>
            <Route path={`${match.path}/tour/suatour/:id`}  >
                <Themtour />
            </Route>
            <Route path={`${match.path}/mangxahoi/themmangxahoi`}  >
                <Themmangxahoi />
            </Route>
        </div>
    )
    const menu_nhanvienKD = (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            
            <Menu.Item key="19" icon={state.collapsed === true ? <span className="fas fa-money-check-alt"></span> : <span className="fas fa-money-check-alt mr-2"></span>}>
                <Link to={`${match.url}/chiphi`}>Chi ph??</Link>
            </Menu.Item>
            <Menu.Item key="21" icon={state.collapsed === true ? <span className="fas fa-check-double"></span> : <span className="fas fa-check-double"></span>}>
                <Link to={`${match.url}/kiemduyet`}>Ki???m duy???t {counthoadon === 0 ? "" : <Badge status="error" />}</Link>
            </Menu.Item>
            <Menu.Item key="20" icon={state.collapsed === true ? <span className="fas fa-file-invoice-dollar"></span> : <span className="fas fa-file-invoice-dollar"></span>}>
                <Link to={`${match.url}/hoadoncanhan`}>Ho?? ????n c?? nh??n</Link>
            </Menu.Item>
            <Menu.Item key="13" icon={state.collapsed === true ? <span className="fas fa-file-alt" ></span> : <span className="fas fa-file-alt mr-2"></span>}>
                <Link to={`${match.url}/hoadon`}>Qu???n l?? ho?? ????n</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={state.collapsed === true ? <span className="fas fa-luggage-cart" ></span> : <span className="fas fa-luggage-cart mr-2"></span>}>
                <Link to={`${match.url}/tour`}>Qu???n l?? tour</Link>
            </Menu.Item>
        </Menu>
    )
    const menu_nhanvienCSKH = (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            
            <Menu.Item key="20" icon={state.collapsed === true ? <span className="fas fa-file-invoice-dollar"></span> : <span className="fas fa-file-invoice-dollar"></span>}>
                <Link to={`${match.url}/hoadoncanhan`}>Ho?? ????n c?? nh??n</Link>
            </Menu.Item>
            <Menu.Item key="13" icon={state.collapsed === true ? <span className="fas fa-file-alt" ></span> : <span className="fas fa-file-alt mr-2"></span>}>
                <Link to={`${match.url}/hoadon`}>Qu???n l?? ho?? ????n</Link>
            </Menu.Item>
            
            <Menu.Item key="2" icon={state.collapsed === true ? <span className="fas fa-luggage-cart" ></span> : <span className="fas fa-luggage-cart mr-2"></span>}>
                <Link to={`${match.url}/tour`}>Qu???n l?? tour</Link>
            </Menu.Item>
            <Menu.Item key="16" icon={state.collapsed === true ? <span className="fas fa-clock" ></span> : <span className="fas fa-clock mr-2"></span>}>
                <Link to={`${match.url}/ngaydi`}>Qu???n l?? Ng??y ??i</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={state.collapsed === true ? <span className="fas fa-place-of-worship" ></span> : <span className="fas fa-place-of-worship mr-2"></span>}>
                <Link to={`${match.url}/diadiem`}>Qu???n l?? ?????a ??i???m</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={state.collapsed === true ? <span className="fas fa-flag-usa" ></span> : <span className="fas fa-flag-usa mr-2"></span>}>
                <Link to={`${match.url}/quocgia`}>Qu???n l?? qu???c gia</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={state.collapsed === true ? <span className="fas fa-atlas" ></span> : <span className="fas fa-atlas mr-2"></span>}>
                <Link to={`${match.url}/loaitour`}>Qu???n l?? lo???i tour</Link>
            </Menu.Item>
            <Menu.Item key="12" icon={state.collapsed === true ? <span className="fab fa-phoenix-framework" ></span> : <span className="fab fa-phoenix-framework mr-2"></span>}>
                <Link to={`${match.url}/dichvu`}>Qu???n l?? d???ch v???</Link>
            </Menu.Item>
            <Menu.Item key="18" icon={state.collapsed === true ? <span className="fas fa-percent" ></span> : <span className="fas fa-percent mr-2"></span>}>
                <Link to={`${match.url}/khuyenmai`}>Khuy???n m??i</Link>
            </Menu.Item>
            
            <Menu.Item key="9" icon={state.collapsed === true ? <span className="fas fa-comments" ></span> : <span className="fas fa-comments mr-2"></span>}>
                <Link to={`${match.url}/binhluan`}>Qu???n l?? b??nh lu???n</Link>
            </Menu.Item>
            <Menu.Item key="17" icon={state.collapsed === true ? <span className="fas fa-book" ></span> : <span className="fas fa-book mr-2"></span>}>
                <Link to={`${match.url}/camnangdulich`}>C???m nang du l???ch</Link>
            </Menu.Item>
        </Menu>
    )
    const menu_quanlyadmin = (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={state.collapsed === true ? <span className="fas fa-tachometer-alt" ></span> : <span className="fas fa-tachometer-alt mr-2"></span>}>
                <Link to="/admin">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="19" icon={state.collapsed === true ? <span className="far fa-credit-card"></span> : <span className="far fa-credit-card mr-2"></span>}>
                <Link to={`${match.url}/chiphi`}>Chi ph??</Link>
            </Menu.Item>

            <SubMenu key="sub1" title={state.collapsed === true ? "" : "Qu???n l?? ho?? ????n"}
                    icon={state.collapsed === true ?<span className="fas fa-scroll" ></span> : <span className="fas fa-scroll mr-2"></span>}
            >
                <Menu.Item key="21" icon={state.collapsed === true ? <span className="fas fa-check-double"></span> : <span className="fas fa-check-double"></span>}>
                    <Link to={`${match.url}/kiemduyet`}>Ki???m duy???t {counthoadon === 0 ? "" : <Badge status="error" />}</Link>
                </Menu.Item>
                <Menu.Item key="20" icon={state.collapsed === true ? <span className="fas fa-file-invoice-dollar"></span> : <span className="fas fa-file-invoice-dollar"></span>}>
                    <Link to={`${match.url}/hoadoncanhan`}>Ho?? ????n c?? nh??n</Link>
                </Menu.Item>
                <Menu.Item key="13" icon={state.collapsed === true ? <span className="fas fa-file-alt" ></span> : <span className="fas fa-file-alt mr-2"></span>}>
                    <Link to={`${match.url}/hoadon`}>Ho?? ????n tour</Link>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" title={state.collapsed === true ? "" : "Qu???n l?? tour"}
                    icon={state.collapsed === true ?<span className="fas fa-map-marked-alt" ></span> : <span className="fas fa-map-marked-alt mr-2"></span>}
            >
                <Menu.Item key="2" icon={state.collapsed === true ? <span className="fas fa-luggage-cart" ></span> : <span className="fas fa-luggage-cart mr-2"></span>}>
                    <Link to={`${match.url}/tour`}>Qu???n l?? tour</Link>
                </Menu.Item>
                <Menu.Item key="16" icon={state.collapsed === true ? <span className="fas fa-clock" ></span> : <span className="fas fa-clock mr-2"></span>}>
                    <Link to={`${match.url}/ngaydi`}>Qu???n l?? ng??y ??i</Link>
                </Menu.Item>
                <Menu.Item key="8" icon={state.collapsed === true ? <span className="fas fa-place-of-worship" ></span> : <span className="fas fa-place-of-worship mr-2"></span>}>
                    <Link to={`${match.url}/diadiem`}>Qu???n l?? ?????a ??i???m</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={state.collapsed === true ? <span className="fas fa-flag-usa" ></span> : <span className="fas fa-flag-usa mr-2"></span>}>
                    <Link to={`${match.url}/quocgia`}>Qu???n l?? qu???c gia</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={state.collapsed === true ? <span className="fas fa-atlas" ></span> : <span className="fas fa-atlas mr-2"></span>}>
                    <Link to={`${match.url}/loaitour`}>Qu???n l?? lo???i tour</Link>
                </Menu.Item>
                <Menu.Item key="12" icon={state.collapsed === true ? <span className="fab fa-phoenix-framework" ></span> : <span className="fab fa-phoenix-framework mr-2"></span>}>
                    <Link to={`${match.url}/dichvu`}>Qu???n l?? d???ch v???</Link>
                </Menu.Item>
                <Menu.Item key="11" icon={state.collapsed === true ? <span className="fas fa-images" ></span> : <span className="fas fa-images mr-2"></span>}>
                    <Link to={`${match.url}/anh`}>Qu???n l?? ???nh</Link>
                </Menu.Item>
                <Menu.Item key="18" icon={state.collapsed === true ? <span className="fas fa-percent" ></span> : <span className="fas fa-percent mr-2"></span>}>
                    <Link to={`${match.url}/khuyenmai`}>Khuy???n m??i</Link>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" title={state.collapsed === true ? "" : "Qu???n l?? user"}
                    icon={state.collapsed === true ?<span className="fas fa-user-cog" ></span> : <span className="fas fa-user-cog mr-2"></span>}
            >
                <Menu.Item key="3" icon={state.collapsed === true ? <span className="fas fa-users" ></span> : <span className="fas fa-users mr-2"></span>}>
                    <Link to={`${match.url}/taikhoan`}>Qu???n l?? t??i kho???n</Link>
                </Menu.Item>
                <Menu.Item key="14" icon={state.collapsed === true ? <span className="fas fa-user-tag" ></span> : <span className="fas fa-user-tag mr-2"></span>}>
                    <Link to={`${match.url}/role`}>Th???ng k?? quy???n</Link>
                </Menu.Item>
            </SubMenu>
            
            <SubMenu key="sub4" title={state.collapsed === true ? "" : "Qu???n l?? trang ch???"}
                    icon={state.collapsed === true ?<span className="fas fa-eye" ></span> : <span className="fas fa-eye mr-2"></span>}
            >
                <Menu.Item key="9" icon={state.collapsed === true ? <span className="fas fa-comments" ></span> : <span className="fas fa-comments mr-2"></span>}>
                    <Link to={`${match.url}/binhluan`}>Qu???n l?? b??nh lu???n</Link>
                </Menu.Item>
                <Menu.Item key="17" icon={state.collapsed === true ? <span className="fas fa-book" ></span> : <span className="fas fa-book mr-2"></span>}>
                    <Link to={`${match.url}/camnangdulich`}>C???m nang du l???ch</Link>
                </Menu.Item>
                <Menu.Item key="7" icon={state.collapsed === true ? <span className="fas  fa-share-alt" ></span> : <span className="fas  fa-share-alt mr-2"></span>}>
                    <Link to={`${match.url}/mangxahoi`}>Qu???n l?? m???ng x?? h???i</Link>
                </Menu.Item>
                <Menu.Item key="15" icon={state.collapsed === true ? <span className="fas fa-id-card" ></span> : <span className="fas fa-id-card mr-2"></span>}>
                    <Link to={`${match.url}/lienhe`}>Qu???n l?? li??n h???</Link>
                </Menu.Item>
            </SubMenu>

        </Menu>
    )
    const Menu_Authentication = (role) => {
        switch (role) {
            case "admin":
                return menu_quanlyadmin
                break;
            case "nh??n vi??n kinh doanh":
                return menu_nhanvienKD
                break;
            case "nh??n vi??n ch??m s??c kh??ch h??ng":
                return menu_nhanvienCSKH
                break;
            default:
                break;
        }
    }
    const Authentication = (role) => {
        switch (role) {
            case "admin":
                return admin
                break;
            case "nh??n vi??n kinh doanh":
                return nhanvienKD
                break;
            case "nh??n vi??n ch??m s??c kh??ch h??ng":
                return nhanvienCSKH
                break;
            default:
                break;
        }
    }
    return (
        <div id="nav">
            <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed} >
                    <div className="logo" >
                        <Link to="/">
                            <p className="text-center w-100">
                                {state.collapsed === true ? <i className="fas fa-user-shield "></i> : <strong>Administration</strong>}
                            </p>
                        </Link>
                    </div>
                    {user ? Menu_Authentication(user.role) : ''}
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <Headers />
                        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {user ? Authentication(user.role) : ""}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </div >
    )
}