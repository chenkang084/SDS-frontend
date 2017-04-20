'use strict';

angular.module('BlurAdmin', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.sortable',
        'ui.router',
        'ngTouch',
        'toastr',
        'smart-table',
        "xeditable",
        'ui.slimscroll',
        'ngJsTree',
        'angular-progress-button-styles',

        'BlurAdmin.theme',
        'BlurAdmin.pages'
    ])
    // .config(function($locationProvider) {
    //     // Set to use HTML5 mode, which removes the #! from modern browsers.
    //     // Only when config it and browser support HTML5 history API
    //     let isHtml5Mode = !!true && (window.history && 'pushState' in window.history);
    //     $locationProvider.html5Mode(isHtml5Mode);
    //     $locationProvider.hashPrefix('!');
    // })