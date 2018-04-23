$(document).ready(function() {

  //JQuery function #1
  $("#loading-wall").delay(6000).fadeOut(100);
  $("#loading-gif").delay(5800).fadeOut(1);

  let loopText= ["Don't", "Become", "Attached", "Cause", "Then", "You",
    "Disconnect", "And", "Once", "You", "Gather", "Stress", "You'll", "Be",
    "Obsessed", "With", "Flipin", "Checks.", "Jaden", "Jaden", "Let", "Me", "Twerk", "On", "You", "ONE", "Time",
    "#Coachella", "The", "Grass", "Is", "Always", "Greener", "On", "The", "Other", "Side",
    "So", "Stay", "Over", "There", "Would", "Ya.",
    "If", "I", "Had", "A", "Nickel", "For", "Every", "Time", "I've", "Cried", "In", "The",
    "Back", "Of", "An", "Uber,", "I", "Would", "Have", "Another", "Pair", "Of", "Yeezy's.",
    "Just", "Stare", "In", "The", "Mirror", "And", "Cry", "And", "You'll", "Be", "Good."
  ];

  let arraylength = loopText.length;

  var i = 0;

  var speech_switch = false;

  var music_toggle = true;

  var audio = document.getElementById("myAudio");

  var audio_2 = document.getElementById("myAudio_2")

  setTimeout(function(){
    audio.play();
  }, 6000);

  //JQuery function #2
  $('#speech_li').hover(function(){$(this).toggleClass('speech_color');});
  $('#music_li').hover(function(){$(this).toggleClass('speech_color');});
  $('a').hover(function(){$(this).toggleClass('speech_color');});
  $('#twitter_light').hover(function(){$(this).toggleClass('speech_color');});
  $('#insta_light').hover(function(){$(this).toggleClass('speech_color');});
  $('#mail_light').hover(function(){$(this).toggleClass('speech_color');});

  $('#music_li_2').hover(function(){$(this).toggleClass('music-color');});
  $('#twitter_light_2').hover(function(){$(this).toggleClass('music-color');});
  $('#insta_light_2').hover(function(){$(this).toggleClass('music-color');});
  $('#mail_light_2').hover(function(){$(this).toggleClass('music-color');});

  $('#home-2').hover(function(){$(this).toggleClass('home-color');});

  //JQuery function #3
  $("#speech_li").on('click',function(){
    if(speech_switch==false) {
      speech_switch = true
      //JQuery function #4
      $("#music_2_off").css("display", "none");
      //JQuery function #5
      $("#music_1").show();
    } else {
      speech_switch = false
      $("#music_2_off").show();
      $("#music_1").css("display", "none");
    }
  });

  $("#music_li").on('click',function(){
    if(music_toggle==true) {
      audio.pause();
      music_toggle = false
      $("#music").css("display", "none");
      $("#music_off").show();
    } else {
      audio.play();
      music_toggle = true
      $("#music").show();
      $("#music_off").css("display", "none");
    }
  });


  $("#music_li_2").on('click',function(){
    if(music_toggle==true) {
      audio_2.pause();
      music_toggle = false
      $("#music").css("display", "none");
      $("#music_off").show();
    } else {
      audio_2.play();
      music_toggle = true
      $("#music").show();
      $("#music_off").css("display", "none");
    }
  });

  function myLoop () {
    setTimeout(function () {
      //JQuery function #6, and #7
      console.log(loopText[i]);
      if(speech_switch == true) {
        responsiveVoice.speak(loopText[i % arraylength], "UK English Female", {rate: 1.5});
        $("#sequence").text(loopText[i % arraylength]).fadeIn(340).fadeOut(510);
        i++;
        myLoop();
      } else {
        $("#sequence").text(loopText[i % arraylength]).fadeIn(340).fadeOut(510);
        i++;
        myLoop();
      };
    }, 870)
  }

  myLoop();

  // mouse
  $(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-right-lg',
    outClass: 'fade-out-right-lg',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});



})
