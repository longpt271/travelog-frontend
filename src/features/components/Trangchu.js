import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "../container/trangchu/category/Category";
import Album from "../container/trangchu/album/Album";
import Slider from "../container/trangchu/slider/Slider";
import CreateTour from "../container/createTour/CreateTour";
import Tourtrongnuoc from "../container/trangchu/tourtrongnuoc/Tourtrongnuoc";
import Tournuocngoai from "../container/trangchu/tournuocngoai/Tournuocngoai";
import Camnangdulich from "../container/trangchu/camnangdulich/Camnangdulich";
import Ykienkhachhang from "../container/trangchu/ykienkhachhang/ykienkhachhang";
import Footer from "../container/trangchu/footer/Footer";
export class Trangchu extends Component {

  render() {
    return (
      <div>
        <Slider />
        <CreateTour />
        <Category />
        {/* <Album /> */}
        <Tourtrongnuoc />
        {/* <Tournuocngoai /> */}
        <Camnangdulich />
        <Ykienkhachhang />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Trangchu);
