const webpack = require('webpack');
const middleware =  require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const express = require('express');
const config = require('./webpack.config');

const compile = webpack(config);
const app = express();
app.use(express.static('/'));
app.use(middleware(compile, {
    publicPath: '/'
}));
app.use(hot(compile));

app.get('/', (req, res, next) => {
    console.log('-----');
    res.send('hello');
});

app.listen(3000, () => {
    console.log('-- serve have start on 3000 port');
});