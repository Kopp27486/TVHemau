//= require jquery

$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});

$('document').ready(function () {
  var trigger = $('#hamburger'),
      isClosed = true;

  trigger.click(function () {
    burgerTime();
  });

  function burgerTime() {
    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

});

var attempt = 3;

function validate() {
  var user = document.getElementById('username').value;
  var pass = document.getElementById('password').value;
  if(user == "root" && pass =="123") {
    alert("Login successfully");
    window.location = "userbereich.html";
    return false;
  } else {
    attempt --;
    alert("Incorrect username or password! "+attempt+" tries left")
    if( attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
