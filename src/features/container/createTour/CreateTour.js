import { QuestionCircleOutlined } from '@ant-design/icons'
import { Button } from '@material-ui/core'
import { DatePicker, message, Popconfirm, Select, Space, Tabs } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import hoadoncanhanApi from '../../../api/hoadoncanhanApi'
import "./CreateTour.css"
// import anh from "../../images/createtour.png"
import ShopeeDanhMuc from '../../images/danhMuc.png'

export default function CreateTour() {
    const { Option } = Select;
    const [date, setdate] = useState('')
    const [date1, setdate1] = useState('')
    const [nxp, setnxp] = useState('')
    const [td, settd] = useState('')
    const diadiems = useSelector(state => state.diadiems.diadiem.data);
    let diadiem = [];
    if (diadiems) {
        for (let i = 0; i < diadiems.length; i++) {
            if (diadiems[i].quocgiaId === 1) {
                diadiem.push(diadiems[i])
            }
        }
    }
    const infor = useSelector(state => state.infor.infor.data);
    function handleNoixuatphat(value) {
        setnxp(value)
    }
    function handleTuyendi(value) {
        settd(value)
    }
    function handleNgaykhoihanh(dates, dateStrings) {
        setdate(new Date(dates));
        setdate1(dateStrings);
    }
    const compare = (dt) => {
        const date = new Date();
        date.setHours(0);
        date.setSeconds(0);
        date.setMinutes(0);
        dt.setHours(0);
        dt.setSeconds(0);
        dt.setMinutes(0);
        return date < dt
    }
    const onSubmit = () => {
        //e.preventDefault();
        if (date !== "" && td !== "" && td.length !== 0 && nxp !== "") {
            if (!compare(date)) {
                message.warning("Ngày khởi hành không phù hợp!");
            } else {
                console.log(td.join(", "), nxp, date1, infor.id);
                hoadoncanhanApi.posthoadoncanhan({ userId: infor.id, noikhoihanh: nxp, ngaykhoihanh: date1, diadiemdi: td.join(", "), kiemduyet: 0, agree: 0 })
            }
        } else {
            message.warning("Bạn chưa nhập đầy đủ thông tin!");
        }
    }

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    // Tabs của antd
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }
    return (
        <div id="create-tour">
            {/* <div className="container create-img">
                    <img src={anh} className="w-100" alt="" />
            </div> */}
            <div className="container mb-1">
                <div className="container-tabs">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            <i class="fas fa-luggage-cart mb-2"></i><br />
                            Tour du lịch<br />trọn gói
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <i class="fas fa-hotel"></i><br />
                            Khách sạn<br />
                            <small class="badge btn-danger">Ưu đãi hot</small>
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            <i class="fas fa-plane"></i> &#43; <i class="fas fa-hotel"></i><br />
                            Combo<br />Vé máy bay + Khách sạn
                        </button>
                        <button
                            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(4)}
                        >
                            <i class="fas fa-taxi"></i> &#43; <i class="fas fa-hotel"></i><br />
                           Combo<br />Xe + Khách sạn
                        </button>
                        <button
                            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(5)}
                        >
                            <i class="fa fa-search"></i><br />
                            Tra cứu<br />
                            Booking
                        </button>
                    </div>

                    <div className="content-tabs head--content">
                        <div className={toggleState === 1 ? "content  active-content" : "content"} >
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Tour trong nước" icon="fas fa-luggage-cart" key="1">
                                    <div className="content-tabs-1">
                                        <form action="" onSubmit={onSubmit} method="post" >
                                            <div className="row">
                                                <div class="col-6">
                                                    <div class="row destination-selector gx-0" >
                                                        <div class="col-4">
                                                            <div class="input-search-location w-100 mb-1 px-2 py-1">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-shrink-0 p-3">
                                                                        <i class="fas fa-map-marker-alt"></i>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <label class="mb-1">Điểm đi</label>
                                                                        <Select
                                                                            showSearch
                                                                            placeholder="Nơi khởi hành"
                                                                            style={{ width: 131}}
                                                                            className="mr-2 selection__rendered"
                                                                            onChange={handleNoixuatphat}
                                                                        >
                                                                            {!diadiem ? '' : diadiem.map((data) => (
                                                                                <Option key={data.name}>{data.name}</Option>
                                                                            ))}
                                                                        </Select>
                                                                        {/* <Select placeholder="Nơi khởi hành" className="mr-2" style={{ width: 130}} onChange={handleNoixuatphat} >
                                                                            <Option key="Hà Nội">Hà Nội</Option>
                                                                            <Option key="Ninh Bình">Ninh Bình</Option>
                                                                            <Option key="Hồ Chí Minh">Hồ Chí Minh</Option>
                                                                        </Select> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-1 d-inline-flex justify-content-center align-items-center">
                                                            <i class="fas fa-exchange-alt"></i>
                                                        </div>
                                                        <div class="col-7">
                                                            <div class="input-search-location w-100 mb-1 px-2 py-1">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-shrink-0 p-3">
                                                                        <i class="fas fa-map-marker-alt"></i>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <label class="mb-1">Điểm đến</label>
                                                                        <Select
                                                                            mode="multiple"
                                                                            placeholder="Hãy chọn điểm đến"
                                                                            style={{ width: 300}}
                                                                            className="mr-2 selection__rendered"
                                                                            onChange={handleTuyendi}
                                                                        >
                                                                            {!diadiem ? '' : diadiem.map((data) => (
                                                                                <Option key={data.name}>{data.name}</Option>
                                                                            ))}
                                                                        </Select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div class="input-search-location w-100 mb-1 px-2 py-1">
                                                                <div class="d-inline-flex align-items-center">
                                                                    <div class="flex-shrink-0 p-3">
                                                                        <i class="far fa-calendar-alt"></i>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <label class="mb-1">Ngày đi</label>
                                                                        <Space direction="vertical" className="mr-2" >
                                                                            <DatePicker placeholder="Chọn ngày đi" className="mr-3" style={{ width: 130 }} id="date" format="DD/MM/YYYY" onChange={handleNgaykhoihanh} />
                                                                        </Space>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div class="input-search-location w-100 mb-1 px-2 py-1">
                                                                <div class="d-inline-flex align-items-center">
                                                                    <div class="flex-shrink-0 p-3">
                                                                        <i class="far fa-calendar-alt"></i>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <label class="mb-1">Ngày về</label>
                                                                        <Space direction="vertical" className="mr-2" >
                                                                            <DatePicker placeholder="Chọn ngày về" className="mr-3" style={{ width: 130 }} id="date" format="DD/MM/YYYY" />
                                                                        </Space>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="input-search-location input-duration w-100 mb-1 px-2 py-1">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-shrink-0 p-3">
                                                                        <i class="far fa-smile"></i>
                                                                    </div>
                                                                    <div class="flex-grow-1">
                                                                        <label class="mb-1">Số người</label>
                                                                        <input  type="number"
                                                                                className="form-control"
                                                                                name="people"
                                                                                min="1"
                                                                                style={{ width: 72, height:30, border:0, fontWeight: 700, paddingLeft: 0, fontSize: 14, color: "#2d4271" }}
                                                                                placeholder="..."/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-1 create-btn">
                                                            <Popconfirm title="Gửi thông tin tour để lên lịch trình？" onConfirm={() => { onSubmit() }} icon={<QuestionCircleOutlined style={{ color: 'green' }} />}>
                                                                <Button type="submit" color="primary" variant="contained" className="mb-1">
                                                                    <i class="fas fa-arrow-right"></i>
                                                                </Button>
                                                            </Popconfirm>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </TabPane>
                                <TabPane tab="Tour nước ngoài" key="2">
                                Content of Tab Pane 2
                                </TabPane>
                                <TabPane tab="Tour đặc biệt" key="3">
                                Theo yêu cầu hoặc theo chủ đề
                                </TabPane>
                            </Tabs>
                        </div>

                        <div className={toggleState === 2 ? "content  active-content" : "content"} >
                        <h2>Content 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                        </div>

                        <div className={toggleState === 3 ? "content  active-content" : "content"} >
                        <h2>Content 3</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                        </div>

                        <div className={toggleState === 4 ? "content  active-content" : "content"} >
                        <h2>Content 4</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                        </div>

                        <div className={toggleState === 5 ? "content  active-content" : "content"} >
                        <h2>Content 5</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="container-tab2 text-center">
                    <img src={ShopeeDanhMuc} alt=""/>
                </div>
            </div>
        </div >
    )
}