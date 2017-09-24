define(['jquery','Route', 'PartialViewStrings'],
      function($, Route, PartialViewStrings){
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
              success: function(responses){
                console.log(responses)
                  require(['summary'],function(summary){
                      summary.ChallengeTwo = $('#timer').text();
                     $('#modal-body-results-2').empty()
                  for (var i = responses.length - 1; i >= 0; i--) {
                    $('#modal-body-results-2').append(responses[i].test+" <strong>"+responses[i].response+"</strong></br>")
                  };
                  });
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
                $('#next').on('click', function(){
                    Route(PartialViewStrings.StoryThree, "#container");
                });
            });
        }
    }

    return ChallengeTwo;

})
