requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        MainManger    : 'MainManager',
        Route         : 'route',
        CommonAjax    : './commonJs/CommonAjax',
        jquery        : '../lib/jquery.min',
        PartialViewStrings : './commonJs/PartialViewStrings',
        scrollx       : '../lib/jquery.scrollex.min',
        scrolly       : '../lib/jquery.scrolly.min',
        skel          : '../lib/skel.min',
        util          : '../lib/util',
        Ace           : '../lib/ace',
        Frontpage     : 'FrontPage',
        FrontpageInit : '../lib/FrontpageInit',
        ChallengeOne  : 'ChallengeOne',
        ChallengeTwo  : 'ChallengeTwo',
        ChallengeThree: 'ChallengeThree',
        Footer        : './commonJs/Footer',
        themeMonoksi  : '../lib/theme-monokai',
        modeJavascript: '../lib/mode-javascript',
        workerJavascript: '../lib/worker-javascript',
        bootstrap        : '../lib/bootstrap.min'

        
        
     },
    shim: {    
         FrontPage: {
             //These script dependencies should be loaded before loading
             //backbone.js
             deps: ['jquery','scrollx','scrolly','skel','util'],
             //Once loaded, use the global 'Backbone' as the
             //module value.
         },
        scrollx: {
            deps: ['jquery']
        },
        scrolly: {
            deps: ['jquery']
        },
        util : {
            deps: ['jquery']
        },
        Story: {
            deps: ['jquery','scrollx','scrolly','skel','util']
        },
        ChallengeOne: {
            deps: ['Ace','modeJavascript','themeMonoksi','workerJavascript','bootstrap']
        }
    }
});

// Start the main app logic.
requirejs(['MainManager'],
    function   (MainManager) {
    MainManager.init();
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});