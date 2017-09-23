define(['Route', 'CommonAjax','CommonStrings','PartialViewStrings'], 
    function(Route, CommonAjax, CommonStrings,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.FrontPage,'#container');    

        }

    };

    return new MainManager();

});