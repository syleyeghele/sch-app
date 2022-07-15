import React, { Component } from 'react';
import '../components.css';
import {Link} from 'react-router-dom'




class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
                <div>
                    <div className='estyvida-backgrd'>
                        <h4 className='estyvida-txt'>Estyvida</h4>
                    </div>
                    <div className='container gen-contain'>
                    <hr className='hr-top'/>
                        <Link to='/overview'>
                            <div className='row'>
                                <div className='col-2'>
                                    <i className="fa-solid fa-table-columns icon-mar-right" />
                                </div>
                                <div className='col-8'>
                                    <p className='sideBar-fontSize'>Overview </p>
                                </div>
                                <div className='col-2'>
                                    <i className="icon-arrow fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </Link>
                        <hr className='hr-top'/>

                        <Link to='/teachers'>
                            <div className='row'>
                                <div className='col-2'>
                                <i className="fa-solid fa-person-chalkboard icon-mar-right" />
                                </div>
                                <div className='col-8'>
                                    <p className='sideBar-fontSize'>Teachers </p>
                                </div>
                                <div className='col-2'>
                                    <i className="icon-arrow fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </Link>
                        <hr className='hr-top'/>

                        <Link to='/students'>
                            <div className='row'>
                                <div className='col-2'>
                                    <i className="fa-solid fa-user-graduate icon-mar-right" />
                                </div>
                                <div className='col-8'>
                                    <p className='sideBar-fontSize'>Students </p>
                                </div>
                                <div className='col-2'>
                                    <i className="icon-arrow fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </Link>
                        <hr className='hr-top'/>

                        {/* <Link to='/classes'>
                            <div className='row'>
                                <div className='col-2'>
                                    <i className="fa-solid fa-chalkboard-user icon-mar-right" />
                                </div>
                                <div className='col-8'>
                                    <p className='sideBar-fontSize'>Classes </p>
                                </div>
                                <div className='col-2'>
                                    <i className="icon-arrow fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </Link>
                        <hr className='hr-top'/> */}

                        <Link to='/notice'>
                            <div className='row'>
                                <div className='col-2'>
                                    <i class="fa-solid fa-clipboard-list icon-mar-right"></i>
                                </div>
                                <div className='col-8'>
                                    <p className='sideBar-fontSize'>Notice Board </p>
                                </div>
                                <div className='col-2'>
                                    <i className="icon-arrow fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </Link>
                        <hr className='hr-top'/>
                    </div>
                </div>
        </React.Fragment> );
    }
}
 
export default Sidebar;