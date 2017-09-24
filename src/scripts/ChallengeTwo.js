define([],function(){

    class ChallengeTwo{
        constructor(){

        }

        InitializeListeners(){
            var editor = ace.edit("editor");
            editor.setTheme("ace/theme/monokai");
            editor.setShowPrintMargin(false);
            editor.getSession().setMode("ace/mode/javascript");

        }
    }

    return ChallengeTwo;

})
