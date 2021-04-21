const path = require('path');
// const {when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES} = require('@craco/craco');

module.exports = {
    webpack: {
        alias: {
            '~': path.join(__dirname, 'src'),
            '~business': path.join(__dirname, 'src/components/business')
        }
    }
};
