import React from "react";
import "./album.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";

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
        {/* <span>Album ảnh</span> */}
        <div className="hr"></div>
        <p>Khám phá thêm nhiều hình ảnh đẹp về các địa điểm trên toàn thế giới</p>
      </div>
      <div className="">
        <div class="container">
                <Carousel autoplay arrows effect="fade">
                  {!banner ? '' :
                    banner.map(ok => (
                      <div key={ok.id}>
                        <img src={ok.link} alt="" />
                      </div>
                    ))}
                </Carousel>
        </div>
      </div>
    </div >

  )
}

Album.propTypes = {

}

export default Album
