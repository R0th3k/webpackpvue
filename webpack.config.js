const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    output: {
        filename: 'assets/js/app.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                indentWidth: 4
                            }
                        }
                    }
                    
                ]
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }, {
                test: [
                    /\.js$/, /\.jsx$/
                ],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@vue/babel-preset-app', '@babel/preset-env'
                        ],
                        plugins: ['@babel/plugin-proposal-optional-chaining']
                    }
                }
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/images',
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: ['svg-inline-loader', 'svg-url-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        compress: true,
        port: 8080
      },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({title: 'Documento', template: 'src/index.html'}),
        new MiniCssExtractPlugin({filename: './assets/css/app.css'})
    ]
}
