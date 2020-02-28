# Microfrontends Reactjs Angularjs

We going to showcase Single-Spa in three steps:
## 1. Setup npm dep, webpack, babel.
## 2. Create apps home, navbar, angularjs.
## 3. Register apps with registerSingleSpa.

---

## 1. Set npm dep, webpack, babel.


	a) Install single-spa

// package.json

``` 
npm install single-spa 
```

	b) 

// package.json
```
npm install babel-core, babel-plugin-syntax-dynamic-import, babel-plugin-transform-object-rest-spread, babel-preset-env, babel-preset-latest, babel-preset-react —dev
```	

// .babelrc
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
npm webpack webpack-dev-server webpack-cli --dev
npm install clean-webpack-plugin —dev
```




## 2. Create apps home, navbar, angularjs.
## 3. Register apps with registerSingleSpa. 