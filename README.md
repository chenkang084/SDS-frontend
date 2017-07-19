# SDS-frontend

SDS-frontend based on [blur/admin](https://github.com/akveo/blur-admin)  and refactored via webpack ,es6,es7.

Now you can write es6,es7,sass in the project easily.
Please follow as below steps to run you local environment.
steps:
  1. npm install
  2. npm run setup
  3. npm start

then you can access http://localhost:3000 to start your app.

## note:

you need change the base url in index.html to make sure your app runs well.

example:
    your web app (such as apache) root path is : apache/var/www/sds ,then you need change the
    `<base href="/"> `
    to
    `<base href="/sds >`
