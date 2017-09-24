define(['Route', 'PartialViewStrings'], function(
        Route, PartialViewStrings){
    class StoryTwo{

        constructor(){

        }
    
        InitializeListeners(){
            $(".modal-backdrop").remove();
            $("#continueChallenge").on('click', function(){
                Route(PartialViewStrings.ChallengeTwo, "#container");
            });
        }

    };

    return StoryTwo;

});