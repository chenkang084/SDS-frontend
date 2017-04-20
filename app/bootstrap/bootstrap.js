import "../library/vendor.css"
import "../styles/app.css"
// import "./styles/404.css"
// import "./styles/auth.css"

/**
 * dynamic import theme/*.module.js
 */
let themeModules = require.context('../theme', true, /^.*\.module\.js$/igm);
themeModules.keys().forEach(themeModules);

/**
 * dynamic import theme/*.*.js except module
 */
let themeJs = require.context('../theme', true, /^.*\.((?!module).)*\.js$/igm);
themeJs.keys().forEach(themeJs);

/**
 * dynamic import pages/*.module.js
 */
let pageModules = require.context('../pages', true, /^.*\.module\.js$/igm);
pageModules.keys().forEach(pageModules);

/**
 * dynamic import pages/*.*.js except module
 */
let pageJs = require.context('../pages', true, /^.*\.((?!module).)*\.js$/igm);
pageJs.keys().forEach(pageJs);

require( "./app.js")




