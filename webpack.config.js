const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV - process.env.NODE_ENV || 'developmnent';
if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({ path:'.env.test' })
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path:'.env.development' })
}
// process.env.NODE_ENV

module.exports =(env) =>{
const isProduction = env === 'production';
const CSSExtract = new MiniCssExtractPlugin('styles.css');
    console.log('env',env)
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public','dist'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test:/\.s?css$/,
                use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
            }]
        },
        plugins :[
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY' : "'AIzaSyC14zrFAXT6Ae_oJRZD4iA6zSn_mQHGJJE'",
                'process.env.FIREBASE_AUTH_DOMAIN' : "'expensify-8fb86.firebaseapp.com'",
                'process.env.FIREBASE_DATABSE_URL' : "'https://expensify-8fb86.firebaseio.com'",
                'process.env.FIREBASE_PROJECT_ID' : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET' : "'expensify-8fb86.appspot.com'",
                'process.env.FIREBASE_APP_ID' : JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID' : JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
                'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            })
        ],
        devtool: isProduction? 'source-map':'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
}




