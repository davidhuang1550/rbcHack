define(['Route', 'CommonAjax','PartialViewStrings'], 
    function(Route, CommonAjax,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.StoryTwo,'#container');
        }

    };

    return new MainManager();

});