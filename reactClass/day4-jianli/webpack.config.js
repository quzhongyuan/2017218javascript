const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextWebpack=require('extract-text-webpack-plugin');

module.exports={
    //__dirname:值当前文件所在的文件夹的位置
    entry:path.resolve(__dirname,'./src/main.js'),
    output:{//出口文件
        path:path.resolve(__dirname,'./dist'),//出口文件的目录地址
        filename:'bundle.js'//出口文件名
    },
    module:{
        rules:[
            {//配置JS的运行
                test:/\.js[x]?$/,
                loader:'babel-loader', //loader后面只能跟一个，而use后面可以跟数组；
                exclude:/node_modules/
            },
            {//配置css
                test:/\.css$/,
                use:ExtractTextWebpack.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {//配置iconfont
                test:/\.(eot|svg|ttf|woff)(\?\w*)?$/,
                use:"url-loader?limit=50000"
            },
            {//配置iconfont
                test:/\.(png|git|jpg|jepg)$/,
                use:"url-loader?limit=50000"
            }
        ]
    },
    plugins:[
        new ExtractTextWebpack('styles.css'),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/index.html')
        })
    ]
};