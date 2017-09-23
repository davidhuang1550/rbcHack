define(['Route', 'CommonAjax','CommonStrings','PartialViewStrings'], 
    function(Route, CommonAjax, CommonStrings,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(CommonStrings.FrontPage,PartialViewStrings.FrontPage,'#container');    

        }

    };

    return new MainManager();

});