$(function() {

var song = [];
var verse = '';
var chorus = '';
var count = 0;


$('#verseForm').submit(function(e) {
  e.preventDefault();
  var input = $('#verseForm input:first').val();
  song.push(input);
  renderSong(input);
  $('#verseForm input:first').val('');
  
})

$('#chorusForm').submit(function(e) {
  e.preventDefault();
  var input = $('#chorusForm input:first').val();
  song.push(input);
  renderSong(input);
  $('#chorusForm input:first').val('');
  
})


$('#bridgeForm').submit(function(e) {
  e.preventDefault();
  var input = $('#bridgeForm input:first').val();
  song.push(input);
  renderSong(input);
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


function renderSong(song) {
  var input = song;
  $('#song').append('<dl>' + input + '</dl>');
  return; 
}







})