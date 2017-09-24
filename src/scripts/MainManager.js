define(['Route', 'CommonAjax','PartialViewStrings'], 
    function(Route, CommonAjax,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.StoryThree,'#container');
        }

    };

    return new MainManager();

});