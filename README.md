This project is a fork from gulpshot (https://github.com/brnrdog/gulpshot). gulpshot did not work on my windows 10 platfrom so I made some minor changes.

A simple way to kick start gulp based web app projects. 

## Getting Started

First you need to install the module running:

```shell
npm install -g gulp-project-template-for-windows
```

To create and start using a new gulp project, run the following:

```shell
# Install node dependencies...
$ npm install
# Start a new server (localhost:7777) and watch for changes
$ gulp serve
``` 


## Features

- CSS Autoprefixing
- Automatically minify css files
- Automatically compile Sass
- Automatically lint scripts via jsHint
- Automatically uglify script files
- Automatically optimize image files (.jpg, .png, .gif)
- Watches for changes
- Initialize a preview server with LiveReload support
- Generates an optimized build
- Bundles js modules via browserify

## Structure

A sample project structure would be:

```
|-- app
|  |-- vendors (bower_components)
|  |-- styles
|  |  |-- main.scss
|  |-- js
|  |  |-- script_one.js
|  |  |-- script_two.js
|  |-- images
|  |  |-- background.png
|  |-- index.html
|-- dist
|  |-- styles
|  |  |-- main.min.css
|  |-- js
|  |  |-- app.min.js
|  |-- images
|  |-- index.html
|-- node_modules
```
## Troubleshooting

In case of any compiling error, make sure your windows has the required compilers:

```shell
# Install Visual C++ Compilers, etc ...
$ npm install --global --production windows-build-tools
# command-line tool written in Node.js for compiling native addon modules
$ npm install -g node-gyp
``` 
https://github.com/felixrieseberg/windows-build-tools
https://github.com/nodejs/node-gyp