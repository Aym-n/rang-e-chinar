history.scrollRestoration = 'manual';
$(document).ready(function() {
    setTimeout(function() {
    $(".loader").attr('transition-style', 'out:circle:hesitate');

      // Set a timeout to hide the element
      setTimeout(function() {
        $(".loader").hide();
      }, 2500);

      $(".text").addClass("animate__fadeInUp");
      $(".coming_soon").addClass("animate__fadeInUp");
      $(".countdown").addClass("animate__fadeInUp");
      
    },2500);


    
    let targetDate = new Date('2023-11-02T23:59:59Z').getTime();
    function updateTimer() {
        let now = new Date().getTime();
        let timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(interval);
            $('#timer').html('<span>00</span>:<span>00</span>:<span>00</span>');
            return;
        }

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        $('#days').text((String(days).padStart(2, '0'))+" : ");
        $('#hours').text((String(hours).padStart(2, '0'))+" : ");
        $('#minutes').text((String(minutes).padStart(2, '0')));
    }

    updateTimer();

    const interval = setInterval(updateTimer, 1000);
});


$(document).ready(function(){
})
