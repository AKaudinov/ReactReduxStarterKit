# ReactReduxStarterKit
A starter kit for React Redux, Webpack 2, ES6, bootstrap 4, and React-hot-loader 3.

#How to start the kit:
make sure to run 'npm install'
if dev dependencies do not get installed, run: 'npm install --only=dev'

#after module installation has been completed
to run the dev build, type the following: 'npm start'
Dev build has react-hot-loader 3 enabled, and also has commented out 'redux-dev-tools' implementation
once store is configure.
Dev build gets executed using 'webpack.config.dev.js'

#Prod build
prod build gets executed using 'webpack.config.prod.js'
To run the prod build, type the following: 'npm run build'
This will start the prod build, minify, and uglify all the solution files, and move your app to the 'dist' folder,
it will then open the browser with express serving the 'dist' folder.