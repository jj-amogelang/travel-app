const path = require('path'); // Import the path module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Your entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file name
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Match .js and .jsx files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel loader
                },
            },
            {
                test: /\.css$/, // Match .css files
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML file
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'), // Directory to serve static files from
        compress: true, // Enable gzip compression
        port: 9000, // Port to run the server on
        open: true, // Automatically open the browser
        historyApiFallback: true, // Fallback to index.html for SPA routing
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions
    },
};