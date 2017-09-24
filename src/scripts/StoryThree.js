define(['jquery', 'PartialViewStrings','Route'], 
        function($,PartialViewStrings, Route){

    class StoryThree{

        constrcutor(){

        }

        InitializeListeners(){
            $("#continueChallenge").on('click', function(){
                Route(PartialViewStrings.ChallengeThree, "#container");
            });

        }

    }

    return StoryThree;

});