let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");

document.addEventListener("keypress", function(event){
    jump()
});

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
    }
    setTimeout( function(){
        dino.classList.remove("jump");
    }, 300);
};

let isAlive = setInterval( function(){
    // parseInt()
    // Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 100 && cactusLeft > 50 && dinoTop >= 330 ) {  // відслідковування елементів
        // alert("GAVE OVER!!!");
        document.getElementById("game")
            .style.display = "none";
        document.getElementById("demo")
            .innerHTML = "game over";
    }
}, 100);

function start() {
    document.getElementById("prev")
        .style.display = "none";
    document.getElementById("game")
        .style.display = "block";
}


function pause() {
    document.getElementById("game")
        .style.display = "none";
    document.getElementById("demo")
        .innerHTML = "!!! TRY AGAIN !!!";
}

// function start() {
//     document.getElementById("game")
//     .style.visibility = "hidden";
// }



