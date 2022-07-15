import React, { Component } from 'react';
import './Overview.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'


class Classes extends Component {
    constructor(props) {
        super(props);
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
                                <h1>Classes</h1>
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
 
export default Classes;