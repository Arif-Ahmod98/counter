"use strict";

// Variable
let counter = document.querySelector(".counter");
let buttons = document.querySelectorAll("button");
let count = 0;

// Function, add click event on button
buttons.forEach( function(button) {
    button.addEventListener("click", function (e) {
        let text = e.currentTarget.classList;
        
        if (text.contains('decrease')){
            count --;
            counter.textContent = count;

            
        }
        else if ( text.contains('increase') ) {

            count ++;
            counter.textContent = count;

        }
        else {
            count = 0;
            counter.textContent = count;

        };

        //===counter number color 

        if (count < 0) {
            counter.style.color = "red";
          
        }
        else if ( count > 0) {
            counter.style.color = "green";
        }
        else {
            counter.style.color = "black";
        }

    });
});