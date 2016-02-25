# generator-react-webpack V2.0 - MBC3 Version

# About
Generator-React-Webpack will help you build new React projects using modern technologies. This is an edited version of generator-react-webpack to serve mbc3 style project components

Please visit: https://github.com/newtriks/generator-react-webpack for more info.

## Generators that extend generator-react-webpack
- [Generator-React-Webpack-Alt](https://github.com/weblogixx/generator-react-webpack-alt) (Adds ability to create actions, stores and sources for [alt.js](http://alt.js.org))
- [Generator-React-Webpack-Redux](https://github.com/stylesuxx/generator-react-webpack-redux) (Adds ability to create actions and reducers for [Redux](https://github.com/rackt/redux))

---

## Installation
```bash
# Make sure yeomean installed globally
npm install -g yo
pull repo in AppData/Roaming/npm/node_modules
```

## Generating new components
```bash
# cd into project
yo react-webpack:component fileName
```

The above command will create a new component, a package.json and a stylesheet all in the same folder in src/components/fileName

## Generating new stateless functional components
```
yo react-webpack:component fileName --stateless
```

Stateless functional components where introduced in React v0.14. They have a much shorter syntax than regular ones and no state or lifecycle methods at all. Please read the [React 0.14 release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) to get more information about those components.

___Note___: You will still be able to set properties for stateless components!

## Adding PostCSS plugins
If you have enabled [PostCSS](https://github.com/postcss/postcss) at generation time, install your PostCSS plugins via npm and *require* it in **postcss** function in *cfg/base.js*.

Example for autoprefixer:
```bash
cd my-new-project
npm install autoprefixer
```
Require in *cfg/base.js*
```JavaScript
...
postcss: function () {
  return [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 8']
    })
  ];
}
...
```
