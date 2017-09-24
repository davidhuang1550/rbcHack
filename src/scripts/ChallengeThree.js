define(['jquery','Route', 'PartialViewStrings'],
        function($,Route, PartialViewStrings){
    
    class ChallengeThree{
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
                  require(['summary'],function(summary){
                      summary.ChallengeThree = $('#timer').text();
                  });
                console.log(response);
              },
              error: function(error){
                console.log(error);
              }
            });
        }

        InitializeListeners(){
            let self = this;
            $(document).ready(function(){
                self.editor = ace.edit("editor");
                self.editor.setTheme("ace/theme/monokai");
                self.editor.setShowPrintMargin(false);
                self.editor.getSession().setMode("ace/mode/javascript");

                require(['timer'],function(){});    
                $("#submit").on('click',function(){
                    self.submit();
                });

                $("#next").on('click', function(){
                    Route(PartialViewStrings.Completition, '#container');
                });
            });        
        }
    }

    return ChallengeThree;

})