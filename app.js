const app =() =>{
    const play = document.querySelector('.play');
    const noise = document.querySelector('.noise');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.background-container video');

    const sounds = document.querySelectorAll('.sounds button');
    const time = document.querySelector('.clock');

//length of outline
    const Length =outline.getTotalLength();
//animate the time button 
    let faketime = 600;
    outline.style.strokeDasharray =Length;
    //strokeDashoffset for the time the sound has been playing
    outline.style.strokeDashoffset = Length;

   play.addEventListener('click', () =>{
      noise.play();
   });
   const checkPlaybutton = noise =>{
       if(noise.paused){
           noise.play();
           video.play();
           play.src="./svg/pause.svg";
       }else{
           noise.pause();
           video.pause();
           play.src ='./svg/play.svg';
       }
   } 

};
app();