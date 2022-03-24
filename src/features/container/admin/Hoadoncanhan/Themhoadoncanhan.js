import { Button } from '@material-ui/core'
import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addhoadoncanhan, hoadoncanhanData, updatehoadoncanhan } from './hoadoncanhanSlice';
// import { Space, DatePicker } from 'antd';

function Themhoadoncanhan(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [state, setState] = useState({ status: 1, noikhoihanh: "", diadiemdi: "", ngaykhoihanh: "", luuy: "", giatien: "", idsua: '' });
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    const actionResult = async () => { await dispatch(hoadoncanhanData()) }
    const history = useHistory()
    const hoadoncanhans = useSelector(state => state.hoadoncanhans.hoadoncanhan.data.find(x => x.id === +id));
    useEffect(() => {
        if (id) {
            setState({
                status: hoadoncanhans.status,
                noikhoihanh: hoadoncanhans.noikhoihanh,
                diadiemdi: hoadoncanhans.diadiemdi,
                ngaykhoihanh: hoadoncanhans.ngaykhoihanh,
                luuy: hoadoncanhans.luuy,
                giatien: hoadoncanhans.giatien,
                idsua: id
            })
        }
    }, [])
    const { noikhoihanh, diadiemdi, ngaykhoihanh, luuy, giatien } = state;
    const onSubmit = e => {
        e.preventDefault();
        if (noikhoihanh.trim() === "" || diadiemdi === "" || ngaykhoihanh === "" || luuy === "" || giatien === "") {
            message.error("Xin hãy nhập đầy đủ thông tin!");
        } else {
            if (id) {
                dispatch(updatehoadoncanhan(state));
            } else {
                const action = addhoadoncanhan(state);
                dispatch(action);
            }
            setTimeout(() => {
                actionResult();
            }, 700);
            history.push("/admin/hoadoncanhan");
        }
    }


    return (
        <div id="admin">
            <div className="heading">
                <h4>{id ? "Sửa hóa đơn cá nhân" : "Thêm hóa đơn cá nhân"}</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Nơi khởi hành</label>
                        <input type="text" name="noikhoihanh" value={noikhoihanh} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Địa điểm đi</label>
                        <textarea type="text" name="diadiemdi" value={diadiemdi} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Ngày khởi hành</label>
                        {/* <DatePicker placeholder="Ngày đi" className="mr-3" style={{ width: 150 }} id="date" format="DD/MM/YYYY" onChange={onChange} /> */}
                        <input type="text" name="ngaykhoihanh" value={ngaykhoihanh} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Chi tiết</label>
                        <textarea type="text" name="luuy" value={luuy} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Giá tiền</label>
                        <input type="number" name="giatien" value={giatien} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="text-center mtb"><Button type="submit" color="primary" variant="contained">{id ? "Sửa hóa đơn cá nhân" : "Thêm hóa đơn cá nhân"}</Button></div>
                </form>
            </div>
        </div>
    )
}

Themhoadoncanhan.propTypes = {

}

export default Themhoadoncanhan