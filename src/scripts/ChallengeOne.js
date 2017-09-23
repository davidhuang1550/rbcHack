define(['jquery', 'CommonAjax', 'Footer','PartialViewStrings'],
        function($, CommonAjax, Footer, PartialViewStrings){
    class ChallengeOne{
        constrcutor(){

        }
        // since this is the first challenge it can be in 

        InitializeListeners(){      
            let inlinePromise,
                self = this;
            
            inlinePromise = CommonAjax(PartialViewStrings.Footer);
            inlinePromise.done(function(result){
                $("#footer").html(result);
            }).fail(function(){
                console.log("failed downloading footer");
            });
            
        
        }

    }


    return ChallengeOne;


});