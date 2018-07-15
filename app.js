document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    
    window.addEventListener('keydown', function(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      console.log(audio);
      console.log(key);

      if(!audio) return;// if null then stop whole function
      key.classList.add('playing');
      audio.currentTime = 0 //rewind to start so we can play over and over even if the sound has't stopped playing
      audio.play(); 
    })
    
  }
}