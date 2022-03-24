import { Button } from '@material-ui/core'
import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addhoadon, hoadonData, updatehoadon } from './hoadonSlice';
// import { tourData } from '../Tour/tourSlice';
// import { Space, DatePicker } from 'antd';

function Themhoadon(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [state, setState] = useState({ status: 1, ngaydi: "", nguoilon: "", treem: "", embe: "", thanhtien: "", idsua: '' });
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    const actionResult = async () => { await dispatch(hoadonData()) }
    const history = useHistory()
    const hoadons = useSelector(state => state.hoadons.hoadon.data.find(x => x.id === +id));
    useEffect(() => {
        if (id) {
            setState({
                status: hoadons.status,
                ngaydi: hoadons.ngaydi,
                nguoilon: hoadons.nguoilon,
                treem: hoadons.treem,
                embe: hoadons.embe,
                thanhtien: hoadons.thanhtien,
                idsua: id
            })
        }
    }, [])
    const { ngaydi, nguoilon, treem, embe, thanhtien } = state;
    const onSubmit = e => {
        e.preventDefault();
        if (ngaydi === "" || nguoilon === "" || treem === "" || embe === "" || thanhtien === "") {
            message.error("Xin hãy nhập đầy đủ thông tin!");
        } else {
            if (id) {
                dispatch(updatehoadon(state));
            } else {
                const action = addhoadon(state);
                dispatch(action);
            }
            setTimeout(() => {
                actionResult();
            }, 700);
            history.push("/admin/hoadon");
        }
    }


    // const tours = useSelector(state => state.tours.tour.data);

    return (
        <div id="admin">
            <div className="heading">
                <h4>{id ? "Sửa hóa đơn" : "Thêm hóa đơn"}</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Ngày đi</label>
                        <input type="text" name="ngaydi" value={ngaydi} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="form-group w-50">
                        <label htmlFor="">Số lượng</label>
                        <br />
                        <div class="input-ngang">
                        <div class="input-title">Người lớn: </div>
                            <input type="number" name="nguoilon" value={nguoilon} onChange={onChange} className="form-control text-center" placeholder="" aria-describedby="helpId" />
                        </div>
                        <div class="input-ngang">
                        <div class="input-title">Trẻ em</div>
                            <input type="number" name="treem" value={treem} onChange={onChange} className="form-control text-center" placeholder="" aria-describedby="helpId" />
                        </div>
                        <div class="input-ngang">
                        <div class="input-title">em bé</div>
                            <input type="number" name="embe" value={embe} onChange={onChange} className="form-control text-center" placeholder="" aria-describedby="helpId" />
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Thành tiền</label>
                        <input type="number" name="thanhtien" value={thanhtien} onChange={onChange} className="form-control w-50" placeholder="" aria-describedby="helpId" />
                    </div>
                    <div className="text-center mtb"><Button type="submit" color="primary" variant="contained">{id ? "Sửa hóa đơn" : "Thêm hóa đơn"}</Button></div>
                </form>
            </div>
        </div>
    )
}

Themhoadon.propTypes = {

}

export default Themhoadon