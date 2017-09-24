define(['jquery'],function($){    
    class ChallengeThree{
        constructor(){
            this.editor;
        }
        submit() {
            let value = this.editor.getSession().getValue(),
            problem = "time";
            $.ajax({
              url: "https://rbcvalidate.herokuapp.com/validate",
              type: "POST",
              dataType: "json",
              data: {"code": value, "problem": problem},
              // dataType: "text",
              success: function(responses){
                  console.log(responses)
                  $('#modal-body-results-3').empty()
                  for (var i = responses.length - 1; i >= 0; i--) {
                    $('#modal-body-results-3').append(responses[i].test+" <strong>"+responses[i].response+" ("+responses[i].time+" seconds)"+" </strong></br>")
                  };
                  require(['summary'],function(summary){
                      summary.ChallengeThree = $('#timer').text();
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
                    require(['summary'],function(summary){
                        summary.ChallengeThree = $('#timer').text();
                    });
                });
            });
            
        }
    }

    return ChallengeThree;

})
