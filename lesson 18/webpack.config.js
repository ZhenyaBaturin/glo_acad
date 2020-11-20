//после прогрузки пакета path подключаем его сюда
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    devServer: {
        overlay: true,
        port: 8000,
        historyApiFallback: true,
        hot: true,
    },
   
};