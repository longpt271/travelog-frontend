
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from '@material-ui/core';
import { Image, Popconfirm, Spin, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { ngaydiData } from '../Ngaydi/ngaydiSlice';
import { removetour, updatetour } from './tourSlice';
import { tourData } from './tourSlice';

import { Select } from 'antd'
import { Option } from 'antd/lib/mentions';

function Tour() {
    const match = useRouteMatch()

    const dispatch = useDispatch()
    const tours = useSelector(state => state.tours.tour.data);
    // var tour = [];
    // if (tours) {
    //     var sort = []
    //     for (let i = 0; i < tours.length; i++) {
    //         sort.unshift(tours[i])
    //     }
    //     tour=sort
    // }
    const loading = useSelector(state => state.tours.Loading);
    const history = useHistory();
    const actionResult = async () => await dispatch(tourData());
    const actionngaydi = async () => await dispatch(ngaydiData());
    useEffect(() => {
        actionResult();
        actionngaydi();
    }, [])

    const columns = [
        {
            title: 'Tên tour',
            dataIndex: 'name',
        },
        {
            title: "Ảnh",
            dataIndex: "anh"
        },
        {
            title: 'tình trạng',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action'
        }
    ];
    const hangdleDelete = e => {
        dispatch(removetour(e));
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    const hangdleEdit = (id) => {
        history.replace(`${match.url}/suatour/${id}`)
    }
    const handleStatus = (e, id) => {
        if (e === 1) {
            dispatch(updatetour({ status: 0, idsua: id }))
        } else {
            dispatch(updatetour({ status: 1, idsua: id }))
        }
        setTimeout(() => {
            actionResult();
        }, 500);
    }
    
    // Chọn tour trong hoặc ngoài
    const [state, setState] = useState({
        check: "trong",
        statetrongnuoc: "",
        statenuocngoai: ""
    })
    var tourtrongnuoc = [];
    if (tours) {
        var sort = []
        for (let i = 0; i < tours.length; i++) {
            sort.unshift(tours[i])
        }
        for (let i = 0; i < sort.length; i++) {
            if (sort[i].vitri === 1) {
                tourtrongnuoc.push(sort[i])
            }
        }
    }
    var tournuocngoai = [];
    if (tours) {
        var sort = []
        for (let i = 0; i < tours.length; i++) {
            sort.unshift(tours[i])
        }
        for (let i = 0; i < sort.length; i++) {
            if (sort[i].vitri === 2) {
                tournuocngoai.push(sort[i])
            }
        }
    }
    const handleChange = (value) => {
        setState({
            ...state,
            check: value
        })
    }

    const search = e => {
        const { check } = state
        if (check === "trong") {
            var tourtrongnuoc = [];
    if (tours) {
        var sort = []
        for (let i = 0; i < tours.length; i++) {
            sort.unshift(tours[i])
        }
        for (let i = 0; i < sort.length; i++) {
            if (sort[i].vitri === 1) {
                tourtrongnuoc.push(sort[i])
            }
        }
    }
            setState({
                ...state,
                statetrongnuoc: tourtrongnuoc
            })
        } else {
            var tournuocngoai = [];
            if (tours) {
                var sort = []
                for (let i = 0; i < tours.length; i++) {
                    sort.unshift(tours[i])
                }
                for (let i = 0; i < sort.length; i++) {
                    if (sort[i].vitri === 2) {
                        tournuocngoai.push(sort[i])
                    }
                }
            }
            setState({
                ...state,
                statenuocngoai: tournuocngoai
            })
        }
    }
    return (
        <div id="admin">
            <div className="heading">
                <h4>Quản lý tour</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="grid">
                            <div className="ml-3">
                            <div className="add">
                                <Link to={`${match.url}/themtour`}><Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button></Link>
                            </div>
                            </div>
                            <div className="mr-3">
                                {/* <Button variant="outlined" color="primary" style={{float: "right"}}>&nbsp;&nbsp; Tour nước ngoài</Button> */}  
                                <Select className="w-100" defaultValue="trong" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="trong">Tour trong nước</Option>
                                    <Option value="ngoai">Tour nước ngoài</Option>
                                </Select>
                            </div>
                </div>
                {/* {loading ? <div className="spin"><Spin className="mt-5" /></div> :
                    <Table columns={columns} dataSource={tourtrongnuoc.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <Link to={`${match.url}/chitiettour/${ok.id}`}>{ok.name}</Link>,
                            anh: <Image src={ok.avatar} width="150px" height="200px" alt="" />,
                            status: <div className="action">{ok.status === 1 ? <span onClick={() => { handleStatus(ok.status, ok.id) }}><i className="far fa-thumbs-up text-primary"></i></span> : <span onClick={() => handleStatus(ok.status, ok.id)}><i className="far fa-thumbs-down "></i></span>}</div>,
                            action:
                                <div className="action">
                                    <Popconfirm title="Bạn có muốn sửa？" onConfirm={() => { hangdleEdit(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                        <i className="far fa-edit mr-4" style={{ cursor: "pointer" }}></i>
                                    </Popconfirm>
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                    </Popconfirm>
                                </div>
                        }))} />} */}
                {state.check === 'trong' ?         
                    <Table columns={columns} dataSource={tourtrongnuoc.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <Link to={`${match.url}/chitiettour/${ok.id}`}>{ok.name}</Link>,
                            anh: <Image src={ok.avatar} width="150px" height="200px" alt="" />,
                            status: <div className="action">{ok.status === 1 ? <span onClick={() => { handleStatus(ok.status, ok.id) }}><i className="far fa-thumbs-up text-primary"></i></span> : <span onClick={() => handleStatus(ok.status, ok.id)}><i className="far fa-thumbs-down "></i></span>}</div>,
                            action:
                                <div className="action">
                                    <Popconfirm title="Bạn có muốn sửa？" onConfirm={() => { hangdleEdit(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                        <i className="far fa-edit mr-4" style={{ cursor: "pointer" }}></i>
                                    </Popconfirm>
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                    </Popconfirm>
                                </div>
                        }
                    ))} />
                    :
                    <Table columns={columns} dataSource={tournuocngoai.map((ok, index) => (
                        {
                            key: index + 1,
                            name: <Link to={`${match.url}/chitiettour/${ok.id}`}>{ok.name}</Link>,
                            anh: <Image src={ok.avatar} width="150px" height="200px" alt="" />,
                            status: <div className="action">{ok.status === 1 ? <span onClick={() => { handleStatus(ok.status, ok.id) }}><i className="far fa-thumbs-up text-primary"></i></span> : <span onClick={() => handleStatus(ok.status, ok.id)}><i className="far fa-thumbs-down "></i></span>}</div>,
                            action:
                                <div className="action">
                                    <Popconfirm title="Bạn có muốn sửa？" onConfirm={() => { hangdleEdit(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                        <i className="far fa-edit mr-4" style={{ cursor: "pointer" }}></i>
                                    </Popconfirm>
                                    <Popconfirm title="Bạn có muốn xoá？" onConfirm={() => { hangdleDelete(ok.id) }} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                    </Popconfirm>
                                </div>
                        }
                    ))} />
                        
                }
            </div>
        </div>
    )
}

Tour.propTypes = {

}

export default Tour
