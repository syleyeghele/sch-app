import React, { Component } from 'react';
import './Overview.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import axios from 'axios'
import Alert from 'alert-alert'
import 'alert-alert/dist/standalone/css/alert-alert.css'
import Moment from 'react-moment';




class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice : '',
            noticeTitle: '',
            notice_txt: []
        }
    }

    handleNoticeChange = (event) => {
        this.setState({
            notice: event.target.value
        });
    }

    handleNoticeTitleChange = (event) => {
        this.setState({
            noticeTitle: event.target.value
        });
    }

    submitNoticeForm = (event) => {
        event.preventDefault()
        let notice = this.state.notice
        let noticeTitle = this.state.noticeTitle
        let noticeEmail = localStorage.userEmail
        axios.post('https://estyvida-server.herokuapp.com/notice', {
            notice: notice,
            noticeEmail: noticeEmail,
            noticeTitle: noticeTitle
        }).then( (response) => {
            console.log(response)
            if (response.data.status === 'success') {
                let type    = 'success';
                let message = response.data.message;
                let config  = { timeout: 2000 };
                Alert.alert(type, message, config);
                window.location.href = '/notice'
            } else {
                let type    = 'error';
                let message = response.data.message;
                let config  = { timeout: 2000 };
                Alert.alert(type, message, config);
            }
        })
    }

    componentDidMount(){
        axios.get('https://estyvida-server.herokuapp.com/get_notice', {

        }).then((response) => {
           let notice_txtData = response.data.data
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
                                    <p className='page-title-style'>Notice Board</p>
                                    <form onSubmit={this.submitNoticeForm}>
                                        <div className="form-group" style={{marginRight: '1%'}}>
                                        <input type="text" className="form-control notice-title-area" id="exampleFormControlInput1" placeholder="Enter notice title, (must be more than 8 characters)." value={this.state.noticeTitle} onChange={this.handleNoticeTitleChange}/>
                                            <textarea className="form-control notice-text-area" id="exampleFormControlTextarea1" rows="3" placeholder='Enter notice here to publish, (must be more that 30 characters).' value={this.state.notice} onChange={this.handleNoticeChange}/>
                                        </div>

                                        <div className='notice-btn-centre'>
                                            <button type='submit' className='publish-btn btn'>Publish Notice</button>
                                        </div>
                                    </form>
                                       
                                    <div className='card notice-page-notice-board'>
                                        
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
                                                        <p className='notice-text'>{data.notice_text}</p>
                                                    </div>
                                                    
                                                    <div className='row'>
                                                        <div className='col-4'>
                                                        <p className='notice-text'>Publisher: {data.name}</p>
                                                        </div>
                                                        <div className='col-4'/>
                                                        <div className='col-4'>
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
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2 pl-0 pr-0 footer-blank' />
                                <div className='col-10 pl-0 pr-0'>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    
                </React.Fragment>
             );
        } else {

            window.location.href = '/signin'

        }
        
    }
}
 
export default Notice;