define(['jquery', 'CommonAjax', 'Footer','PartialViewStrings'],
        function($, CommonAjax, Footer, PartialViewStrings){
    class ChallengeOne{
        constrcutor(){
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
    
        checkSecond(sec) {
          if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
          if (sec < 0) {sec = "59"};
          return sec;
        }
        startTimer() {
            var presentTime = document.getElementById('timer').innerHTML;
            var timeArray = presentTime.split(/[:]+/);
            var self = this;
          setTimeout(function(){
              var m = timeArray[0];
              var s = self.checkSecond((timeArray[1] - 1));
              if(s==59){m=m-1}
              if(m<0){alert('Sorry you ran out of time. You will not be considered for this position.'); window.location.href = "https://talkroute.com/wp-content/uploads/2016/06/talkroute-port-rejected-862x675.jpg";}
              
              document.getElementById('timer').innerHTML =
                m + ":" + s;
            }, 1000);
        }

        InitializeListeners(){      
            let inlinePromise,
                self = this;
                this.editor =ace.edit("editor");
                this.editor.setTheme("ace/theme/monokai");
                this.editor.setShowPrintMargin(false);
                this.editor.getSession().setMode("ace/mode/javascript");
                
        /*    document.getElementById('timer').innerHTML =
            "15:00";
            self.startTimer();*/
            
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