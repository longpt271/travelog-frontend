import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import "./taikhoan.css"
function Chitiettaikhoan(props) {
    const { id } = useParams();
    const users = useSelector(state => state.taikhoan.user.data);
    const user = []
    if (users) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === +id) {
                user.push(users[i])
            }
        }
    }
    console.log(user);

    return (
        <div id="admin">
            <div className="heading">
                <h4>Chi tiết tài khoản</h4>
                <div className="hr"></div>
            </div>
            <div className="content">
                <div className="ct">
                    {!user ? 's' :
                        user.map(ok => (
                            <div key={ok.id}>
                                <div className="text-center pt-4"><img src={ok.avatar ? ok.avatar : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGtmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDMtMTBUMTU6NDI6MTQrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAzLTEwVDE2OjE2OjIyKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTEwVDE2OjE2OjIyKzA3OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMzVmNjhkLTg5ZGItNzg0OS1iYTM0LWVjYzFkMzc3MGMxZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzg0MTZGRjE3M0UxMUUzOTYyOEE4QkM2OUVGODdCNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkU3ODQxNkZGMTczRTExRTM5NjI4QThCQzY5RUY4N0I3IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTc4NDE2RkMxNzNFMTFFMzk2MjhBOEJDNjlFRjg3QjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTc4NDE2RkQxNzNFMTFFMzk2MjhBOEJDNjlFRjg3QjciLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjAyZDg2NGYtZjA4NC1iMTRjLTliYTYtZDY5MDg1ZjkxY2JiIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTEwVDE2OjE0OjEyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMzVmNjhkLTg5ZGItNzg0OS1iYTM0LWVjYzFkMzc3MGMxZCIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xMFQxNjoxNjoyMiswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgI9I1UAAAkESURBVHic7d1ddtvGEoXRdlaGo/FZY5DHp/nwPlxagWn+QBII9Kna+y158ELU6q+6QVn5cTqdBkCCf45+AIC1BAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAEx/j36Acj0/v7+87t/xsvLy68tnoU+fpxOp6OfgcndidPbN/7Y12v/UsS4R7C46kqkvhOntf6ImHhxSbD4cFCkbhEv/iJYzU0WqVs+4iVcvQlWUxehmjFS1whXc4LVTGioLglXU4LVyCJWqaG6JFzNCFYDRU5V97yOIVodCFZxBU9VtzhtNSBYRTU4Vd3itFWYYBXU6FR1i2gVJVjFiNUHV8SCBKsQsbrKaasQv16mCLG66W2MbX67BMcTrALE6iHRKkKwwonVaqJVgGAFE6tPE61wghVKrL5MtIIJViCx+jZft1CCFUastuOUlUewgojVplwNAwlWHrHajmiFEawQNtXTGABBBCuAq+DzGQgZBCuHWD2Pq2EIwZqcTbQbAyGAYGWwmXZiQMxNsCZm8+zOYJicYE3Ki/bjGBTzEqy5idX+fM0nJlhwhVPWnARrQjbL4ZyyJiVY87JpDmZwzEewJmOTTMPAmJBgzclmgSsEC+5w4p2LYE3E5piOk+5kBGs+NgncIFjwgJPvPARrEjbFtJx4JyJYc7E54A7BAmIIFqzgyj4HwYLHXNUnIVgTML1hHcGahykODwgWEEOwgBiCBcQQLCCGYMFKPs09nmDBOj7FnYBgATEEC9Z5PfoBECxY7eXl5dfRz9CdYAExBAuIIVhADMECYgjWPHwKBQ8I1gR8+gTrCBY85vQ7CcGCFZyC5yBYQAzBmourB9whWJNw5ZiWITIRwYIHDJN5CNZ8THS4QbAmYpLDfYIFtzntTkaw5mSjTMKpdy6CNRkbZBqGxoQEC24wPOYjWPMy4eGCYE3IZD+cYTEpwZqbjXMQQ2NOgjUpG+YwhsTEBGt+NtB+XscwLGYmWBNbbBzR2olYzU2wJmcD7cZQCCBYOWyoJzMc5idYAVwNn87XNYRghTD9n8aL9iCClcdpYDtiFUawgrgabk+ssghWGNHajK9fIMEKJFrf5ioYSrBC2WxfJlbBBCufU9Z6YhVOsIK5Gn6KWBUgWOFEaxWxKuLH6XQ6+hnYwPv7+8/FP74d9iDzEatCBKuYRbhES6zKEayCROu/67FY1SJYRTWOllNVYYJVWLP3Wk5VDQhWAw1OW05VTQjWAS5OPldtvfmKnraeeqp6tE4CuT/B2sGNb/x70XjaRiwSrj1DdetrdPXn3kTsuQTrSa5E6itxeNpVJzRcM4Tqnj8iJl7bE6wNbRSpS7Nv0j08/YX6E97z+RDgCQRrAztt+qe+WH5SbL9jl9PKDmsnXBsSrG844HSyyzf/gfHa9Uq186enwrUBwfqig39UYLeP8e98Urbpdfe3A/6b9l4/4foGwfqkid75HPaNv+bHMtY68NmnuPKK1ucI1idM9M2+5Bt/hYkGzZK1+yTBWmnSWP3mmnHDpKFaEq1PEKwVJo/VknAtWLd6BOuBoG/6pdYbIOBUdYvT1gOCdUdorJZahSs4VEuidYdg3VAgVktlwzXhD7xu4bXaOm1FsK4oFqulMuEqcpq6xSnrBsG6UDhWS7F/Sbd4qJZE6wrBunDeEJU3wqXp41X02reGaF0QrIUmp6t7pojXF35/WGWitSBYZ2L1l11+Qd2T/65iFV7CnwnWWcOr4Fc86/8u7et+n1PW2b9HP8AMtvzLvMUJyzHexvOGRZR/jn6Ao7kKksJgFazfxIrZvY0hWq2D1X3xidN+sLYO1ln7bwKydB60bYPVedGJ1nrAtg3WWevFJ1fXgdsyWF0XmzLaDtqWwTpru+jU0HHwtgtWx0WmpJYDt12wzlouNqTrGiwooduNoVWwui0u5bW7KbQK1lm7RYYqOgYLSul0c2gTrE6LSiutbgxtgnXWanGhmm7BgpK63CBaBKvLYtJWm5tDi2CdtVlUqKpTsKC0DjcJwYIaWtwgygerw9SBLsoH66zF9IHqugQLWqh+oxAsqKP8TaJ0sKpPG+imdLDOyk8d6KJDsIAiBAuKqfwqRLCgltKvQMoGq/KUga7KBuus9LSBbqoHCyhEsIAYggUFVX2HK1hQT9l3t4IFxCgZrKrHYeiuZLDOyh6LoavKwQKKESwghmABMQQLiCFYUFTFT8sFC2oq+Sm5YAExBAuIIVhADMECYpQLVsVPRoD/Kxess5KfkEB3VYMFFCRYQAzBAmIIFhBDsIAYggXEECwghmABMQQLiCFYQAzBAmJUDdbr0Q8AbK9csF5eXn4d/QzAc5QLFlCXYEFNJV+LCBYUVfH1iGABMSoHq+SRGDorGayKR2GgaLCgubK3i+rBKrtwcE/VW0bZYFVdMHig9JAuGyzoqvKw7hCs0hMHOikdrMqTBq4oP5xLB2uh/ELCGPWHdPlgVV9AOGsxlMsHa6HFgtLS6xg9hnOLYC0WUrQoqUOsxmgSrDH6LCjttBrCbYK10GqBKa3NVfC3VsFyNaSQdrEao1mwxhAtSmgZqzEaBmsM0SJa21iN0TRYY4gWkVrHaowxfpxOp6Of4VDv7+8/F//4dtiDwH3tYzWGYH1YhEu0mMnHDaB7rMYQrD84bTEZp6oLgnWFcHEwp6obBOsO4WJHf3z4I1TXCdYKF+EaQ7zYjtPUJwjWJ12J1xgCxnp//RiNUK0nWN90I2Bwk0B9nWABMdr+pDuQR7CAGIIFxBAsIIZgATEEC4ghWEAMwQJiCBYQQ7CAGIIFxBAsIIZgATEEC4ghWEAMwQJiCBYQQ7CAGIIFxBAsIIZgATEEC4ghWEAMwQJiCBYQQ7CAGIIFxBAsIIZgATEEC4ghWEAMwQJiCBYQQ7CAGIIFxBAsIIZgATEEC4ghWEAMwQJiCBYQQ7CAGIIFxBAsIMb/ABvsOxUQQekqAAAAAElFTkSuQmCC'} className="avatar-ct" alt="" /></div>
                                <div className="grid gridTk">
                                    <div className="grid-col">
                                        <p>Tên người dùng:&emsp; </p>
                                        <p>Email:&emsp; </p>
                                        <p>Số điện thoại:&emsp; </p>
                                        <p>Giới tính:&emsp; </p>
                                        <p>Ngày sinh:&emsp; </p>
                                        <p>Địa chỉ:&emsp; </p>
                                        <p>Website:&emsp; </p>
                                        <p>Châm ngôn:</p>
                                        <p>Chức vụ:&emsp; </p>
                                        <p>Bộ phận:&emsp; </p>
                                        <p>Github:&emsp; </p>
                                        <p>Facebook:&emsp; </p>
                                        <p>Kỹ năng:</p>
                                    </div>
                                    <div className="grid-col">
                                        <p><b><i>{ok.name}</i></b></p>
                                        <p><b><i>{ok.email}</i></b></p>
                                        <p><b><i></i>{ok.sdt}</b></p>
                                        <p><b><i>{ok.gioitinh === 1 ? "Nam" : "Nữ"}</i></b></p>
                                        <p><b><i>{ok.ngaysinh}</i></b></p>
                                        <p><b><i>{ok.diachi}</i></b></p>
                                        <p><b><i>{ok.UserRoles[0].website}</i></b></p>
                                        <div className="container">
                                            <p>{ok.UserRoles[0].chamngon}</p>
                                        </div>
                                        <p><b><i>Load ...</i></b></p>
                                        <p><b><i>Load ...</i></b></p>
                                        <p><b><i>{ok.UserRoles[0].github}</i></b></p>
                                        <p><b><i>{ok.UserRoles[0].facebook}</i></b></p>
                                        <div className="container">
                                            <p>{ok.UserRoles[0].kynang}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

Chitiettaikhoan.propTypes = {

}

export default Chitiettaikhoan