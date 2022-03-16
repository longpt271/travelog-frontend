import React from 'react'
import "./lichsu.css"
import { Spin } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Button } from '@material-ui/core'
import { Popconfirm } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { hoadonData, updatehoadon } from '../../../admin/Hoadon/hoadonSlice'
import { hoadoncanhanData, updatehoadoncanhan } from '../../../admin/Hoadoncanhan/hoadoncanhanSlice'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../duyettour/duyettour.css"
export default function Lichsu() {
    const infor = useSelector(state => state.infor.infor.data)
    const hoadoncanhans = useSelector(state => state.hoadoncanhans.hoadoncanhan.data)
    const hoadons = useSelector(state => state.hoadons.hoadon.data)
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
    const dispatch = useDispatch()
    const actionResult = async () => { await dispatch(hoadoncanhanData()) }
    
    const huycosan = (e) => {
        dispatch(updatehoadon({ agree: 2, idsua: e }))
        setTimeout(() => {
            actionResult();
        }, 500);
    }

    const huycanhan = (e) => {
        dispatch(updatehoadoncanhan({ agree: 2, idsua: e }))
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    return (
        <div className="history">
            <div className="history__header">
                <h3 className='text-center'>Lịch sử đặt tour</h3>
                <div className="hr"></div>
            </div>
            <div className="history__type">
                <h4>Tour có sẵn đã đặt</h4>
            </div>
            <div className="history__content">
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
                                <Popconfirm title="Bạn có chắc chắn？" onConfirm={() => { huycosan(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                    <Button className="tourcanhan_huy" color="secondary" variant="contained">Huỷ</Button>
                                </Popconfirm>
                            </div>
                            </div>

                    ))
                }
            </div>
            <div className="history__type">
                <h4>Tour cá nhân đã đặt</h4>
            </div>
            <div className="history__content">
                    {thongtincanhan.length === 0 ? "" :
                        thongtincanhan.map((ok, index) => (
                            <div className="grid tourcanhan__box">
                                <div key={index}>
                                    <div className="duyettour--name">
                                        {ok.diadiemdi}
                                    </div>
                                    <div className="duyettour--form">
                                        <div className="ngaykhoihanh">
                                            <span className="pl-2"> Nơi khởi hành: {ok.noikhoihanh}</span>
                                        </div>
                                    </div>
                                    <div className="duyettour--form">
                                        <div className="giatour">
                                            <strong className="pl-2">{(ok.giatien).toLocaleString()} vnđ</strong>
                                        </div>
                                    </div>
                                    <div className="duyettour--form">
                                        <div className="ngaykhoihanh">
                                            <span className="pl-2"> Ngày khởi hành: {ok.ngaykhoihanh}</span><br />
                                        </div>
                                    </div>
                                    <div className="duyettour--form">
                                        <div className="luuytour">
                                            <span className="pl-2">Thông tin chi tiết: {ok.luuy}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <Popconfirm title="Bạn có chắc chắn？" onConfirm={() => { huycanhan(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                    <Button className="tourcanhan_huy" color="secondary" variant="contained">Huỷ</Button>
                                </Popconfirm>
                                </div>
                            </div>

                        ))
                    }
                </div>
        </div>
    )
}
