$(document).ready(function() {
  // your code here

  //step 1: getting our keys ("ids") out of the html
  var container = $('#audio_embeds')
  // var this._time = 0
  // var display = container.children('.display')
  // var buttons = container.children('button.stopWatch')

  var cNote = document.getElementById('cAudio');
    $('.note.c').mousedown(function(){
      //step 2: listen for events on those elements
      console.log("c note test")
      cNote.currentTime = 0;
      //step 3: make the noise happen. .play()
      cNote.play();
    });

  var dNote = document.getElementById('dAudio');
    $('.note.d').mousedown(function(){
      console.log("d note test")
      dNote.currentTime = 0;
      dNote.play();
    });

  var eNote = document.getElementById('eAudio');
    $('.note.e').mousedown(function(){
      console.log("e note test")
      eNote.currentTime = 0;
      eNote.play();
    });

  var fNote = document.getElementById('fAudio');
    $('.note.f').mousedown(function(){
      console.log("f note test")
      fNote.currentTime = 0;
      fNote.play();
    });

  var gNote = document.getElementById('gAudio');
    $('.note.g').mousedown(function(){
      console.log("g note test")
      gNote.currentTime = 0;
      gNote.play();
    });

  var aNote = document.getElementById('aAudio');
    $('.note.a').mousedown(function(){
      console.log("a note test")
      aNote.currentTime = 0;
      aNote.play();
    });

  var bNote = document.getElementById('bAudio');
    $('.note.b').mousedown(function(){
      console.log("b note test")
      bNote.currentTime = 0;
      bNote.play();
    });
  console.log("end test")
  // $('#instrument button.note').on('click',function(event){
  //   $($(this).data('note'))[0].play();
  // });
});
