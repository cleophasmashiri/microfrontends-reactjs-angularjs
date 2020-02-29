# Microfrontends Reactjs Angularjs

We going to showcase Single-Spa in three steps:
1. Setup npm dep, webpack, babel.
2. Create apps home, navbar, angularjs.
3. Register apps with registerSingleSpa.

---

## 1. Set npm dep, webpack, babel.

a) 
```
npm init
mkdir src
```

a) Install single-spa

``` 
npm install single-spa 
```

b) Install babel dependencies.

```

Cleos-MacBook-Pro:microfrontends-reactjs-angularjs cleophas$ npm install babel-core babel-plugin-syntax-dynamic-import babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-latest babel-preset-react --save-dev
```	

// Update file .babelrc

```
touch .babelrc
```

```
{
    "presets": [
      ["env", {
        "targets": {
          "browsers": ["last 2 versions"]
        }
      }],
      ["react"]
    ],
    "plugins": [
      "syntax-dynamic-import",
      "transform-object-rest-spread"
    ]
}
```

c) Webpack

```
npm install webpack webpack-dev-server webpack-cli clean-webpack-plugin@0.1.19 --save-dev
```

```
touch webpack.config.js
```

```
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
      // Set the single-spa config as the project entry point
        'single-spa.config': 'single-spa.config.js',
    },
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
              // Webpack style loader added so we can use materialize
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
          {
            test: /\.js$/,
            exclude: [path.resolve(__dirname, 'node_modules')],
            loader: 'babel-loader',
          },
            {
              // This plugin will allow us to use html templates when we get to the angularJS app
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
            },
        ],
    },
    node: {
        fs: 'empty'
    }, 
    resolve: {
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    plugins: [
      // A webpack plugin to remove/clean the build folder(s) before building
        new CleanWebpackPlugin(['dist']),
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
        historyApiFallback: true
    }
};
```




## 2. Create apps home, navbar, angularjs.
## 3. Register apps with registerSingleSpa. 