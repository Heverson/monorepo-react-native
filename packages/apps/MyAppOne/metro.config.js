// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// monorepo config root node_modules 
config.projectRoot = path.resolve(__dirname, '.');
config.watchFolders = [
    path.resolve(__dirname, '../../../node_modules'),
    path.resolve(__dirname, '../../shared/components'),
    path.resolve(__dirname),
];

// Remove all console logs in production...
config.transformer.minifierConfig.compress.drop_console = true;


config.resolver =  {
    extraNodeModules: new Proxy(
        {},
        {
            get: (target, name) => {
                return path.join(__dirname, `node_modules/${name}`);
            },
        },
    ),
},
  

module.exports = config;
