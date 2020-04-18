$(document).ready(function() {

  var audio = document.createElement('audio');
      audio.setAttribute('src', 'sound/BBB.mp3');

  $(".button").mouseenter(function() {
      $(".button").css("background-color", "#3396ff");
      $(".text").css("color", "white");
  });

  $(".button").mouseleave(function() {
    $(".button").css("background-color", "#e6f2ff");
      $(".text").css("color", "#3396ff");
  });

  $(".button").click(function() {
      $(this).fadeOut("fast");
      $("body").css("background-color", "#e6f2ff");
      audio.play();
      $(".rat").delay(100).fadeOut("fast");
      $(".pumpkin").delay(250).fadeOut("fast");
      $(".blueL").delay(200).fadeOut("fast");
      $(".greenL").delay(150).fadeOut("fast");
      $(".spell").fadeIn("fast");
      $(".shadow").fadeIn("fast");
      $(".spell").addClass("makeCircle");
      $(".shadow").addClass("makeShadow");
      $(".spell").delay(750).fadeOut("fast");
      $(".shadow").delay(750).fadeOut("fast");
      $(".man").delay(450).fadeIn("fast");
      $(".wagon").delay(750).fadeIn("fast");
      $(".blueH").delay(650).fadeIn("fast");
      $(".greenH").delay(550).fadeIn("fast");
  });

});

// last line
