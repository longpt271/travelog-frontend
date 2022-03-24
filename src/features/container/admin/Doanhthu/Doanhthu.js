import React, { useEffect, useState } from 'react'
import { Modal, Progress } from 'antd'
import { Button } from '@material-ui/core';
import './doanhthu.css'
import { useDispatch, useSelector } from 'react-redux';
import { chitieuData } from './chitieuSlice';
import Axios from 'axios';
import { userData } from '../taikhoan/taikhoanSlice';
import anhnen from "../../../images/people-blue.png";



export default function Doanhthu() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [state, setState] = useState({ chitieuthang: "", chitieungay: "", chitieunam: "" });
    // const [usd, setusd] = useState(1);
    const [usd, setusd] = useState(23060);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const chiphi = useSelector(state => state.chiphis.chiphi.data);
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(userData()) }

    let TongChiPhi = 0;

    if (chiphi) {
        for (let i = 0; i < chiphi.length; i++) {
            TongChiPhi += chiphi[i].money;
        }
    }
    const actionChitiet = async () => await dispatch(chitieuData());
    const chitieu = useSelector(state => state.chitieu.chitieu.data);
    useEffect(() => {
        // Axios.get("https://free.currconv.com/api/v7/convert?q=USD_VND&compact=ultra&apiKey=6c24709f2cfc058a0499").then(data => {
        //     setusd(data.data.USD_VND)
        // })
        actionResult();
        if (chitieu) {
            setState({
                ...state,
                chitieungay: chitieu[0].chitieungay,
                chitieuthang: chitieu[0].chitieuthang,
                chitieunam: chitieu[0].chitieunam
            })
        } else {
            actionChitiet();
        }
    }, [chitieu])
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    
    const SoTour = useSelector(state => state.tours.tour.data)
    const SoDiaDiem = useSelector(state => state.diadiems.diadiem.data)
    const SoAnh = useSelector(state => state.anhs.anh.data);
    const SoBinhLuan = useSelector(state => state.binhluans.binhluan.data);
    
    const SoNguoiDung = useSelector(state => state.taikhoan.user.data);
    const HoaDon = useSelector(state => state.hoadons.hoadon.data);
    const HoaDonCaNhan = useSelector(state => state.hoadoncanhans.hoadoncanhan.data);


    // Hóa đơn chưa thanh toán
    
    let TongHdUnPay = 0;
    if (HoaDon) {
        for (let i = 0; i < HoaDon.length; i++) {
            if(HoaDon[i].agree === 2 && HoaDon[i].pay !== 1) {
                TongHdUnPay += HoaDon[i];
            }
        }
    }
    let TongHdcnUnPay = 0;
    if (HoaDonCaNhan) {
        for (let i = 0; i < HoaDonCaNhan.length; i++) {
            if(HoaDonCaNhan[i].agree === 2 && HoaDonCaNhan[i].pay !== 1) {
                TongHdcnUnPay += HoaDonCaNhan[i];
            }
        }
    }

    
    // Date chỉ tiêu, thu hóa đơn
    let HoaDonDate = []
    if (HoaDon) {
        for (let i = 0; i < HoaDon.length; i++) {
            let date = new Date(HoaDon[i].createdAt);
            HoaDonDate.push({ id: HoaDon[i].id, tongtien: HoaDon[i].thanhtien, date: (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getFullYear() })
        }
    }
    let ThuNhapHdHomNay = 0;
    if (HoaDonDate) {
        let date = new Date();
        let dateToday = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getFullYear();
        for (let i = 0; i < HoaDonDate.length; i++) {
            if (HoaDonDate[i].date == dateToday && HoaDon[i].agree === 2 && HoaDon[i].pay === 1) {
                ThuNhapHdHomNay += HoaDonDate[i].tongtien;
            }
        }
    }
    let ThuNhapHdThang = 0;
    if (HoaDonDate) {
        let date = new Date();
        let dateMonth = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getFullYear();
        for (let i = 0; i < HoaDonDate.length; i++) {
            if ((HoaDonDate[i].date).substr(3) == dateMonth && HoaDon[i].agree === 2 && HoaDon[i].pay === 1) {
                ThuNhapHdThang += HoaDonDate[i].tongtien;
            }
        }
    }
    let ThuNhapHdNam = 0;
    if (HoaDonDate) {
        let date = new Date();
        let dateYear = date.getFullYear();
        for (let i = 0; i < HoaDonDate.length; i++) {
            if ((HoaDonDate[i].date).substr(6) == dateYear && HoaDon[i].agree === 2 && HoaDon[i].pay === 1) {   //date không để === được sẽ lỗi
                ThuNhapHdNam += HoaDonDate[i].tongtien;
            }
        }
    }


    // Date chỉ tiêu, thu hóa đơn cá nhân
    let HoaDonCaNhanDate = []
    if (HoaDonCaNhan) {
        for (let i = 0; i < HoaDonCaNhan.length; i++) {
            let date = new Date(HoaDonCaNhan[i].createdAt);
            HoaDonCaNhanDate.push({ id: HoaDonCaNhan[i].id, tongtien: HoaDonCaNhan[i].giatien, date: (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getFullYear() })
        }
    }
    let ThuNhapHdCaNhanHomNay = 0;
    if (HoaDonCaNhanDate) {
        let date = new Date();
        let dateToday = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "-" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getFullYear();
        for (let i = 0; i < HoaDonCaNhanDate.length; i++) {
            if (HoaDonCaNhanDate[i].date == dateToday && HoaDonCaNhan[i].agree === 2 && HoaDonCaNhan[i].pay === 1) {
                ThuNhapHdCaNhanHomNay += HoaDonCaNhanDate[i].tongtien;
            }
        }
    }
    let ThuNhapHdCaNhanThang = 0;
    if (HoaDonCaNhanDate) {
        let date = new Date();
        let dateMonth = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getFullYear();
        for (let i = 0; i < HoaDonCaNhanDate.length; i++) {
            if ((HoaDonCaNhanDate[i].date).substr(3) == dateMonth && HoaDonCaNhan[i].agree === 2 && HoaDonCaNhan[i].pay === 1) {
                ThuNhapHdCaNhanThang += HoaDonCaNhanDate[i].tongtien;
            }
        }
    }
    let ThuNhapHdCaNhanNam = 0;
    if (HoaDonCaNhanDate) {
        let date = new Date();
        let dateYear = date.getFullYear();
        for (let i = 0; i < HoaDonCaNhanDate.length; i++) {
            if ((HoaDonCaNhanDate[i].date).substr(6) == dateYear && HoaDonCaNhan[i].agree === 2 && HoaDonCaNhan[i].pay === 1) {
                ThuNhapHdCaNhanNam += HoaDonCaNhanDate[i].tongtien;
            }
        }
    }

    //Tổng date thu nhập
    let ThuNhapHomNay = ThuNhapHdHomNay + ThuNhapHdCaNhanHomNay;
    let ThuNhapThang = ThuNhapHdThang + ThuNhapHdCaNhanThang;
    let ThuNhapNam = ThuNhapHdNam + ThuNhapHdCaNhanNam;

    // Tổng thu nhập toàn thời gian tất cả hóa đơn khi đã hoàn thành
    let TongThuNhapHd = 0;
    if (HoaDon) {
        for (let i = 0; i < HoaDon.length; i++) {
            if(HoaDon[i].agree === 2 && HoaDon[i].pay === 1) {
                TongThuNhapHd += HoaDon[i].thanhtien;
            }
        }
    }
    console.log(usd);
    let TongThuNhapHdCaNhan = 0;
    if (HoaDonCaNhan) {
        for (let i = 0; i < HoaDonCaNhan.length; i++) {
            if(HoaDonCaNhan[i].agree === 2 && HoaDonCaNhan[i].pay === 1) {
                TongThuNhapHdCaNhan += HoaDonCaNhan[i].giatien;
            }
        }
    }
    let TongThuNhap = Number(TongThuNhapHd + TongThuNhapHdCaNhan);

    // Lợi nhuận
    const LoiNhuan = (a, b) => {
        return (b - a).toLocaleString();
    }
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    // let thunhapHd = Number((TongThuNhapHd / usd).toFixed(0));
    let thunhapHdvnd = Number((TongThuNhapHd).toFixed(0));
    // let thunhapcanhan = ((TongThuNhapHdCaNhan / usd).toFixed(0));
    let thunhapcanhanvnd = Number((TongThuNhapHdCaNhan).toFixed(0));
    let thunhap = Number((TongThuNhap / usd).toFixed(0));
    let thunhapvnd = Number((TongThuNhap).toFixed(0));
    
    let chiphitong = Number(((TongChiPhi / usd).toFixed(0)));
    let chiphitongvnd = Number(((TongChiPhi).toFixed(0)));
    const { chitieunam, chitieuthang, chitieungay } = state

    let phantramngay = Number((ThuNhapHomNay/chitieungay)*100).toFixed(1);
    let phantramthang = Number((ThuNhapThang/chitieuthang)*100).toFixed(1);
    let phantramnam = Number((ThuNhapNam/chitieunam)*100).toFixed(1);
    return (
        <div id="doanhthu">
            
            <div class="row">
                <div class="col-md-12 grid-margin">
                <div class="row">
                    <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold">Welcome</h3>
                    <h6 class="font-weight-normal mb-0">All systems are running smoothly! Have nice day!</h6>
                    </div>
                </div>
            </div>
            </div>
            <div class="row">
                <div class="col-md-6 grid-margin stretch-card">
                    <div class="card tale-bg">
                        <div class="card-people mt-auto">
                        <img src={anhnen} alt="people" />
                        <div class="weather-info">
                            <div class="grid">
                                <div>
                                    <h2 class="mb-0 font-weight-normal"><i class="far fa-sun mr-2"></i>31<sup>&deg;C</sup></h2>
                                </div>
                                <div class="ml-2">
                                    <h4 class="location font-weight-normal">Hà Nội</h4>
                                    <h6 class="font-weight-normal">Việt Nam</h6>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 grid-margin transparent">
                    {/* Phần thống kê tour */}
                    <div class="row">
                        <div class="col-md-3 mb-4 stretch-card transparent">
                            <div class="card card-1">
                                <div class="card-body">
                                    <strong class="mb-4">Số tour đã tạo:</strong><br />
                                    <span class="fs-30">{SoTour ? SoTour.length : 0}</span>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-3 mb-4 stretch-card transparent">
                            <div class="card card-1">
                                <div class="card-body">
                                    <strong class="mb-4">Số địa điểm đã tạo:</strong><br />
                                    <span class="fs-30">{SoDiaDiem ? SoDiaDiem.length : 0}</span>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-3 mb-4 stretch-card transparent">
                            <div class="card card-1">
                                <div class="card-body">
                                    <strong class="mb-4">Ảnh đã tải lên:</strong><br />
                                    <span class="fs-30">{SoAnh ? SoAnh.length : 0}</span>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-3 mb-4 stretch-card transparent">
                            <div class="card card-1">
                                <div class="card-body">
                                    <strong class="mb-4">Lượt bình luận:</strong><br />
                                    <span class="fs-30">{SoBinhLuan ? SoBinhLuan.length : 0}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Phần thống kê hóa đơn & user */}
                    <div class="row">
                        <div class="col-md-6 mb-4 stretch-card transparent">
                        <div class="card card-2">
                            <div class="card-body">
                                <div className="">
                                        <strong class="">Tổng số hóa đơn</strong><br />
                                        <span class="fs-30"><strong>{HoaDonCaNhan.length + HoaDon.length}</strong></span>
                                </div>
                                <div className="grid">
                                <div>
                                    <span>Hóa đơn tour: <strong>{HoaDon ? HoaDon.length : 0}</strong></span><br />
                                    <span>Hóa đơn cá nhân: <strong>{HoaDonCaNhan ? HoaDonCaNhan.length : 0}</strong></span><br />
                                </div>
                                <div>
                                    <span class="mb-2">Tour chưa thanh toán: <strong>{TongHdUnPay.length}</strong></span><br />
                                    <span class="mb-2">Tour cá nhân chưa thanh toán: <strong>{TongHdcnUnPay.length}</strong></span><br />
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 mb-4 stretch-card transparent">
                        <div class="card card-2">
                            <div class="card-body">
                                <strong class="">Tổng số tài khoản</strong><br />
                                <span class="fs-30"><strong>{SoNguoiDung ? SoNguoiDung.length : 0}</strong></span>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Phần thống kê thu chi */}
                    <div class="row">
                        <div class="col-md-4 mb-4 mb-lg-0 stretch-card transparent">
                            <div class="card card-3">
                                <div class="card-body">
                                    <div className="mb-2">
                                        <strong class="mb-4">Tổng thu nhập</strong><br />
                                        <span class="mb-2"><span class="fs-30">{TongThuNhap ? thunhapvnd.toLocaleString() : 0}</span> ($ {TongThuNhap ? thunhap.toLocaleString() : 0})</span><br />
                                        <span class="mb-2">Tổng thu tour: <strong>{TongThuNhapHd ? thunhapHdvnd.toLocaleString() : 0} vnđ</strong></span><br />
                                        <span class="mb-2">Tổng thu cá nhân: <strong>{TongThuNhapHdCaNhan ? thunhapcanhanvnd.toLocaleString() : 0} vnđ</strong></span><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 stretch-card transparent">
                            <div class="card card-3">
                                <div class="card-body">
                                    <div className="mb-2">
                                        <strong class="mb-4">Tổng chi phí</strong><br />
                                        <span class="mb-2"><span class="fs-30">{chiphitongvnd.toLocaleString()}</span> ($ {chiphitong.toLocaleString()})</span><br />
                                        <span class="mb-2"><strong></strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 stretch-card transparent">
                            <div class="card card-3">
                                <div class="card-body">
                                    <div className="mb-2">
                                        <strong class="mb-4">Tổng lợi nhuận</strong><br />
                                        <span class="mb-2"><span class="fs-30">{LoiNhuan(chiphitongvnd, thunhapvnd)}</span> ($ {LoiNhuan(chiphitong, thunhap)})</span><br />
                                        <span class="mb-2"><strong></strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   

            {/* phần thống kê chỉ têu */}
            <div className="container text-center">
                <div className="row pt-3 pb-2">
                    <div className="col-md-4">
                        <Progress strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} type="dashboard" percent={phantramngay} />

                        <div>
                            <h5 className="chitieuModal" onClick={showModal}>Chỉ tiêu ngày</h5>
                                <strong className="gold">{chitieungay.toLocaleString()} <span className="text-danger bold">vnđ</span></strong><br />
                                <span>Vượt chỉ tiêu: <span className="gold">{(ThuNhapHomNay - chitieungay).toLocaleString()} <span className="text-danger bold">vnđ</span></span></span>
                            <div className="hr"></div>
                            <div className="mt-2">
                                <span>Tổng thu: <span className="gold">{ThuNhapHomNay.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                                <span>Tổng thu tour: <span className="gold">{ThuNhapHdHomNay.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                                <span>Tổng thu cá nhân: <span className="gold">{ThuNhapHdCaNhanHomNay.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <Progress strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} type="dashboard" percent={phantramthang} />

                        <div>
                            <h5 className="chitieuModal" onClick={showModal}>Chỉ tiêu tháng</h5>
                                <strong className="gold">{chitieuthang.toLocaleString()} <span className="text-danger bold">vnđ</span></strong><br />
                                <span>Vượt chỉ tiêu: <span className="gold">{(ThuNhapThang - chitieuthang).toLocaleString()} <span className="text-danger bold">vnđ</span></span></span>
                            <div className="hr"></div>
                            <div className="mt-2">
                                <span>Tổng thu: <span className="gold">{ThuNhapThang.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                                <span>Tổng thu tour: <span className="gold">{ThuNhapHdThang.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                                <span>Tổng thu cá nhân: <span className="gold">{ThuNhapHdCaNhanThang.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Progress strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} type="dashboard" percent={phantramnam} />

                        <div>
                            <h5 className="chitieuModal" onClick={showModal}>Chỉ tiêu năm</h5>
                                <strong className="gold">{chitieunam.toLocaleString()} <span className="text-danger bold">vnđ</span></strong><br />
                                <span>Vượt chỉ tiêu: <span className="gold">{(ThuNhapNam - chitieunam).toLocaleString()} <span className="text-danger bold">vnđ</span></span></span>
                            <div className="hr"></div>
                            <div className="mt-2">
                                <span>Tổng thu: <span className="gold">{ThuNhapNam.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                                <span>Tổng thu tour: <span className="gold">{ThuNhapHdNam.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                                <span>Tổng thu cá nhân: <span className="gold">{ThuNhapHdCaNhanNam.toLocaleString()} <span className="text-danger bold">vnđ</span></span></span><br />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Modal title="Đặt chỉ tiêu" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div class="form-group">
                    <label for="">Chỉ tiêu ngày</label>
                    <input type="number" name="chitieungay" value={chitieungay} onChange={onChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
                </div>

                <div class="form-group">
                    <label for="">Chỉ tiêu tháng</label>
                    <input type="number" name="chitieuthang" value={chitieuthang} onChange={onChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
                </div>
                <div class="form-group">
                    <label for="">Chỉ tiêu năm</label>
                    <input type="number" name="chitieunam" value={chitieunam} onChange={onChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
                </div>
            </Modal>
            
        </div>

    )
}