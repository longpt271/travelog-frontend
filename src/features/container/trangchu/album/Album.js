import React from "react";
import "./album.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";

import "./accsets/main.css";
import "./accsets/grid.css";
// import "../slider/accsets/responsive.css";

function Album(props) {
  const anh = useSelector(state => state.anhs.anh.data);
  var banner = []
  if (anh) {
    for (let i = 0; i < anh.length; i++) {
      if (anh[i].status === +1 && anh[i].banner === +1) {
        banner.push(anh[i]);
      }
    }
  }
  return (
    <div id="album" className="pt-5">
      <div className="heading text-center">
        <span>Album ảnh</span>
        <div className="hr"></div>
        <p>Khám phá thêm nhiều hình ảnh đẹp về các địa điểm trên toàn thế giới</p>
      </div>
      <div className="">
        <div class="container__growth">
          <div class="row no-gutters">
              <div class="col l-3.5">
                <div class="container__growth1 hide-on-mb-tl"></div>
              </div>
              <div class="col l-5">
                <div class="container__growth-content">
                <Carousel autoplay effect="fade">
                  {!banner ? '' :
                    banner.map(ok => (
                      <div className="fit" key={ok.id}>
                        <img src={ok.link} alt="" />
                      </div>
                    ))}
                </Carousel>
                </div>
              </div>
              <div class="col l-3.5">
                <div class="container__growth2 hide-on-mb-tl"></div>
              </div>
          </div>
        </div>
      </div>
    </div >

  )
}

Album.propTypes = {

}

export default Album
