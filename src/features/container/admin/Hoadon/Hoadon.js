
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from '@material-ui/core';
import { Popconfirm, Popover, Spin, Table, Tooltip } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hoadonData, updatehoadon, removehoadon } from './hoadonSlice';
import { Link, useRouteMatch } from 'react-router-dom'
import "./hoadon.css"

function Hoadon() {
    const match = useRouteMatch()

    const columns = [
        {
            title: 'Người dùng',
            dataIndex: 'name',
        },
        {
            title: 'Tour',
            dataIndex: 'tour',
        },

        {
            title: 'Ngày đi',
            dataIndex: 'ngay',
        },
        {
            title: 'Số lượng',
            dataIndex: 'soluong',
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'tien',
        },

        {
            title: 'Hình thức',
            dataIndex: 'ht',
        },

        {
            title: 'Trạng thái',
            dataIndex: 'status',
        },
        {
            title: 'Del?',
            dataIndex: 'action'
        }
    ];
    const users = useSelector(state => state.taikhoan.user.data);

    const hoadons = useSelector(state => state.hoadons.hoadon.data);
    const soluong = (nguoilon, treem, embe) => {
        return nguoilon + treem + embe
    }
    const loading = useSelector(state => state.hoadons.loading)
    const dispatch = useDispatch();
    const actionResult = async () => { await dispatch(hoadonData()) }

    const hangdleDelete = e => {
        dispatch(removehoadon(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    
    const tongtiengoc = (nguoilon, treem, embe, gnl, gte, geb) => {
        return (
            <span>Giá gốc: {(nguoilon * gnl + treem * gte + embe * geb).toLocaleString()} vnđ</span>
        );
    }

    const title = (nguoilon, treem, embe) => {
        return (
            <div className="grid">
                <div className="grid-col">
                    <span>Người lớn: </span><br />
                    <span>Trẻ em: </span><br />
                    <span>Em bé: </span>
                </div>
                <div className="grid-col">
                    <span>{nguoilon}</span><br />
                    <span>{treem}</span><br />
                    <span>{embe}</span>
                </div>    
            </div>
        )
    }

    
    const handlePay = (e, id) => {
        if (e === 1) {
            dispatch(updatehoadon({ pay: 2, idsua: id }))
        } else {
            dispatch(updatehoadon({ pay: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }

    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatehoadon({ status: 2, idsua: id }))
        } else {
            dispatch(updatehoadon({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Hoá đơn tour</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={hoadons.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <Link to={`${match.url}/chitiettaikhoan/${ok.userId}`}>{ok.User.name}</Link>,
                            // name: <span>{ok.User.name}</span>,
                            tour: <span>{ok.Tour.name}</span>,
                            soluong: <Tooltip title={title(ok.nguoilon, ok.treem, ok.embe)}>
                                <span>{soluong(ok.nguoilon, ok.treem, ok.embe)} khách <i className="fas fa-info-circle"></i></span>
                            </Tooltip>,
                            tien:   <Tooltip title={tongtiengoc(ok.nguoilon, ok.treem, ok.embe, ok.Tour.gianguoilon, ok.Tour.giatreem, ok.Tour.giaembe)}>
                                        <span>{ok.thanhtien.toLocaleString()} vnđ <i className="fas fa-info-circle"></i></span>
                                        </Tooltip>,
                            ngay: <span>{ok.ngaydi}</span>,
                            ht: <div className="action">
                            <span>{ok.hinhthuc === 1 ? <span >Tiền mặt</span> : (ok.hinhthuc === 2 ? <span >Chuyển khoản</span> : <span>Qua thẻ</span>)}</span> <br />
                            {ok.pay === 1 ? <span onClick={() => { handlePay(ok.pay, ok.id) }}><i className="far fa-thumbs-up text-primary"></i> Đã thanh toán</span> : <strong onClick={() => handlePay(ok.pay, ok.id)}><i className="far fa-thumbs-down "></i> Chưa thanh toán</strong>}
                            </div>,
                            status: <div className="action">
                                        {ok.agree === 1 ? 
                                            <span className="yes">Đã đặt</span> : 
                                            <strong className="no">Khách đã hủy</strong>} <br />
                                        {ok.status === 1 ?
                                            <span onClick={() => {
                                                handleStatus(ok.status, ok.id) }}>
                                                <i className="far fa-check-circle"></i> Đã hoàn thành</span> :
                                                <span onClick={() => handleStatus(ok.status, ok.id)}>
                                                <i className="far fa-circle"></i> Đang trong tour</span>}
                                    </div>,
                            action:
                                <div className="action">
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <i className="far fa-trash-alt" ></i>
                                    </Popconfirm>
                                </div>
                        }))}
                    />
                }
            </div>
        </div>
    )
}


export default Hoadon