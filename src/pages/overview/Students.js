import React, { Component } from 'react';
import './Overview.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import axios from 'axios';
import Moment from 'react-moment';
import Footer from '../../components/footer/footer'



class Teachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentData: [] 
        }
    }

    componentDidMount(){
        axios.get('https://estyvida-server.herokuapp.com/get_all_students', {

        }).then( (response) => {
            let studentData = response.data.data
            this.setState({
                studentData: studentData
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
                                    <p className='page-title-style'>Students</p>
                                    
                                    <table className="table table-striped">

                                        <thead>
                                            <tr>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Student ID</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Date Added</th>
                                            </tr>
                                        </thead>
                                    
                                        <tbody>
                                            { 
                                              
                                                this.state.studentData.map( (data) => (
                                                    
                                                    <tr>
                                                        <th scope="row">{data.fname} {data.sname}</th>
                                                        <td>{data.user_id}</td>
                                                        <td>{data.email}</td>
                                                        <td>
                                                            <Moment format="DD/MM/YYYY">
                                                                {data.created_at}
                                                            </Moment>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row  mr-0 ml-0'>
                        <div className='col-2 pl-0 pr-0 footer-blank' />
                            <div className='col-10 pl-0 pr-0'>
                                <Footer />
                            </div>
                        </div>
                </React.Fragment>
             );
        } else {

            window.location.href = '/signin'

        }
    }
}
 
export default Teachers;