define(['Route', 'CommonAjax','PartialViewStrings'], 
    function(Route, CommonAjax,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.ChallengeThree,'#container');
        }

    };

    return new MainManager();

});