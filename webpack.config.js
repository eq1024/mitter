const path = require('path')

module.exports ={
    mode:'production',
    entry:{
        x:'./src/x.js',
    },
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname,'dist')
    }
}
