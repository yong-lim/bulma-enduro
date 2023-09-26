$(function() {
  $('.form-control').focus(formFocus);
});

function formFocus() {
  $('#alert-field')
    .removeClass()
    .addClass('hidden');
}

//selector from your HTML form
function postEnduro23(e) {
  //prevent the form from submiting so we can post to the google form
  e.preventDefault();
  console.log("in postEnduro23");
  $('#alert-field').removeClass('hidden');
  // console.log('start timer');
  // setTimeout(() => {
  //   console.log('This alert appeared after 3 second!'); }, 3000);
  //AJAX request
  $.ajax({
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfTL3EHr9QD0iadIK9pktDj82KAQ_DGXEWEeQORCV2R79Jk0A/formResponse',     //The public Google Form url, but replace /view with /formResponse
    data: $('#my-form').serialize(), //Nifty jquery function that gets all the input data 
    type: 'POST', //tells ajax to post the data to the url
    dataType: "json", //the standard data type for most ajax requests
    statusCode: { //the status code from the POST request
      0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
        //success
        $('#thank-you').removeClass("hidden");
        $('#form').addClass("hidden");
        $('#alert-field').addClass('hidden');
      }, 
      200: function(data) {//200 is a success code. it went through!
        //success
        // $('#form-success').text('hooray! 200');
        $('#thank-you').removeClass("hidden");
        $('#form').addClass("hidden");
        $('#alert-field').addClass('hidden');
      },
      403: function(data) {//403 is when something went wrong and the submission didn't go through
        //error
        alert('Oh no! something went wrong. Please let us know of your problem.');
      }
    }  
  });
};

function postEnduroMarch23(e) {
  e.preventDefault();

  console.log("in postEnduroMarch23");
  
  console.log("Team:", e.target['team'].value);
  console.log("raceclass:", e.target['raceclass'].value);
  console.log("phone1:", e.target['phone1'].value);
  console.log("phone2:", e.target['phone2'].value);
  console.log("emergency1:", e.target['emergency1'].value);
  console.log("emergency2:", e.target['emergency2'].value);
  console.log("e.hill1:", e.target[name='entry.2131610651'].value);
  console.log("e.hill2:", e.target[name='entry.69002109'].value);
  console.log("e.enduro1:", e.target[name='entry.1760404173'].value);
  console.log("e.enduro2:", e.target[name='entry.1913362904'].value);
  
  /*const POST_URL = 'https://script.google.com/macros/s/AKfycbw8dXqyJYlhqy7z403yd8GmIzQz2Y__yyzRSZ_47JgJJOj36rxODMxydLWxBuqPFHab/exec'*/
  const POST_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfTL3EHr9QD0iadIK9pktDj82KAQ_DGXEWEeQORCV2R79Jk0A/formResponse'
  const postRequest = {
    team       : e.target['team'].value,
    raceclass  : e.target['raceclass'].value,
    name1      : e.target['name1'].value,
    name2      : e.target['name2'].value,
    phone1     : e.target['phone1'].value,
    phone2     : e.target['phone2'].value,
    emergency1 : e.target['emergency1'].value,
    emergency2 : e.target['emergency2'].value,
    hill1      : e.target[name='entry.2131610651'].value,
    hill2      : e.target[name='entry.69002109'].value,
    enduro1    : e.target[name='entry.1760404173'].value,
    enduro2    : e.target[name='entry.1913362904'].value
  };

  if(POST_URL) {
    $.post(POST_URL, JSON.stringify(postRequest))
      .then(res => {
        e.target.reset();
        $('#alert-field')
          .removeClass()
          .addClass(`alert alert-${res.code}`)
          .text(res.msg);
      });

    $('#alert-field')
      .removeClass()
      .html("<span><b><p>Please wait while we're registering you . . .</p></b> <progress></progress></span>")
      .removeClass('hidden');
  } else {
    alert('You must set the POST_URL variable with your script ID');
  }
}

function changeSubject(e) {
  if(e.target.value === 'Other') {
    $('#subject-select').removeClass('col-xs-12')
      .addClass('col-xs-6');
    $('#hidden-other-subject').removeClass('hidden');
  } else {
    $('#subject-select').removeClass('col-xs-6')
      .addClass('col-xs-12');

    $('#hidden-other-subject').addClass('hidden');
  }
}
