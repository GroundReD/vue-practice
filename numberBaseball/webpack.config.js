const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions: ['.js', '.vue'],
    },
    //어떤 스크립트가 들어갈지 
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    // 스크립트 어떻게 합칠지에대한 규칙
    module: {
        rules:[{
            //정규표현식 .vue로 끝나는 것들
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [new VueLoaderPlugin()],
    // 스크립트들이 합쳐진 결과
    output: {
        // [name] 은 entry의 app
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
};