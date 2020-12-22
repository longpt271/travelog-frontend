
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer(props) {
  const footers = useSelector(state => state.lienhes.lienhe.data);
  const footer = [];
  if (footers) {
    for (let i = 0; i < footers.length; i++) {
      if (footers[i].status === 1) {
        footer.push(footers[i])
      }
    }
  }
  const mxhs = useSelector(state => state.mangxahois.mangxahoi.data);
  const mxh = [];
  if (footers && mxhs) {
    for (let i = 0; i < mxhs.length; i++) {
      if (mxhs[i].status === 1) {
        mxh.push(mxhs[i])
      }
    }
  }
  return (
    <div id="footer">
      <footer className="page-footer font-small blue pt-4 container">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            {footer.map(ok => (
              <div className="col-md-6 mt-md-0 mt-3" key={ok.id}>
                <h5 className="text-uppercase text-danger">Footer Content</h5>
                <p>{ok.content}</p>
                <h5 className="text-uppercase text-danger mt-3">Liên hệ</h5>
                <p>
                  <strong>Email: </strong>
                  <i>{ok.email}</i>
                </p>
                <p>
                  <strong>Số điện thoại: </strong>
                  <i>+{ok.sdt}</i>
                </p>
                <p>
                  <strong>Địa chỉ: </strong>
                  <i>{ok.diachi}</i>
                </p>
              </div>
            ))}
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-danger">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Trang chủ
                </a>
                </li>
                <li>
                  <a href="#!">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Tin tức
                </a>
                </li>
                <li>
                  <a href="#!">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Dịch vụ
                </a>
                </li>
                <li>
                  <a href="#!">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Khuyến mãi
                </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 mxh">
              <h5 className="text-uppercase text-danger">Mạng xã hội</h5>
              {mxh.map(ok => (
                <Link key={ok.id}>
                  <div className="icon_footer" style={{
                    background: `${ok.color}`
                  }}>
                    <i className={`${ok.icon}`} ></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
        <a href="https://mdbootstrap.com/">
            Công ty thương mại Vinhtravel.
        </a>
        </div>
      </footer>
    </div >

  )
}

Footer.propTypes = {

}

export default Footer
