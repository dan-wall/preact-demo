const glob = require('glob');

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('@fullhuman/postcss-purgecss')({
            content: glob.sync(`./src/**/*`, {
                nodir: true
            }),
        }),
        require('postcss-preset-env')({
            browsers: 'last 2 versions'
        }),
        require('autoprefixer'),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }]
        })
    ]
};
