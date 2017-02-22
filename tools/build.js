/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config.prod';
import colors from 'colors'; //eslint-disable-line no-unused-vars
/*eslint-disable no-unsued-vars*/

process.env.NODE_ENV = 'production';

consoloe.log('Webpack generating minified bundle for production'.green);

webpack(webpackConfig).run((err, stats) =>{
    if(err){
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors){
        return jsonStats.errors.map(err => console.log(err.red));
    }

    if(jsonStats.hasWarnings){
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`webpack stats: ${stats}`);

    //successful build
    console.log('The app has been compiled in production mode and written to /dist'.green);
    return 0;
});