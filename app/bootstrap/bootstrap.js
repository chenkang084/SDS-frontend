import "../library/vendor.css"
import "../styles/app.css"
// import "./styles/404.css"
// import "./styles/auth.css"

let themeModules = require.context('../theme', true, /^.*\.module\.js$/igm);
themeModules.keys().forEach(themeModules);
let themeJs = require.context('../theme', true, /^.*\.((?!module).)*\.js$/igm);
themeJs.keys().forEach(themeJs);

let pageModules = require.context('../pages', true, /^.*\.module\.js$/igm);
pageModules.keys().forEach(pageModules);
let pageJs = require.context('../pages', true, /^.*\.((?!module).)*\.js$/igm);
pageJs.keys().forEach(pageJs);

require( "./app.js")



import { encode,decode } from "../utils/base64.util"

import "../pages/clusterMgmt/clusterMgmt.module.js"


