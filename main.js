'use strict'

{
 class Panel{
   constructor(){
     const section = document.createElement('section');
    //  constこのクラスの中でしか使わない
     section.classList.add('panel');

     this.img = document.createElement('img');
    //  thisここ以外でも使える
     this.img.src = this.getRandomImage();

     this.timeoutId = undefined

     this.stop = document.createElement('div');
     this.stop.textContent ='STOP';
     this.stop.classList.add('stop');
     this.stop.addEventListener('click', ()=>{
       clearTimeout(this.timeoutId);
     });

     section.appendChild(this.img);
     section.appendChild(this.stop);

     const main = document.querySelector('main');
     main.appendChild(section);
   }
   getRandomImage(){
    const images = [
      'img/bra1.jpg',
      'img/bra2.JPG',
      'img/bra3.JPG',
    ];
    return images [Math.floor(Math.random() * images.length)];

   }


   spin(){
     this.img.src = this.getRandomImage();
     this.timeoutId = setTimeout(() => {
       this.spin();
     }, 50)
   }
 }

 const panels = [
   new Panel(),
   new Panel(),
   new Panel(),
 ];

 const spin = document.getElementById('spin');
 spin.addEventListener('click' , () =>{
   panels.forEach(panel =>{
    panel.spin()
   });
 })









}