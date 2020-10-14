"use strict";

// Task 1: Layout the board 

window.addEventListener("load", (event)=> {
    work();
});

function work(){

    document.querySelectorAll("board > div").classList.add("square");
    
    let start = document.getElementsByClassName("btn")[0];
    
    start.setAttribute("click","newGame();");

    start.addEventListener('mouseover', function(x) {
        x.target.classList.add('hover');
    });

    start.addEventListener('mouseout', function (x) {
        x.target.classList.remove('hover');
    });
}

