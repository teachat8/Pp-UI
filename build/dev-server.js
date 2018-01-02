var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();

var compiler = webpack(config);

// 使用中间件
var devMiddleware = require('webpack-dev-middleware')( compiler, {
    publicPath : config.output.publicPath,
    stats : {
        colors: true,
        chunks : false
    }
});

// 注册中间件
app.use(devMiddleware);

// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
    if (err) {
        return;
    }
    console.log('Listening at http://localhost:8888')
})