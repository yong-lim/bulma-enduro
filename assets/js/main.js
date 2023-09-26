$(document).ready(function () {
  const now = new Date();
  // console.log("[" + now.toUTCString() + "] In main.js of enduro-form.");

  // $("select").formSelect();
  $("#raceclass").on('change', function() {
    var selIndex = $(this).prop('selectedIndex');
    console.log(this.value);
    console.log(selIndex);
    if (selIndex > 5) {
      // hide the hill and enduro options from trail masters
      console.log("hide the hill and enduro options from trail masters");
      $('#hill1 input').attr('required', false);
      $('#hill1').addClass("hidden");
      $('#hill2').addClass("hidden");
    }
    else {
      // un-hide the hill and enduro options from trail masters
      // console.log("remove hills");
      console.log("un-hide the hill and enduro options from trail masters");
      $('#hill1 input').attr('required', true);
      $('#hill1').removeClass("hidden");
      $('#hill2').removeClass("hidden");
    }
  });
  // Create your validation helper text
  var validationMessage = '<span class="helper-text" data-error="Please choose your race class"></span>';
  // Place it in the dom
  $('.select-wrapper input').after(validationMessage);
  // Error logic
  var select = jQuery('.select-wrapper input')[0];
  $('.submit-btn').on('click',function(){
    if ($('#team').value == null) {
      console.log("#team value is null ");
      return -1;
    }
    if ($('#name1').value == null) {
      console.log("#name1 value is null ");
      return -1;
    }
    if (jQuery('ul.select-dropdown li:not(.disabled).selected').length < 1 ) {
      $(select).addClass('invalid');
      return -1;
    }
    $('#thank-you').removeClass("hidden");
    $('#form').addClass("hidden");
  });

  $('.materialboxed').materialbox();
  $('.scrollspy').scrollSpy();

  changeColor();
});

function changeColor(){
  var options_elem = document.querySelectorAll(".dropdown-content li>a, .dropdown-content li>span");
  const alt_color  = ["deep-purple-text", "teal", "lighten-5"];
  //index==0 is the disabled option element
  options_elem.forEach(function(element, index){
    if (index == 2 || index == 4 || index == 6 || index == 8 || index == 10) element.classList.add(...alt_color);
  });
}
