# Maverick
##### A playground project for a web app & mobile app

The main focus of this project is not what the actual application is but to practice and understand everything that is involved
in creating and releasing an application as a web app and as a mobile app. For example:
- How to support both web app and mobile app in the most efficient way
- Mobile testing farms, and how to debug?
- How to derive a mobile/tablet support matrix
- App store Release process - both Google PlayStore and Apple App Store

Once this is done I shall play with some other things like:
- GraphQL, Apollo 
- PWA
- SSR

### Instructions

`npm install`

`npm run start`<br />
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run build`<br />
Builds the app for production to the `build` folder.<br />
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Notes
          
Initial project setup:<br/>
- Used [Create React App](https://github.com/facebook/create-react-app) and ejected straight away.
- Added prettier 
- Added normalize.css then realized CRA uses postcss-normalize which is quite nice so removed my stuff.
- Added this reset https://zellwk.com/blog/css-reset/ 
- I won't be using typescript nor unit tests as this is just a playground project (and practising these are covered by my professional work).

Built a very quick UI:<br/>
- Used grid for responsive layout
- https://react-kawaii.now.sh/ for some quick fun graphics
- Used css-modules for scoped styles (https://github.com/css-modules/css-modules)
- Used grid for the layout (although flex here would have worked too)
- Added a montserrat font
- Used ems for sizing
- This is really cool for viewing different screen sizes https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb

Got it working IE11!
- Editing the browserlist, adding polyfills AND swapping the hot server were the key.
- Grid isn't fully supported in ie11, so converted to flex
- Added postcss-css-variables so css variables work in ie11

### MISC NOTES TO BE REMOVED
- Use fontawesome
https://dev.to/weeb/font-awesome-guide-and-useful-tricks-you-might-ve-not-known-about-until-now-o15

- https://www.json-generator.com/# for generating json data

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

 /* {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: [
                path.resolve(__dirname, '../node_modules/ansi-regex'),
                path.resolve(__dirname, '../node_modules/ansi-styles'),
                path.resolve(__dirname, '../node_modules/chalk'),
                path.resolve(__dirname, '../node_modules/react-dev-utils'),
              ],
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                // See #6846 for context on why cacheCompression is disabled
                cacheCompression: false,
                compact: isEnvProduction,
              },
            },*/
