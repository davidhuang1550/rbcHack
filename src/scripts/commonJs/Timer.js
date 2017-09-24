define(['jquery'],function($){
    document.getElementById('timer').innerHTML =
      "15:00";
    startTimer();

    function startTimer() {
      var presentTime = $('timer').text();
      var timeArray = presentTime.split(/[:]+/);
      var m = timeArray[0];
      var s = checkSecond((timeArray[1] - 1));
      if(s==59){m=m-1}
      if(m<0){alert('Sorry you ran out of time. You will not be considered for this position.'); window.location.href = "https://talkroute.com/wp-content/uploads/2016/06/talkroute-port-rejected-862x675.jpg";}

      document.getElementById('timer').innerHTML =
        m + ":" + s;
      setTimeout(startTimer, 1000);
    }

    function checkSecond(sec) {
      if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
      if (sec < 0) {sec = "59"};
      return sec;
    }

});
