import React from 'react';
import {IndexLink} from 'react-router';


//There are some limitations to hot-reloading, stateless function components don't
//hot-reload unless they have a parent class based component
//which is why AboutPage is a class based component

class AboutPage extends React.Component{
    render() {
        return (
            <div className="about-main">
                <div className="container">
                    <div className="jumbotron about-jumbotron">
                        <h1>Welcome to an about page</h1>
                        <IndexLink to="/" className="btn btn-success">
                            <i className="fa fa-home"/> Back Home
                        </IndexLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;