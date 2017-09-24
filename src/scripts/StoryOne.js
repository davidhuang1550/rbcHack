define(['jquery','Route','PartialViewStrings','FrontpageInit'], 
        function($, Route, PartialViewStrings){
    class Story{
        constrcutor(){

        }

        InitializeListeners(){
            $("#startChallenge").on('click', function(){
                Route(PartialViewStrings. , "#container");
            });
        }

    }

    return Story;

});