window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let changePage = require('./parts/changePage'),
        showVideo = require('./parts/video.js'),
        difference = require('./parts/difference.js'),
        mainSlider = require('./parts/mainSlider.js'),
        forms = require('./parts/form.js'),
        InputMask = require('./parts/mask.js'); 

    difference();
    mainSlider();
    changePage();
    showVideo();  
    forms();
    InputMask();  
});