requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        MainManger : 'MainManager',
        Route      : 'route',
        CommonAjax : 'commonJs/CommonAjax',
        jquery     : '../lib/jquery.min'
     }
});

// Start the main app logic.
requirejs(['MainManager'],
    function   (MainManager) {
    MainManager.init();
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});