import { QuestionCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { Popconfirm, Spin, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { updatehoadoncanhan, removehoadoncanhan, hoadoncanhanData } from './hoadoncanhanSlice';
import Axios from 'axios';
import "./hoadoncanhan.css"
import { Link } from 'react-router-dom'

import { useHistory, useRouteMatch } from 'react-router-dom';

function Hoadoncanhan() {
    const columns = [
        {
            title: 'Người dùng',
            dataIndex: 'user',
        },
        {
            title: 'Nơi khởi hành',
            dataIndex: 'nxp',
        },
        {
            title: 'Địa điểm đi',
            dataIndex: 'ddd',
        },
        {
            title: 'Ngày khởi hành',
            dataIndex: 'nkh',
        },
        {
            title: 'Chi tiết',
            dataIndex: 'ct',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'tien',
        },
        // {
        //     title: 'Kiểm duyệt',
        //     dataIndex: 'kd'
        // },
        {
            title: 'Trạng thái',
            dataIndex: 'tt'
        },
        {
            title: 'Action',
            dataIndex: 'action'
        }
    ];
    const [user, setuser] = useState("")
    const actionResult = async () => { await dispatch(hoadoncanhanData()) }
    useEffect(() => {
        Axios.get("http://localhost:666/users/1").then(data => {
            setuser(data.data.USD_VND)
        })
        actionResult();
    }, [])
    const hoadoncanhans = useSelector(state => state.hoadoncanhans.hoadoncanhan.data);
    let hoadoncanhan = [];
    if (hoadoncanhans) {
        for (let i = 0; i < hoadoncanhans.length; i++) {
            if (hoadoncanhans[i].kiemduyet === 1) {
                hoadoncanhan.push(hoadoncanhans[i])
            }
        }
    }

    const loading = useSelector(state => state.hoadoncanhans.loading)
    const dispatch = useDispatch();

    // thêm chức năng thầy yc
    const hangdleDelete = e => {
        dispatch(removehoadoncanhan(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }

    const handlePay = (e, id) => {
        if (e === 1) {
            dispatch(updatehoadoncanhan({ pay: 2, idsua: id }))
        } else {
            dispatch(updatehoadoncanhan({ pay: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }

    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatehoadoncanhan({ status: 2, idsua: id }))
        } else {
            dispatch(updatehoadoncanhan({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    
    // chức năng sửa
    const match = useRouteMatch()
    const history = useHistory()

    const hangdleEdit = (id) => {
        history.replace(`${match.url}/suahoadoncanhan/${id}`)
    }

    return (
        <div id="admin">
            <div className="heading">
                <h4>Hoá đơn cá nhân</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={hoadoncanhan.map((ok, index) => (
                        {
                            key: index + 1,
                            user: <Link to={`/admin/taikhoan/chitiettaikhoan/${ok.userId}`}>{ok.User.name}</Link>,
                            nxp: <span>{ok.noikhoihanh}</span>,
                            nkh: <span>{ok.ngaykhoihanh}</span>,
                            ddd: <span>{ok.diadiemdi}</span>,
                            ct:  <span>{ok.luuy}</span>,
                            tien: <span>
                            {ok.giatien ? (ok.giatien).toLocaleString() + " vnđ" : <span className='text-danger'>Chưa kiểm duyệt</span>} <br />
                            {ok.pay === 1 ? <span onClick={() => { handlePay(ok.pay, ok.id) }}><i className="far fa-thumbs-up text-primary"></i> Đã thanh toán</span> : <strong onClick={() => handlePay(ok.pay, ok.id)}><i className="far fa-thumbs-down "></i> Chưa thanh toán</strong>}
                            </span>,
                            // kd: <div className="action">{ok.kiemduyet === 1 ? <span ><i className="far fa-thumbs-up text-primary"></i></span> : <span ><i className="far fa-thumbs-down "></i></span>}</div>,
                            tt: <div className="action">
                                {ok.agree === 1 ? 
                                    <span className="yes">Đã đặt</span> : 
                                    (ok.agree === 2 ? 
                                        <span className="done">Đã hoàn thành</span> :
                                        (ok.agree === 3 ?
                                            <strong className="no">Khách đã hủy</strong> :
                                            <span className="wait">Chờ xác nhận&hellip;</span>
                                        )
                                    )} <br />
                                {ok.status === 1 ?
                                    <span onClick={() => {
                                        handleStatus(ok.status, ok.id) }}>
                                        <i className="far fa-check-circle"></i> Đã xác nhận</span> :
                                        <span onClick={() => handleStatus(ok.status, ok.id)}>
                                        <i className="far fa-circle"></i> Đang trong tour</span>}
                            </div>,
                            action:
                                <div className="action">
                                    <Popconfirm title="Bạn có muốn sửa？" onConfirm={() => { hangdleEdit(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                        <i className="far fa-edit mr-4"></i>
                                    </Popconfirm>
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <i className="far fa-trash-alt" ></i>
                                    </Popconfirm>
                                </div>,
                        }))} />
                }
            </div>
        </div>
    )
}

Hoadoncanhan.propTypes = {
}

export default Hoadoncanhan