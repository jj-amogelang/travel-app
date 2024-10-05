const path = require('path'); // Import the path module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // ... other configurations ...
    module: {
        rules: [
            // Rule for JavaScript and JSX files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Rule for CSS files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Rule for image files
            {
                test: /\.(png|jpe?g|jpg|svg|)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
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