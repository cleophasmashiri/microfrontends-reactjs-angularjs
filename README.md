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
npm install babel-core, babel-plugin-syntax-dynamic-import, babel-plugin-transform-object-rest-spread, babel-preset-env, babel-preset-latest, babel-preset-react —dev
```	

// Update file .babelrc

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
npm install webpack webpack-dev-server webpack-cli clean-webpack-plugin --dev
```




## 2. Create apps home, navbar, angularjs.
## 3. Register apps with registerSingleSpa. 