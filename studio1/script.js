(function(){
    "use strict";
    console.log('reading js');

    const myForm = document.querySelector('#inputs');
    
    let paragraph = document.querySelector('p');

    //create event listener to write the story using textinput as an array

    myForm.addEventListener('submit', function(a){
        a.preventDefault();

        const pers1 = document.querySelector('#pers1').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const verb1 = document.querySelector('#verb1').value;
        const place = document.querySelector('#place').value;
        const food = document.querySelector('#food').value;
        const noun2 = document.querySelector('#noun2').value;
        const verb2 = document.querySelector('#verb2').value;
        const noun3 = document.querySelector('#noun3').value;
        const pers2 = document.querySelector('#pers2').value;
        const verb3 = document.querySelector('#verb3').value;
        const verb4 = document.querySelector('#verb4').value;
        const noun4 = document.querySelector('#noun4').value;
        const name = document.querySelector('#name').value;
        const adj2 = document.querySelector('#adj2').value;
        const pers3 = document.querySelector('#pers3').value;
        const noun5 = document.querySelector('#noun5').value;
        const noun6 = document.querySelector('#noun6').value;
        const num = document.querySelector('#num').value;
        const verb5 = document.querySelector('#verb5').value;
        const noun7 = document.querySelector('#noun7').value;

        let theText;

        theText = (`My Day was absolutely terrible. I was supposed to meet with my ${pers1} today, but when I arrived I was ${adj1} greeted by their ${noun1}. They told me their boss was busy ${verb1} in ${place}. I left to go get some ${food} for lunch, but the restaurant's ${noun2} ${verb2} and all they had left was some ${noun3}. I didn't even get to enjoy that, though! ${pers2} had ${verb3} into the building to ${verb4} everyone there, and just to add insult to injury they stole my ${noun4} and called me a ${name} before they made their ${adj2} escape. And to top it all off, this was the same day where my ${pers3} called me to say that my ${noun5} had crashed into a ${noun6} and they were taking ${num} dollars from my bank account. And to think I could've avoided this if I had ${verb5} my ${noun7}.`);

        paragraph.innerHTML = (theText);

        // let textInput = document.querySelectorAll('input').value;
        /* for (i=0; i=textInput.length; i++){
            paragraph.innerHTML= `My Day was absolutely terrible. I was supposed to meet with my ${textInput[0]} today, but when I arrived I was ${textInput[1]} greeted by their ${textInput[2]}. They told me their boss was busy ${textInput[3]} in ${textInput[4]}. I left to go get some ${textInput[5]} for lunch, but the restaurant's ${textInput[6]} ${textInput[7]} and all they had left was some ${textInput[8]}. I didn't even get to enjoy that, though! ${textInput[9]} had ${textInput[10]} into the building to ${textInput[11]} everyone there, and just to add insult to injury they stole my ${textInput[12]} and called me a ${textInput[13]} before they made their ${textInput[14]} escape. And to top it all off, this was the same day where my ${textInput[15]} called me to say that my ${textInput[16]} had crashed into a ${textInput[17]} and they were taking ${textInput[18]} dollars from my bank account. And to think I could've avoided this if I had ${textInput[19]} my ${textInput[20]}.`;
        } */
    })
}())