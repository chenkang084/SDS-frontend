var fs = require('fs'),
    path = require('path');

function copyFile(src, dist) {
  fs.writeFileSync(dist, fs.readFileSync(src));
}

copyFile(path.join(__dirname,'../app/bootstrap/index.html'), path.join(__dirname,'../app/index.html'))