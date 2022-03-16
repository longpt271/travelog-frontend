import React, { useState } from 'react'
import './login.css'
import { BrowserRouter as Router, Link, useHistory, Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core';
import firebase from "firebase"
import { StyledFirebaseAuth } from 'react-firebaseui'
import { message } from 'antd'
import { checklogin, inforData } from "./inforSlice"
import { useDispatch } from 'react-redux'
import axios from 'axios'
import loginApi from '../../../api/loginApi'
import { userData } from '../admin/taikhoan/taikhoanSlice'
import Footer from '../trangchu/footer/Footer'

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};
function Login(props) {
    const [state, setState] = useState({ email: '', password: '' })
    const { email, password } = state
    const actionuser = async () => { await dispatch(userData()) }
    const dispatch = useDispatch()
    const actioninfor = async () => { await dispatch(inforData()) }
    const onsubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            message.warning("Email không đúng định dạng!")
        } else {
            if (email.trim() === "" || password.trim() === "") {
                message.warning("Bạn chưa nhập đầy đủ thông tin!");
            } else {
                var token = await loginApi.login({ email: email, password: password }).then(data => {
                    return data
                })
                if (token !== "err") {
                    localStorage.setItem("token", token)
                    actioninfor()
                    message.success("Đăng nhập thành công!");
                    history.push('/')
                } else {
                    message.warning("Sai tên đăng nhập hoặc mật khẩu!")
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
    const hangdleDK = () => {
        history.push('/dangky')
    }
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    return (
        <Router>
            <div id="login">
                <div className="box-login">
                    <form className="form" onSubmit={onsubmit}>
                        <h4 className="pb-3">Đăng nhập </h4>
                        <div className="input-group flex-nowrap">
                            <input type="text" className="form-control" placeholder="Email của bạn" value={email} name='email' onChange={onchange} aria-label="email" aria-describedby="addon-wrapping" />
                        </div>

                        <div className="input-group flex-nowrap mt-3 mb-3">
                            <input type="password" className="form-control" placeholder="Mật khẩu" value={password} name="password" onChange={onchange} aria-label="email" aria-describedby="addon-wrapping" />
                        </div>

                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" onChange="onclick" /> <span className="text-muted">Nhớ mật khẩu</span>
                            </label>
                        </div>
                        <Button type="submit" variant="contained" color="primary" className="w-100 mb-4">Đăng nhập</Button>
                        <div className="form-group text-center">
                            <span className="text-muted">Chưa có tài khoản? </span>
                            <Link to="#" onClick={hangdleDK}>Tạo mới</Link>
                        </div>

                    </form>
                    <div class="or">
									or
								</div>
                    <div className="mxh mt-3">
                        <Button variant="contained" color="primary" className="text-capitalize mb-3">
                            <i className="fab fa-facebook-f mr-4"></i> Facebook
                        </Button>
                        <Button variant="contained" color="primary" className="text-capitalize google mb-3 float-right">
                            <i className="fab fa-google mr-4"></i> Google
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </Router>

    )
}

Login.propTypes = {

}

export default Login


