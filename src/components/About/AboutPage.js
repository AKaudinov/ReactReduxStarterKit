import React from 'react';
import {IndexLink} from 'react-router';

const AboutPage = () =>{
    return(
        <div className="about-main">
            <div className="container-fluid">
                <div className="jumbotron about-jumbotron">
                    <h1>Welcome to an about page</h1>
                        <IndexLink to="/" className="btn btn-success">
                            <i className="fa fa-home"/> Back Home
                        </IndexLink>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;