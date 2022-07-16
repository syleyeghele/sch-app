import React, { Component} from 'react';
import './Overview.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import axios from 'axios'
import Alert from 'alert-alert'
import 'alert-alert/dist/standalone/css/alert-alert.css'
import Moment from 'react-moment';



class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: 'newDate()',
            email: '',
            setIsOpen: false,
            fname: '',
            sname: '',
            useer_type: '',
            notice_txt: [],
            cclass: '',
            pname: '',
            phone: '',
            address: '',
            dofb: '',
            gender: ''
        }

      this.showModal = this.showModal.bind(this)
      this.submitModalForm = this.submitModalForm.bind(this)

    }

    onChangePname = (event) => {
        this.setState({
            pname: event.target.value
        })
    }

    onChangeGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    onChangeDofb = (event) => {
        this.setState({
            dofb: event.target.value
        })
    }

    onChangePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    onChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onChangeFname = (event) => {
        this.setState({
            fname: event.target.value
        })
    }

    onChangeSname = (event) => {
        this.setState({
            sname: event.target.value
        })
    }

    onChangeUser_type = (event) => {
        this.setState({
            user_type: event.target.value
        })
    }

    onChangeClass = (event) => {
        this.setState({
            cclass: event.target.value
        })
    }

    submitModalForm = (event) => {
        event.preventDefault();
        let fname = this.state.fname,
            sname = this.state.sname,
            user_type = this.state.user_type,
            email = this.state.email,
            cclass = this.state.cclass,
            pname = this.state.pname,
            phone = this.state.phone,
            address = this.state.address,
            dofb = this.state.dofb,
            gender = this.state.gender


            axios.post('https://estyvida-server.herokuapp.com/user/add', {
                fname: fname,
                sname: sname,
                user_type: user_type,
                email: email,
                cclass: cclass,
                pname: pname,
                phone: phone,
                address: address,
                dofb: dofb,
                gender: gender

            }).then( (response) => { 

                if (response.data.status === 'success') {
                    let type    = 'success';
                    let message = response.data.message;
                    let config  = { timeout: 2000 };
                    setTimeout(() => {  window.location.href = '/overview'; }, 2000);
                    Alert.alert(type, message, config);
                } else {
                    let type    = 'error';
                    let message = response.data.message;
                    let config  = { timeout: 2000 };
                    Alert.alert(type, message, config);
                }
            })

    }

     showModal = () => {
        this.setState ({
            setIsOpen: true
        })
      };
    
     hideModal = () => {
        this.setState ({
            setIsOpen: false
        })
      };

      componentDidMount(){

            axios.get('https://estyvida-server.herokuapp.com/all_students', {
                
            }).then( (response) => {
                console.log(response.data.data.length)
                let studentNum = response.data.data.length
                this.setState({
                    studentNum: studentNum
                })
            });

            axios.get('https://estyvida-server.herokuapp.com/all_teachers', {
                
            }).then( (response) => {
                console.log(response.data.data.length)
                let teacherNum = response.data.data.length
                this.setState({
                    teacherNum: teacherNum
                })
            });

            axios.get('https://estyvida-server.herokuapp.com/get_notice', {

            }).then((response) => {
            let data = response.data.data
        
            let num1 = data.length - 1
            let notice_txtData = data.slice(num1);
            console.log(data)
            console.log(notice_txtData)
                this.setState({
                    notice_txt: notice_txtData
                })
                
            })

      }

    render() { 

        if (localStorage.userEmail) {
            return ( 
                <React.Fragment>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-2 pl-0 pr-0 side-height-col-2'>
                                <Sidebar />
                            </div>
                            <div className='col-10 pl-0 pr-0'>
                                <Navbar />
                                <div className='container margin-all'>
                                    <p className='page-title-style'>Overview</p>
                                    <div className='row'>
                                        <div className='col-3 card all-o-card'>
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <i className="fa-solid fa-person-chalkboard icon-over icon-over-right" />
                                                    <p className='label-over-icon'>Teachers</p>
                                                </div>
                                                <div className='col-2'>
                                                    <p className='over-sepe'>|</p>
                                                </div>
                                                <div className='col-5'>
                                                    <p className='over-value'>{this.state.teacherNum}</p>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className='col-3 card middle-o-card all-o-card'>
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <i className="fa-solid fa-user-graduate icon-over icon-over-right" />
                                                    <p className='label-over-icon'>Students</p>
                                                </div>
                                                <div className='col-2'>
                                                    <p className='over-sepe'>|</p>
                                                </div>
                                                <div className='col-5'>
                                                    <p className='over-value'>{this.state.studentNum}</p>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className='col-3 card all-o-card'>
                                            <div className='row'>
                                                <div className='col-5'>
                                                    <i class="fa-regular fa-money-bill-1 icon-over icon-over-right" />
                                                    <p className='label-over-icon'>Revenue</p>
                                                </div>
                                                <div className='col-2'>
                                                    <p className='over-sepe'>|</p>
                                                </div>
                                                <div className='col-5 padding-r-l-0'>
                                                    <p className='over-value'>₦ 20,000,000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row calendar-row-height'>
                                        <div className='col-6'>
                                        <div className='card notice-page-notice-board overview-notice'>
                                        
                                        <div>
                                            <p className='notice-header'>Notice Board</p>
                                        </div>
                                        <div className='notice-content'>

                                            {this.state.notice_txt.map( (data) => (
                                                <div>

                                                    <div>
                                                        <h3 className='notice-text notice-title'>Title: {data.title}</h3>
                                                    </div>

                                                    <div>
                                                        <p className='notice-text notice-line-height'>{data.notice_text}</p>
                                                    </div>
                                                    
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                        <p className='notice-text'>Publisher: {data.name}</p>
                                                        </div>
                                                        
                                                        <div className='col-6'>
                                                        <p className='notice-text date-pub'>Date Published: <Moment format="DD/MM/YYYY">
                                                            {data.created_at}
                                                        </Moment>
                                                        </p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                            ))}
                                            
                                        </div>
                                    </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className="calendar-card">
                                                <Calendar className="calendar-style"  />
                                            </div>
                                            <div>
                                            <div class="modal" tabindex="-1" role="dialog"> 
    
                                            </div> 
                                                <Modal show={this.state.setIsOpen}>
                                                    <ModalHeader>
                                                        <ModalTitle>
                                                            <button type="button" className='modal-btn-hide' onClick={this.hideModal} data-dismiss="modal">
                                                                <i class="fa-regular fa-circle-xmark"></i> 
                                                            </button>
                                                        </ModalTitle>
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <div className='container'>
                                                            <form onSubmit={this.submitModalForm}>
                                                                <div className="form-group">
                                                                    <label for="formGroupExampleInput" className='label-title-modal'>EMAIL</label>
                                                                    <input type="email" className="form-control placeholder-title modal-form-placehold" id="formGroupExampleInput" placeholder="Enter Email" value={this.state.email} onChange={this.onChangeEmail}/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label for="formGroupExampleInput" className='label-title-modal'>FIRST NAME</label>
                                                                    <input type="text" className="form-control placeholder-title modal-form-placehold" id="formGroupExampleInput" placeholder="Enter First Name" value={this.state.fname} onChange={this.onChangeFname}/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label for="formGroupExampleInput2" className='label-title-modal'>SURNAME</label>
                                                                    <input type="text" className="form-control placeholder-title modal-form-placehold" id="formGroupExampleInput2" placeholder="Enter Surname" value={this.state.sname} onChange={this.onChangeSname} />
                                                                </div>
                                                                <div className="form-group">
                                                                <label for="formGroupExampleInput2" className='label-title-modal'>GENDER</label>
                                                                    <select className='select-style select-style-modal modal-form-placehold' value={this.state.gender} onChange={this.onChangeGender}>
                                                                        <option value=" ">Select gender</option>
                                                                        <option value="male">Male</option>
                                                                        <option value="female">Female</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label for="formGroupExampleInput2" className='label-title-modal'>DATE OF BIRTH</label>
                                                                    <input type="date" className="form-control placeholder-title modal-form-placehold" id="formGroupExampleInput2" placeholder="Enter Date of Birth" value={this.state.dofb} onChange={this.onChangeDofb} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label for="formGroupExampleInput2" className='label-title-modal'>PARENTS NAME / STAFF NEXT OF KIN</label>
                                                                    <input type="text" className="form-control placeholder-title modal-form-placehold" id="formGroupExampleInput2" placeholder="Enter Parents Name / Staff Next of Kin" value={this.state.pname} onChange={this.onChangePname} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label for="formGroupExampleInput2" className='label-title-modal'>PARENTS PHONE NUMBER / STAFF PHONE NUMBER</label>
                                                                    <input type="number" className="form-control placeholder-title modal-form-placehold" id="formGroupExampleInput2" placeholder="Enter Parents Phone Number / Staff Phone Number e.g: 080XXXXXXXX" value={this.state.phone} onChange={this.onChangePhone} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label for="formGroupExampleInput2" className='label-title-modal'>HOME ADDRESS</label>
                                                                    <input type="text" className="form-control placeholder-title modal-form-placehold" id="formGroupExampleInput2" placeholder="Enter Home Address" value={this.state.address} onChange={this.onChangeAddress} />
                                                                </div>
                                                                <div className="form-group">
                                                                <label for="formGroupExampleInput2" className='label-title-modal'>USER TYPE</label>
                                                                    <select className='select-style select-style-modal modal-form-placehold' value={this.state.user_type} onChange={this.onChangeUser_type}>
                                                                        <option value=" ">Select a user type</option>
                                                                        <option value="teacher">Teacher</option>
                                                                        <option value="student">Student</option>
                                                                        <option value="admin">Admin</option>
                                                                    </select>
                                                                </div>

                                                                <div className="form-group">
                                                                <label for="formGroupExampleInput2" className='label-title-modal'>CLASS</label>
                                                                    <select className='select-style select-style-modal modal-form-placehold' value={this.state.cclass} onChange={this.onChangeClass}>
                                                                        <option value=" ">Select a class</option>
                                                                        <option value="Pre Nusery">Pre Nusery</option>
                                                                        <option value="Nusery 1">Nusery 1</option>
                                                                        <option value="student">Nusery 2</option>
                                                                        <option value="Primary 1">Primary 1</option>
                                                                        <option value="Primary 2">Primary 2</option>
                                                                        <option value="Primary 3">Primary 3</option>
                                                                        <option value="Primary 4">Primary 4</option>
                                                                        <option value="Primary 5">Primary 5</option>
                                                                        <option value="Non-Academic">Non-Academic</option>
                                                                    </select>
                                                                </div>
                                                                
                                                                <button type="submit" className="modal-btn-save">Save User</button>
                                                            </form>
                                                        </div>
                                                    </ModalBody>
                                                </Modal>
                                                <button type="button" onClick={this.showModal} className=" create-userid-btn" data-toggle="modal" data-target="#exampleModal">
                                                Creat New User/Account
                                                </button>
                                            </div>
    
                                        </div>
                                        </div>
                                        <div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2' />
                        </div>
                        <div className='row'>
                            <div className='col-2 pl-0 pr-0 footer-blank' />
                            <div className='col-10 pl-0 pr-0'>
                                <Footer />
                            </div>
                        </div>
                    </div>
                <div>
            </div>
                </React.Fragment>
             );
        } else {

            window.location.href = '/signin'

        }

       
    }
}
 
export default Overview;