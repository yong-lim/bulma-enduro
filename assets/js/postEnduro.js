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
 