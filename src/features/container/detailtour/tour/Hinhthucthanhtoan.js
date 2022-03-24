import React, { useState } from 'react'
import { Radio } from 'antd';

import { Tooltip } from 'antd';

export default function Hinhthucthanhtoan(props) {

    const [value, setvalue] = useState(1);
    const sendData = (e) => {
        props.callback(e)
    }
    const onChange = e => {
        sendData(e.target.value)
        setvalue(e.target.value)
    };
    const style = {
        width: "100%",
    }
    
    const title = () => {
        return (
            <div className="grid">
                <table>
                    <tr>
                        <th className="pl-2 w-title-pay-l">Tên Tài Khoản: </th>
                        <th className="pl-2">Công ty Du Lịch Travelog</th>
                    </tr>
                    <tr>
                        <th className="pl-2">Tên tài khoản viết tắt: </th>
                        <th className="pl-2">TRAVELOG</th>
                    </tr>
                    <tr>
                        <th className="pl-2">Số Tài khoản: </th>
                        <th className="pl-2">001 235 686 8686</th>
                    </tr>
                    <tr>
                        <th className="pl-2">Ngân hàng:</th>
                        <th className="pl-2">Teckcombank - CN Ninh Bình</th>
                    </tr>
                    <tr>
                        <td className="pl-2 text-center" colspan="2">&#40;Chi tiết ghi tại mục III trong điều khoản&#41;</td>
                    </tr>
                </table>
            </div>
        )
    }

    return (
        <div>
            <Radio.Group onChange={onChange} value={value}>
                <Radio style={style} value={1}>Thanh toán trực tiếp</Radio>
                <Radio style={style} value={2}>
                    Thanh toán chuyển khoản &nbsp;
                    <Tooltip placement="bottom" title={title()} color="#2f312e" overlayStyle={{maxWidth: '500px'}}><i className="fas fa-info-circle"></i></Tooltip>
                </Radio> 
                {/* <Radio style={style} value={3}>Thanh toán qua thẻ</Radio> */}
            </Radio.Group>
        </div>
    )
}