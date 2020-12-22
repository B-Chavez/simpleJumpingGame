let character = document.getElementById('character');
let block = document.getElementById('block');
let myBody = document.querySelector('body');

myBody.addEventListener('click', jump)

function jump() {
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    
    setTimeout(() => {
        character.classList.remove('animate');
    }, 500)
    
}

var checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'), 10);
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'), 10);
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose");
    }
})