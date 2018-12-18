window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let showVideo = require('./parts/video.js'),
        download = require('./parts/download.js'),
        loremIpsum = require('./parts/loremIpsum.js'),
        changePage = require('./parts/changeModules');


    
    changePage();
    showVideo();
    download();
    loremIpsum();
});