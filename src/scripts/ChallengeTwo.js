define([],function(){
    
    class ChallengeTwo{
        constructor(){
            this.editor;
        }
        submit() {
            let value = this.editor.getSession().getValue(),
            problem = "debug";
            $.ajax({
              url: "https://rbcvalidate.herokuapp.com/validate",
              type: "POST",
              dataType: "json",
              data: {"code": value, "problem": problem},
              // dataType: "text",
              success: function(response){
                console.log(response);
              },
              error: function(error){
                console.log(error);
              }
            });
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