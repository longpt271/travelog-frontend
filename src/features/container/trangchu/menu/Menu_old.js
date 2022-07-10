import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as Linkrt } from "react-router-dom";
import "./menu.css";
import Avatar from "antd/lib/avatar/avatar";
import logo from "./../../../images/logoTravel.png"
import { Menu, Dropdown, Drawer, message} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@material-ui/core";
import { storage } from "../../../../firebase"
import { inforData } from "../../login/inforSlice";
import taikhoanApi from "../../../../api/taikhoanApi";

import Search from 'antd/lib/input/Search';


function ListMenu(props) {

  const [avatar, setAvatar] = useState('');
  const [state, setState] = useState({
    collapsed: false,
    visible: false,
    collapsed2: false,
    visible2: false,
    name: '', gioitinh: 1, diachi: '', ngaysinh: '', sdt: '', anh: "", linkImg: '', tenanh: '', img: ''
  });
  const hangdelimage = (e) => {
    setState({
      ...state,
      linkImg: URL.createObjectURL(e.target.files[0]),
      tenanh: e.target.files[0].name,
      img: e.target.files[0],
    });
  }
  const showDrawer = () => {
    if (users) {
      setState({
        ...state,
        visible: true
      })
    } else {
      message.error("Bạn cần phải đăng nhập trước!")
    }
  };
  const showDrawer2 = () => {
    if (users) {
      setState({
        ...state,
        visible2: true
      })
    } else {
      message.error("Bạn cần phải đăng nhập trước!")
    }
  };
  const users = useSelector(state => state.infor.infor.data);
  const [user, setUser] = useState()

  const onClose = () => {
    setState({
      ...state,
      visible: false
    })
  };
  const onClose2 = () => {
    setState({
      ...state,
      visible2: false
    })
  };
  const getprofile = async () => {
    if (users) {
      var ok = await taikhoanApi.getOne(users.id).then(ok => {
        return ok;
      });
      setUser(ok)
      setAvatar(ok.avatar)
    }
  }
  useEffect(() => {
    getprofile()
    setAvatar('')
  }, [users])
  const actioninfor = async () => { await dispatch(inforData()) }
  const logout = () => {
    localStorage.removeItem("token");
    actioninfor()
    setAvatar('')
    setUser("")
  }
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const phanquyen = () => {
    var check = users.role;
    if (check) {
      if (check === "user") {
        return false;
      } else {
        return true;
      }
    }
  }

  const { SubMenu } = Menu;   // Thêm thẻ Sub menu

  const menuTourTrongNuoc = (
    <Menu>
      <SubMenu key="sub1" title={"Miền Bắc"}>
        <Menu.Item key="0">
          <Linkrt to="/list-tour">Đông Bắc Bộ</Linkrt>
        </Menu.Item>
        <Menu.Item key="0">
          <Linkrt to="/list-tour">Tây Bắc Bộ</Linkrt>
        </Menu.Item>
      </SubMenu>
        <Menu.Item key="1">
          <Linkrt to="/list-tour">Miền Trung</Linkrt>
        </Menu.Item>
      <SubMenu key="sub2" title={"Miền Nam"}>
        <Menu.Item key="2">
          <Linkrt to="/list-tour">Đông Nam Bộ</Linkrt>
        </Menu.Item>
        <Menu.Item key="3">
          <Linkrt to="/list-tour">Tây Nam Bộ</Linkrt>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="sub3" title={"Tour đặc biệt"}>
        <Menu.Item key="4">
          <Linkrt to="/list-tour">Tour tự do</Linkrt>
        </Menu.Item>
        <Menu.Item key="5">
          <Linkrt to="/list-tour">Tour theo yêu cầu</Linkrt>
        </Menu.Item>
        <Menu.Item key="6">
          <Linkrt to="/list-tour">Tour theo chủ đề</Linkrt>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );

  const menuTourNuocNgoai = (
    <Menu>
        <Menu.Item key="0">
          <Linkrt to="/list-tour">Châu Á</Linkrt>
        </Menu.Item>
        <Menu.Item key="0">
          <Linkrt to="/list-tour">Châu Âu</Linkrt>
        </Menu.Item>
        <Menu.Item key="1">
          <Linkrt to="/list-tour">Châu Mỹ</Linkrt>
        </Menu.Item>
        <Menu.Item key="2">
          <Linkrt to="/list-tour">Châu Úc</Linkrt>
        </Menu.Item>
        <Menu.Item key="3">
          <Linkrt to="/list-tour">Châu Phi</Linkrt>
        </Menu.Item>
      <SubMenu key="sub3" title={"Tour đặc biệt"}>
        <Menu.Item key="4">
          <Linkrt to="/list-tour">Tour tự do</Linkrt>
        </Menu.Item>
        <Menu.Item key="5">
          <Linkrt to="/list-tour">Tour theo yêu cầu</Linkrt>
        </Menu.Item>
        <Menu.Item key="6">
          <Linkrt to="/list-tour">Tour theo chủ đề</Linkrt>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );

  const menuDichVu = (
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
      <Menu.Item key="4">
        <Linkrt to="/list-tour">Bảo hiểm du lịch</Linkrt>
      </Menu.Item>
      <Menu.Item key="5">
        <Linkrt to="/list-tour">Quà lưu niệm</Linkrt>
      </Menu.Item>
      <Menu.Item key="6">
        <Linkrt to="/list-tour">Đăng ký thẻ thành viên</Linkrt>
      </Menu.Item>
    </Menu>
  );

  const menuAvatar = (
    <Menu>
      <Menu.Item key="3">
        <span onClick={showDrawer}>Xem thông tin</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Linkrt to="/thongtin/0">Xem lịch sử</Linkrt>
      </Menu.Item>
      {users ? phanquyen() ?
        <Menu.Item key="5">
          <Linkrt to="/admin" className="nav-link">Quản lý admin</Linkrt>
        </Menu.Item>
        : "" : ""}

      <Menu.Divider />

      {users ? 
        <Menu.Item key="0">
          <Linkrt to="/dangnhap">Đổi tài khoản</Linkrt>
        </Menu.Item>
        :
        <Menu.Item key="0">
          <Linkrt to="/dangnhap">Đăng nhập</Linkrt>
        </Menu.Item> }
      
      {users ? 
        <Menu.Item key="1">
          <span onClick={logout}>Đăng xuất</span>
        </Menu.Item>
        : 
        <Menu.Item key="2">
          <Linkrt to="/dangky">Đăng ký</Linkrt>
        </Menu.Item> }
    </Menu>
  );

  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault();
    var idsua = user.id
    if (name.trim() === "" || diachi.trim() === "" || gioitinh === "" || ngaysinh.trim() === "" || sdt.trim() === "") {
      message.warning("Bạn chưa nhập đủ thông tin!")
    } else {
      if (img) {
        await storage.ref(`imagesUser/${img.name}`).put(img)
        const anh = await storage.ref("imagesUser").child(img.name).getDownloadURL();
        var update = await taikhoanApi.edituser({ idsua: idsua, name: name, avatar: anh, diachi: diachi, gioitinh: gioitinh, ngaysinh: ngaysinh, sdt: sdt, status: 1 })
          .then(data => {
            return data;
          })
        // console.log(update);
        if (update) {
          getprofile()
          message.success("Sửa thông tin thành công!");
          setState({
            visible2: false,
            name: '', gioitinh: 1, diachi: '', ngaysinh: '', sdt: '', anh: "", linkImg: '', tenanh: '', img: ''
          })
        } else {
          message.error("Sửa thất bại!");
        }
      }
      else {
        var update = await taikhoanApi.edituser({ idsua: idsua, name: name, diachi: diachi, sdt: sdt, gioitinh: gioitinh, ngaysinh: ngaysinh })
          .then(data => {
            return data;
          })
        // console.log(update);
        if (update) {
          getprofile();
          message.success("Sửa thông tin thành công!");
          setState({
            visible2: false,
            name: '', gioitinh: 1, diachi: '', ngaysinh: '', sdt: '', anh: "", linkImg: '', tenanh: '', img: ''
          })
        } else {
          message.error("Sửa thất bại!");
        }
      }
    }
  }
  const hangdleGioitinh = (e) => {
    setState({
      ...state,
      gioitinh: e.target.value
    })
  }

  const formatdate = e => {
    if (e) {
      var ngay = e.substr(8, 2)
      var thang = e.substr(5, 2)
      var nam = e.substr(0, 4)
      return ngay + '/' + thang + '/' + nam;
    }
  }

  const { name, diachi, ngaysinh, gioitinh, sdt, linkImg, img } = state


  return (
    <div id="menu">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <Linkrt className="navbar-brand mr-0" to="/" >
          <img src={logo} alt="" />
        </Linkrt>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <Search placeholder="Tìm kiếm tour" className="searchMenu" enterButton />
        </div>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto" style={{ justifyContent: 'center', alignItems: 'center'}}>
            {/* <li className="nav-item ">
              <Link
                className="nav-link"
                activeClass="active"
                to="slider"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Trang chủ<span className="sr-only">(current)</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="create-tour"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Tour cá nhân
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Dropdown overlay={menuTourTrongNuoc} trigger={['hover']}>
                <span className="nav-link">
                  Tour trong nước <i className="fas fa-angle-down"></i>
                </span>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown overlay={menuTourNuocNgoai} trigger={['hover']}>
                <span className="nav-link">
                  Tour nước ngoài <i className="fas fa-angle-down"></i>
                </span>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown overlay={menuDichVu} trigger={['hover']}>
                <span className="nav-link">
                  Dịch vụ <i className="fas fa-angle-down"></i>
                </span>
              </Dropdown>
            </li> */}
            <li className="nav-item">
                <Linkrt
                  className="nav-link"
                  to="/co-cau-to-chuc"
                >
                  Về chúng tôi
                </Linkrt>
            </li>
            <li className="nav-item">
              <Linkrt
                className="nav-link"
                to="/list-tour"
              >
                Liên hệ
              </Linkrt>
            </li>
            <li className="nav-item">
                <Linkrt
                  className="nav-link"
                  to="/list-tour"
                >
                  <i className="fas fa-cart-arrow-down"></i>
                </Linkrt>
            </li>

            <li className="nav-item mr-3">
              <Dropdown overlay={menuAvatar} trigger={['click']}>
                <span className="nav-link" >
                  <Avatar size="large" style={{ border: "2px solid #0abf54" }} src={
                    user ?
                      avatar ?
                        avatar :
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGtmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDMtMTBUMTU6NDI6MTQrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAzLTEwVDE2OjE2OjIyKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTEwVDE2OjE2OjIyKzA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMzVmNjhkLTg5ZGItNzg0OS1iYTM0LWVjYzFkMzc3MGMxZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzg0MTZGRjE3M0UxMUUzOTYyOEE4QkM2OUVGODdCNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkU3ODQxNkZGMTczRTExRTM5NjI4QThCQzY5RUY4N0I3IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTc4NDE2RkMxNzNFMTFFMzk2MjhBOEJDNjlFRjg3QjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTc4NDE2RkQxNzNFMTFFMzk2MjhBOEJDNjlFRjg3QjciLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjAyZDg2NGYtZjA4NC1iMTRjLTliYTYtZDY5MDg1ZjkxY2JiIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTEwVDE2OjE0OjEyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMzVmNjhkLTg5ZGItNzg0OS1iYTM0LWVjYzFkMzc3MGMxZCIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xMFQxNjoxNjoyMiswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgI9I1UAAAkESURBVHic7d1ddtvG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" :    //Link ảnh sau khi đã tạo tài khoản và đăng nhập. chưa upload avt mới
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGtmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDMtMTBUMTU6NDI6MTQrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAzLTEwVDE2OjE2OjIyKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTEwVDE2OjE2OjIyKzA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMzVmNjhkLTg5ZGItNzg0OS1iYTM0LWVjYzFkMzc3MGMxZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzg0MTZGRjE3M0UxMUUzOTYyOEE4QkM2OUVGODdCNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkU3ODQxNkZGMTczRTExRTM5NjI4QThCQzY5RUY4N0I3IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTc4NDE2RkMxNzNFMTFFMzk2MjhBOEJDNjlFRjg3QjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTc4NDE2RkQxNzNFMTFFMzk2MjhBOEJDNjlFRjg3QjciLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjAyZDg2NGYtZjA4NC1iMTRjLTliYTYtZDY5MDg1ZjkxY2JiIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTEwVDE2OjE0OjEyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMzVmNjhkLTg5ZGItNzg0OS1iYTM0LWVjYzFkMzc3MGMxZCIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xMFQxNjoxNjoyMiswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgI9I1UAAAkESURBVHic7d1ddtvG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"        //Link ảnh khi chưa đăng nhập
                  } >U</Avatar>
                </span>
              </Dropdown>
            </li>
          </ul>

        </div>
      </nav>
      <Drawer
        style={{ zIndex: '100000' }}
        className="drawer-menu"
        title="Thông tin cá nhân"
        placement="right"
        onClose={onClose}
        visible={state.visible}
      >
        {!user ? "" :
          <div >
            <div>
              <div className="center"><img src={user ? avatar ? avatar : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGtmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDMtMTBUMTU6NDI6MTQrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAzLTEwVDE2OjE2OjIyKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTEwVDE2OjE2OjIyKzA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMzVmNjhkLTg5ZGItNzg0OS1iYTM0LWVjYzFkMzc3MGMxZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzg0MTZGRjE3M0UxMUUzOTYyOEE4QkM2OUVGODdCNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkU3ODQxNkZGMTczRTExRTM5NjI4QThCQzY5RUY4N0I3IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTc4NDE2RkMxNzNFMTFFMzk2MjhBOEJDNjlFRjg3QjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTc4NDE2RkQxNzNFMTFFMzk2MjhBOEJDNjlFRjg3QjciLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjAyZDg2NGYtZjA4NC1iMTRjLTliYTYtZDY5MDg1ZjkxY2JiIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTEwVDE2OjE0OjEyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMzVmNjhkLTg5ZGItNzg0OS1iYTM0LWVjYzFkMzc3MGMxZCIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xMFQxNjoxNjoyMiswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgI9I1UAAAkESURBVHic7d1ddtvG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" : ""} className="avatar-admin" alt="" /></div>
              <h4>Cá nhân</h4>
              <div className="row">
                <div className="col-md-12">
                  <p className="mb-2"><span>Họ tên:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{user.name}</span></p>
                  <p className="mb-2"><span>Giới tính:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{user.gioitinh === +1 ? "Nam" : "Nữ"}</span></p>
                  <p className="mb-2"><span>Ngày sinh:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{formatdate(user.ngaysinh)}</span></p>
                </div>
                <div className="col-md-6">
                </div>
              </div>
            </div>
            <hr />

            <h4>Liên hệ</h4>
            <div className="row">
              <div className="col-md-12">
                <p className="mb-2"><span>Email:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{user.email}</span></p>
                <p className="mb-2"><span>Số điện thoại:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{user.sdt}</span></p>
                <p className="mb-2"><span>Địa chỉ:&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="tt-user">{user.diachi}</span></p>
              </div>
            </div>
            <div className="text-center">
              <Button variant="contained" color="" onClick={showDrawer2} className=" mt-2">Thay đổi thông tin</Button>
            </div>
          </div>
        }
      </Drawer>
      <Drawer
        style={{ zIndex: '100001' }}
        className="drawer-menu"
        title="Sửa thông tin cá nhân"
        placement="right"
        onClose={onClose2}
        visible={state.visible2}
      >
        <form action="" method="post" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">Tên người dùng</label>
            <input type="text" name="name" value={name} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
          </div>
          <div className="form-group">
            <label htmlFor="">Thêm poster</label>
            <div >
              <input accept="image/*" id="icon-button-file" type="file" onChange={hangdelimage} />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" className="mr-5 ml-4" aria-label="upload picture" component="span">
                  <i className="fas fa-camera-retro"></i>
                </IconButton>
              </label>
              {linkImg ? <img src={linkImg} className="ml-5" style={{ borderRadius: "100%" }} height="100px" width="100px" alt="" /> : ''}
              <br />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Giới tính</label>
            <select className="form-control" onChange={hangdleGioitinh} >
              <option value="1">Nam</option>
              <option value="0">Nữ</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Số điện thoại</label>
            <input type="text" name="sdt" value={sdt} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
          </div>
          <div className="form-group">
            <label htmlFor="">Địa chỉ</label>
            <input type="text" name="diachi" value={diachi} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
          </div>
          <div className="form-group">
            <label htmlFor="">Ngày sinh</label>
            <input type="date" format="dd/mm/YYYY" name="ngaysinh" value={ngaysinh} onChange={onChange} className="form-control " placeholder="" aria-describedby="helpId" />
            
          </div>
          <div className="text-center">
            <Button type="submit" variant="contained" color="primary" className=" mt-2">Sửa đổi</Button>
          </div>
        </form>
      </Drawer>
    </div>

  )
}

ListMenu.propTypes = {

}

export default ListMenu