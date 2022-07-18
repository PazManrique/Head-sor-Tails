
let coin = document.querySelector(".coin");

let flipBtn = document.getElementById ('flipBtn');

flipBtn.addEventListener("click", (min, max) => {
    min = Math.ceil(1);
  max = Math.floor(2);
  let random = Math.floor(Math.random() * (max - min + 1) + min);
    coin.style.animation = "none";
    if(random===1){
        setTimeout(function(){
            coin.style.animation = "spin-indi 3s forwards";
        }, 100);
       
    }
    if(random===2){
        setTimeout(function(){
            coin.style.animation = "spin-joaco 3s forwards";
        }, 100);
     
    }
})

