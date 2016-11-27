$(function() {

var song = [];


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
});

$('#back').on('click', function(e) {
  $('#song').addClass('hidden'); 
  $('.mainstate').removeClass('hidden');
});










})