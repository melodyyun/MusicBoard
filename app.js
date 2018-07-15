document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    
    window.addEventListener('keydown', function(e){
      //---------
      //variables
      //---------
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

      if(!audio) return;// if null then stop whole function

      //---------------
      //play + animate
      //---------------
      key.classList.add('playing');
      audio.currentTime = 0 //rewind to start so we can play over and over even if the sound has't stopped playing
      audio.play(); 


      //--------------
      //end animation
      //--------------
      const keys = document.querySelectorAll('.key');

      function removeTransition(e){
        if(e.propertyName !== 'transform') return; // transitionend will all call the different styles that have transitioned but we only want to pay attention to one. So if the transitioning style isn't transform then we'll ignore it
        this.classList.remove('playing');
      }
      //cannot add event listener on an array of elements must attach event listener to each element individually
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    })
    
  }
}