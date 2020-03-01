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

a) Setup dependencies in package.json as follows.

``` 
{
  "name": "microfrontends-reactjs-angularjs",
  "version": "1.0.0",
  "description": "We going to showcase Single-Spa in three steps: 1. Setup npm dep, webpack, babel. 2. Create apps home, navbar, angularjs. 3. Register apps with registerSingleSpa.",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack --config webpack.config.js -p",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/cleophasmashiri/microfrontends-reactjs-angularjs.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/cleophasmashiri/microfrontends-reactjs-angularjs/issues"
  },
  "homepage": "https://github.com/cleophasmashiri/microfrontends-reactjs-angularjs#readme",
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/plugin-proposal-object-rest-spread": "^7.2.0",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/preset-env": "^7.2.3",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.4",
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^0.28.11",
    "html-loader": "^0.5.5",
    "style-loader": "^0.21.0",
    "webpack": "^4.12.0",
    "webpack-cli": "^3.0.3",
    "webpack-dev-server": "^3.1.4"
  },
  "dependencies": {
    "angular": "^1.7.1",
    "angular-ui-router": "^1.0.18",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-router-dom": "^4.3.1",
    "react-transition-group": "^2.3.1",
    "single-spa": "^3.9.1",
    "single-spa-angularjs": "^3.0.1",
    "single-spa-react": "^2.5.4"
  }
}

```


// Update file .babelrc

```
touch .babelrc
```

```
{
    "presets": [
        ["@babel/preset-env", {
        "targets": {
            "browsers": ["last 2 versions"]
        }
        }],
        ["@babel/preset-react"]
    ],
    "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread"
    ]
}
```

c) Configure Webpack

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

Create index.html
```
<!-- index.html -->
<html>
  <head>
    <!-- Materialize CSS --> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
    <!-- single-spa apps -->
    <div id="navBar"></div>
    <div id="home"></div>
    <div id="angularJS"></div>
    <!-- Jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <!-- Materialize -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
    <!-- connect to the single-spa config file -->
    <script src="/dist/single-spa.config.js"></script>
  </body>
</html>
```

Create single-spa.config.js.

```
touch single-spa.config.js
```

## Setup home and Install dependencies
```
npm install react react-dom single-spa-react react-router-dom --save
```

```
touch src/home/home.app.js src/home/root.component.js
```



## 3. Register apps with registerSingleSpa. 


## Create angularJS app.

Install angular dependencies

```
npm install angular angular-ui-router single-spa-angularjs ---save
```

