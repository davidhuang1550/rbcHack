define(['Route', 'PartialViewStrings'], function(
        Route, PartialViewStrings){
    class StoryTwo{

        constructor(){

        }
    
        InitializeListeners(){
            $("#continueChallenge").on('click', function(){
                Route(PartialViewStrings.ChallengeTwo, "#container");
            });
        }

    };

    return StoryTwo;

});