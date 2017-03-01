import React from 'react';

//There are some limitations to hot-reloading, stateless function components don't
//hot-reload unless they have a parent class based component
//which is why HomePage is a class based component


class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page-main">
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="home-jumbo-heading">Welcome!</h1>
                        <p className="lead">Welcome to React Redux Starter kit,
                            you can use this starter kit to begin
                            your adventures with React, Redux, Bootstrap 4, and Webpack 2!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;