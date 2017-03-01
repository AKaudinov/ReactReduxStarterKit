import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'source-map',
    entry: [
        'eventsource-polyfill',
        //'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    target: 'web',
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: './src'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                use: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|ttf|eot|ico|)?(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader?name=fonts/[name].[hash].[ext]?'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]?'
            },
            {
                test:/\.ico$/,
                use: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
            options: {
                noInfo: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery",
            "window.Tether":"tether",
            "tether":'tether',
            "Tether":'tether'
        })
    ],
    performance:{
        hints: false
    }
}