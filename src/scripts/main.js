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
        CommonStrings : './commonJs/CommonStrings',
        PartialViewStrings : './commonJs/PartialViewStrings',
        scrollx      : '../lib/jquery.scrollex.min',
        scrolly       : '../lib/jquery.scrolly.min',
        skel          : '../lib/skel.min',
        util          : '../lib/util',
        Frontpage     : 'FrontPage',
        FrontpageInit : '../lib/FrontpageInit'
        
        
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