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
            let self = this;
            this.editor = ace.edit("editor");
            this.editor.setTheme("ace/theme/monokai");
            this.editor.setShowPrintMargin(false);
            this.editor.getSession().setMode("ace/mode/javascript");


            $("#submit").on('click',function(){
                self.submit();
            });



        }
    }

    return ChallengeTwo;

})
