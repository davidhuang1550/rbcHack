define(['Route', 'CommonAjax','PartialViewStrings'], 
    function(Route, CommonAjax,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.ChallengeOne,'#container');
        }

    };

    return new MainManager();

});