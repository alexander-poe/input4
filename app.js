$(function() {

var song = [];

var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

var searchObj = {
  tagmode: "any",
  format: "json"
}; 
  
function newSearch(){
  $.getJSON( flickerAPI, searchObj, changePicture)

}

function changePicture(flickerdata) {
  var photo = flickerdata.items[0].description;
  var lotho = flickerdata.items[0].media.m;
  var bckHTML = ' ' +
    '<img src="' + lotho + '" width="100%" height="100%"/>'
  console.log(lotho);
  
  return $('#iamg').html(bckHTML);

}




function renderSong(song) {
  var input = song;
  $('#song').append('<dl>' + input + '</dl>');
  return; 
}  
  

$('#verseForm').submit(function(e) {
  e.preventDefault();
  var input = $('#verseForm input:first').val();
  song.push(input);
  renderSong("Verse: " + '</br>' + input);
  $('#verseForm input:first').val('');
  newSearch();
})

$('#chorusForm').submit(function(e) {
  e.preventDefault();
  var input = $('#chorusForm input:first').val();
  song.push(input);
  renderSong("Chorus: " + '</br>' + input);
  $('#chorusForm input:first').val('');
  
})


$('#bridgeForm').submit(function(e) {
  e.preventDefault();
  var input = $('#bridgeForm input:first').val();
  song.push(input);
  renderSong("Bridge: " + '</br>' + input);
  $('#bridgeForm input:first').val('');
  
})



$('.btn-group').on('click', '#v', function(e) {
  $('.verseForm').removeClass('hidden');
   $('.chorusForm').addClass('hidden');
    $('.bridgeForm').addClass('hidden');
  
}); 

$('.btn-group').on('click', '#c', function(e) {
  $('.chorusForm').removeClass('hidden');
   $('.verseForm').addClass('hidden');
    $('.bridgeForm').addClass('hidden');
}); 

$('.btn-group').on('click', '#b', function(e) {
  $('.bridgeForm').removeClass('hidden');
   $('.verseForm').addClass('hidden');
    $('.chorusForm').addClass('hidden');
   
}); 

$('#songview').on('click', function(e) {
  $('.mainstate').addClass('hidden');
  $('#song').removeClass('hidden'); 
  $('#back').removeClass('hidden');
  $('#iamg').addClass('hidden');

});

$('#back').on('click', function(e) {
  $('#song').addClass('hidden'); 
  $('.mainstate').removeClass('hidden');
  $('#back').addClass('hidden');
  $('#iamg').removeClass('hidden');
});










})