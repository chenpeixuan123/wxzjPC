const webpack = require('webpack');
module.exports = {
    publicPath: './',
    outputDir:'dist',
    assetsDir:'static',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]

    }
}