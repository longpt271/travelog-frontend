import React, { useState } from 'react'
import './dangky.css'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { message } from 'antd'
import taikhoanApi from '../../../api/taikhoanApi'

import Footer from '../trangchu/footer/Footer'


function Dangky(props) {
    const [state, setState] = useState({ password: '', repassword: '', name: '', status: 1, email: '' });
    const { password, repassword, status, name, email } = state
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const onsubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            message.warning("Email không đúng định dạng!")
        } else {
            if (password.trim() === "" || repassword.trim() === "" || name.trim() === "" || email.trim() === "") {
                message.error("Bạn chưa nhập đầy đủ thông tin!");
            } else {
                if (password.length > 5) {
                    if (password === repassword) {
                        if (await taikhoanApi.checkEmail(email).then(data => { return data; }) !== null) {
                            message.error("Email đã được sử dụng!");
                        } else {
                            var UserRoles = [{ roleId: 6 }]
                            taikhoanApi.postuser({ name, status, email, password, UserRoles });
                            history.push('/dangnhap')
                        }
                    } else {
                        message.error("Mật khẩu không trùng khớp!")
                    }
                } else {
                    message.error("Mật khẩu phải ít nhất 6 ký tự!")
                }
            }
        }
    }
    const onchange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const history = useHistory()
    const handgleLG = () => {
        history.push('/dangnhap')
    }
    return (
        <Router>
            <div id="dangky">
                <div className="box-login">
                    <form className="form" onSubmit={onsubmit}>
                        <h4 className="pb-3">Đăng ký </h4>

                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <input type="text" className="form-control" placeholder="Tên của bạn" name='name' value={name} onChange={onchange} aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <input type="email" className="form-control" placeholder="Email" name='email' value={email} onChange={onchange} aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <input type="password" className="form-control" placeholder="Mật khẩu" name="password" value={password} onChange={onchange} aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" name="repassword" value={repassword} onChange={onchange} aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <Button type="submit" variant="contained" color="primary" className="w-100 mb-4">Đăng ký</Button>
                        
                        <div className="form-group text-center">
                        <span className="text-muted">Bạn đã có tài khoản? </span>
                            <Link onClick={handgleLG} className="">Đăng nhập</Link>
                        </div>
                    </form>
                    <p className="or">OR</p>
                    <div className="mxh mt-3">
                        <Button variant="contained" color="primary" className="text-capitalize mb-3">
                            <i className="fab fa-facebook-f mr-4"></i> Facebook
                        </Button>
                        <Button variant="contained" color="primary" className="text-capitalize google float-right mb-3">
                            <i className="fab fa-google mr-4"></i> Google
                        </Button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </Router>
        
    )
}

Dangky.propTypes = {

}

export default Dangky


