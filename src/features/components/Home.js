import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Login from "../container/login/Login";
import Menu from "../container/trangchu/menu/Menu";
import Menu2 from "../container/trangchu/menu/Menu2";
import Trangchu from './Trangchu'
import Admin from './Admin'
import Dangky from '../container/dangky/Dangky'
import Tour from "../container/detailtour/tour/Tour";
import Listtour from "../container/Listtour/Listtour";
import Dattour from "../container/detailtour/dattour/Dattour";
import Stripe from "../teststripe/Stripe";
import Error from "./Error";
import { useDispatch } from "react-redux";
// import { getMe } from "../../app/userSlice";
// import { unwrapResult } from "@reduxjs/toolkit";
import { quocgiaData } from "../container/admin/Quocgia/quocgiaSlice";
import { loaitourData } from "../container/admin/Loaitour/loaitourSlice";
import { diadiemData } from "../container/admin/DiaDiem/diadiemSlice";
import { mangxahoiData } from "../container/admin/mxh/mangxahoiSlice";
import { binhluanData } from "../container/admin/Binhluan/binhluanSlice";
// import { userData } from "../container/admin/taikhoan/taikhoanSlice";
import { anhData } from "../container/admin/Anh/anhSlice";
import { dichvuData } from "../container/admin/Dichvu/dichvuSlice";
import { hoadonData } from "../container/admin/Hoadon/hoadonSlice";
import { roleData } from "../container/admin/Role/roleSlice";
import { lienheData } from "../container/admin/Lienhe/lienheSlice";
import { ngaydiData } from "../container/admin/Ngaydi/ngaydiSlice";
import { tourData } from "../container/admin/Tour/tourSlice";
import { camnangdulichData } from "../container/admin/Camnangdulich/camnangdulichSlice";
import { inforData } from "../container/login/inforSlice";
import { chiphiData } from "../container/admin/Chiphi/chiphiSlice";
import CreateTour from "../container/createTour/CreateTour";
import { thongbaoData } from "../container/admin/Kiemduyet/thongbaoSlice";
import Thongtin from "../container/trangchu/thongtin/Thongtin";

// Sub menu
import CoCauToChuc from "../container/detailSubMenu/menuAboutUs/CoCauToChuc";
import ShopingCart from "../container/detailSubMenu/menuShopingCart/ShopingCart";


export default function NestingExample() {
  const dispatch = useDispatch();
  const actionquocgia = async () => { await dispatch(quocgiaData()) }
  const actionloaitour = async () => { await dispatch(loaitourData()) }

  const actiondiadiem = async () => { await dispatch(diadiemData()) }
  const actionmangxahoi = async () => { await dispatch(mangxahoiData()) }
  const actionbinhluan = async () => { await dispatch(binhluanData()) }
  const actionanh = async () => { await dispatch(anhData()) }
  const actiondichvu = async () => { await dispatch(dichvuData()) }
  const actionhoadon = async () => { await dispatch(hoadonData()) }
  const actionrole = async () => { await dispatch(roleData()) }
  const actionlienhe = async () => { await dispatch(lienheData()) }
  const actionngaydi = async () => { await dispatch(ngaydiData()) }
  const actiontour = async () => { await dispatch(tourData()) }
  const actioncamnang = async () => { await dispatch(camnangdulichData()) }
  const actioninfor = async () => { await dispatch(inforData()) }
  const actionchiphi = async () => { await dispatch(chiphiData()) }
  const actionthongbao = async () => { await dispatch(thongbaoData()) }
  useEffect(() => {

    // const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
    //   if (!user) {
    //     console.log("log out");
    //     return;
    //   }
    //   const token = await user.getIdToken();
    //   localStorage.setItem('token', token);
    //   const actionResult = await dispatch(getMe());
    //   const currentUser = unwrapResult(actionResult);

    actionquocgia();
    actionloaitour();

    actiondiadiem();
    actionmangxahoi();
    actionbinhluan();
    actionanh();
    actiondichvu();
    actionhoadon();
    actionrole();
    actionlienhe();
    actionngaydi();
    actiontour();
    actioncamnang();
    actioninfor();
    actionchiphi();
    actionthongbao();
    // }
    // );
    // return () => unregisterAuthObserver();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dangnhap" component="" />
          <Route path="/dangky" component="" />
          <Route path="/admin" component="" />
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/">
            <Menu2 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Trangchu />
          </Route>
          <Route path="/admin">
            <Ladmin />
          </Route>
          <Route path="/thongtin/:id">
            <Thongtin />
          </Route>
          <Route path="/dangnhap">
            <Ldangnhap />
          </Route>
          <Route path="/dangky">
            <Dangky />
          </Route>
          <Route path="/tour/:id">
            <Tour />
          </Route>
          <Route path="/list-tour/:id">
            <Listtour />
          </Route>
          <Route path="/list-tour">
            <Listtour />
          </Route>
          <Route path='/dat-tour'>
            <Dattour />
          </Route>
          <Route path='/create-tour'>
            <CreateTour />
          </Route>
          
          <Route path='/shoping-cart'>
            <ShopingCart />
          </Route>
          <Route path="/co-cau-to-chuc">
            {/* Phải viết hoa chữ cái đầu nhé */}
            <CoCauToChuc />
          </Route>

          <Route path='/stripe'>
            <Stripe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Ldangnhap() {
  let { url } = useRouteMatch();
  return (
    <Login url={url} />
  );
}
function Ladmin() {
  let { path, url } = useRouteMatch();
  if (localStorage.getItem("token")) {
    return <Admin path={path} url={url} />
  } else {
    return <Error />
  }
}