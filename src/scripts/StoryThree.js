define(['jquery', 'PartialViewStrings','Route'], 
        function($,PartialViewStrings, Route){

    class StoryThree {

        constrcutor(){

        }

        InitializeListeners(){
            $(".modal-backdrop").remove();
            $("#continueChallenge").on('click', function(){
                Route(PartialViewStrings.ChallengeThree, "#container");
            });
        }
    }

    return StoryThree;

});