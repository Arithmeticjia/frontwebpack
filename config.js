const path = require('path')

module.exports = {
    entry: {
        app1: "./src/index.js",
        app2: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].main.js'
    }
}