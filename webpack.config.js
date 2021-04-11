
const path = require('path');

console.log('LOG', path.resolve(__dirname, 'dist'));

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};