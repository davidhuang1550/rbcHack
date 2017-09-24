define(['jquery', 'CommonAjax', 'Footer','PartialViewStrings'],
        function($, CommonAjax, Footer, PartialViewStrings){
    class ChallengeOne{
        constructor(){
            this.editor;

        }
        // since this is the first challenge it can be in

        submit() {
            let value = this.editor.getSession().getValue(),
            problem = "sum";
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
        run() {
            // insert eval code
        }

        InitializeListeners(){
            let inlinePromise,
                self = this;
                this.editor =ace.edit("editor");
                this.editor.setTheme("ace/theme/monokai");
                this.editor.setShowPrintMargin(false);
                this.editor.getSession().setMode("ace/mode/javascript");

            require(['timer'],function(){});
            $("#submit").on('click',function(){
                self.submit();
            })  ;

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
