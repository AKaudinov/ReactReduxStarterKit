import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-toggleable-sm navbar-inverse bg-info">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <a className="navbar-brand" href="#">React-Redux Starter kit</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <IndexLink to="/" activeClassName="active" className="nav-link">
                                <i className="fa fa-home"/> Home
                            </IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" activeClassName="active" className="nav-link">
                                <i className="fa fa-info-circle"/> About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;