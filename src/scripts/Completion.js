define(['jquery','summary'], 
        function($,summary){

    class Completion{

        constructor(){

        }

        InitializeListeners(){
            let CompletionOne = summary.ChallengeOne,
                CompletionTwo = summary.ChallengeTwo,
                CompletionThree = summary.ChallengeThree;

            console.log(CompletionOne);
            console.log(CompletionTwo);
            console.log(CompletionThree);
        }

    }

    return Completion;

});