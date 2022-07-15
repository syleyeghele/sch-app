import React, { Component } from 'react';
import '../components.css';



class Navbar extends Component {
    constructor(props) {
        super(props);


        this.signOut = this.signOut.bind(this)
    }

    signOut = () => {
        localStorage.clear()

        window.location.href = '/signin'
    }

    render() { 
        return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <i className="fa-solid fa-graduation-cap nav-font-img" />
                <p className='estyvidat-manag-txt mr-auto'>Welcome to <span className='estyvida-weight'>Estyvida</span> School Management System</p>

                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2 search-style" type="search" aria-label="Search"/><i className="fa-regular fa-file-lines search-img"></i>
                        </form>
                        <button className='btn btn-primary w-100 signup-btn btn-signout' onClick={this.signOut}>Sign Out</button>
                    </div>
                </div>
            </nav>
        </div> );
    }
}
 
export default Navbar;