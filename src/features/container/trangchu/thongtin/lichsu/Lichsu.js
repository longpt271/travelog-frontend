import React from 'react'
import "./lichsu.css"
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { QuestionCircleOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'
import { hoadonData, updatehoadon } from '../../../admin/Hoadon/hoadonSlice'
import { hoadoncanhanData, updatehoadoncanhan } from '../../../admin/Hoadoncanhan/hoadoncanhanSlice'
import "../duyettour/duyettour.css"

export default function Lichsu() {
    const infor = useSelector(state => state.infor.infor.data)
    const hoadons = useSelector(state => state.hoadons.hoadon.data)
    const hoadoncanhans = useSelector(state => state.hoadoncanhans.hoadoncanhan.data)
    let thongtin = []
    if (hoadons && infor) {
        for (let i = 0; i < hoadons.length; i++) {
            if (hoadons[i].userId === infor.id && hoadons[i].agree === 1) {
                thongtin.push(hoadons[i])
            }
        }
    }
    
    let thongtincanhan = []
    if (hoadoncanhans && infor) {
        for (let i = 0; i < hoadoncanhans.length; i++) {
            if (hoadoncanhans[i].userId === infor.id && hoadoncanhans[i].agree === 1) {
                thongtincanhan.push(hoadoncanhans[i])
            }
        }
    }

    // Phần duyệt hoàn thành và hủy hóa đơn của khách
    const dispatch = useDispatch()

    const actionResultHd = async () => { await dispatch(hoadonData()) }
    const done = (e) => {
        dispatch(updatehoadon({ agree: 2, idsua: e }))
        setTimeout(() => {
            actionResultHd();
        }, 500);
    }
    const huy = (e) => {
        dispatch(updatehoadon({ agree: 3, idsua: e }))
        setTimeout(() => {
            actionResultHd();
        }, 500);
    }

    const actionResultHdcn = async () => { await dispatch(hoadoncanhanData()) }
    const doneCanhan = (e) => {
        dispatch(updatehoadoncanhan({ agree: 2, idsua: e }))
        setTimeout(() => {
            actionResultHdcn();
        }, 500);
    }
    const huyCanhan = (e) => {
        dispatch(updatehoadoncanhan({ agree: 3, idsua: e }))
        setTimeout(() => {
            actionResultHdcn();
        }, 500);
    }

    return (
        <div className="history">
            <div className="history__header">
                <h3 className='text-center'>Lịch sử đặt tour</h3>
                <div className="hr"></div>
            </div>
            <div className="history__type">
                <h4>Hóa đơn tour</h4>
                <div className="hr-tour mb-3"></div>
            </div>
            <div className="history__content lichsuCosan_overflow">
                {thongtin.length === 0 ? <div className="spin"><Spin className="mt-5" /></div> :
                    thongtin.map((ok, index) => (
                            <div className="history__box" key={index}>
                                <Link to={`/tour/${ok.tourId}`}>
                                    <img src={ok.Tour.avatar} alt="" />
                                </Link>
                                <div className="history__tour">
                                    <div className="history--title">
                                        <div className="history--name">{ok.Tour.name}</div>
                                    </div>
                                    <div className="history--infor">
                                        <table>
                                            <tr>
                                                <th className="pl-2">Ngày khởi hành &emsp;&emsp;</th>
                                                <th className="pl-2">{ok.ngaydi}</th>
                                            </tr>
                                            <tr>
                                                <th className="pl-2">Thời gian</th>
                                                <th className="pl-2">{ok.Tour.thoigian} ngày</th>
                                            </tr>
                                            <tr>
                                                <th className="pl-2">Nơi khởi hành</th>
                                                <th className="pl-2">Hà Nội</th>
                                            </tr>
                                            <tr>
                                                <th className="pl-2">Hình thức thanh toán:</th>
                                                <th className="pl-2"><span>{ok.hinhthuc === 1 ? <span >Tiền mặt</span> : (ok.hinhthuc === 2 ? <span >Chuyển khoản</span> : <span>Qua thẻ</span>)}</span> </th>
                                            </tr>
                                        </table>
                                        <table className="nmn">
                                            <tr>
                                                <th>Số người lớn &emsp;&emsp;</th>
                                                <th>{ok.nguoilon}</th>
                                            </tr>
                                            <tr>
                                                <th>Số trẻ em</th>
                                                <th>{ok.treem}</th>
                                            </tr>
                                            <tr>
                                                <th>Số em bé</th>
                                                <th>{ok.embe}</th>
                                            </tr>
                                            <tr>
                                                <th>Tổng tiền</th>
                                                <th>{(ok.thanhtien).toLocaleString()} vnđ</th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div>
                                    <Popconfirm title="Bạn đã hoàn thành tour？" onConfirm={() => { done(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                        <i className="fas fa-check text-success icon-cosan"></i>
                                    </Popconfirm>
                                    <Popconfirm title="Bạn có muốn hủy tour？" onConfirm={() => { huy(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <i className="fas fa-times text-danger icon-cosan"></i>
                                    </Popconfirm>
                                </div>
                            </div>

                    ))
                }
            </div>
            <div className="history__type">
                <h4>Hóa đơn cá nhân</h4>
                <div className="hr-tour mb-3"></div>
            </div>
            <div className="history__content lichsuCanhan_overflow">
                {thongtincanhan.length === 0 ? <div className="spin"><Spin className="mt-5" /></div> :
                    thongtincanhan.map((ok, index) => (
                        <div className="history__box p-2" key={index}>
                            <div className="history__tour">
                                <div className="history--title">
                                    <div className="history--name">{ok.diadiemdi}</div>
                                </div>
                                <div className="history--infor">
                                    <table>
                                        <tr>
                                            <th className="pl-2">Nơi khởi hành:</th>
                                            <th className="pl-2">{ok.noikhoihanh}</th>
                                        </tr>
                                        <tr>
                                            <th className="pl-2">Ngày khởi hành:</th>
                                            <th className="pl-2">{ok.ngaykhoihanh}</th>
                                        </tr>
                                        <tr>
                                            <th className="pl-2">Tổng tiền:</th>
                                            <th className="pl-2">{(ok.giatien).toLocaleString()} vnđ</th>
                                        </tr>
                                        <tr>
                                            <th className="pl-2">Thông tin chi tiết:</th>
                                            <th className="pl-2">{ok.luuy}</th>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <Popconfirm title="Bạn đã hoàn thành tour？" onConfirm={() => { doneCanhan(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                    <i className="fas fa-check text-success icon-canhan"></i>
                                </Popconfirm>
                                <Popconfirm title="Bạn có muốn hủy tour？" onConfirm={() => { huyCanhan(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                    <i className="fas fa-times text-danger icon-canhan"></i>
                                </Popconfirm>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
