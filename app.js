const likebutton = document.querySelector('.like-button')
const groupCuff = document.querySelector('.group-cuff')
const groupButtonright = document.querySelector('.group-buttom-right')
const groupTop = document.querySelector('.group-top')
const groupLeft = document.querySelector('.group-left')
const groupTopright = document.querySelector('.group-top-right')
let numberOfClicks =  0
likebutton.addEventListener('click',()=>{
    numberOfClicks++;
    if(numberOfClicks>=12){
        groupLeft.classList.add('cracked')
        likebutton.classList.add('exploded');
    } else if(numberOfClicks>=9){
        groupButtonright.classList.add('cracked')
    }else if(numberOfClicks>=6){
        groupTopright.classList.add('cracked')
    }else if(numberOfClicks>=3){
        groupTop.classList.add('cracked')
    }
    likebutton.classList.add('big')
})


likebutton.addEventListener('transitionend',()=>{
    likebutton.classList.remove('big');
})