const output = document.getElementById('input');
const buttons = document.querySelectorAll('button');
// Adding the beep sound to the button
const beepSound = new Audio('beepsound.mp3');
console.log(output);
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        // Function call to the beep sound 
        beepSound.play();
        if(buttons[i].innerText == "="){
            output.value = eval(output.value);
            console.log(output.value);
        }
        else if (buttons[i].innerText == "C"){
           console.log(output);
            output.value = "";
        } else{
            output.value = output.value + buttons[i].innerText;
            console.log(output.value);
        }
    });
};