import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>{
    return (
        <div className="header">
            <nav className="navbar bg-inverse">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <IndexLink to="/" activeClassName="active" className="nav-link">
                            <i className="fa fa-home"/> Home
                        </IndexLink>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" activeClassname="active" className="nav-link">
                           <i className="fa fa-info-circle"/> About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;