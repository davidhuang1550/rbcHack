define(['Route', 'CommonAjax','PartialViewStrings'], 
    function(Route, CommonAjax,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.ChallengeTwo,'#container');
        }

    };

    return new MainManager();

});