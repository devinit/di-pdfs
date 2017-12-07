const path = require('path');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const SRC_PATH = path.join(__dirname, '../src');
const STATIC_PATH = path.join(__dirname, '../static');

const newRules = [
    {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [
            SRC_PATH,
        ]
    }
]
const newExtensions =  ['.ts', '.tsx', '.js', '.jsx'];

module.exports = (config, env) => {
    const webpack = genDefaultConfig(config, env);
    const rules = webpack.module.rules.concat(newRules);
    const module = Object.assign(webpack.module, {rules})
    const extensions = webpack.resolve.extensions.concat(newExtensions);
    const resolve = Object.assign(webpack.resolve, {extensions, enforceExtension: false})
    return Object.assign(webpack, {resolve}, { module });
};
