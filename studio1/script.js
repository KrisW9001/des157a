(function(){
    "use strict";
    console.log('reading js');

    const btn = document.querySelector('button');
    
    let paragraph = document.querySelector('p');

    //create event listener to write the story using textinput as an array

    myForm.addEventListener(btn, function(a){
        a.preventDefault();
        let textInput = document.querySelectorAll('input').value;
        for (i=0; i=textInput.length; i++){
            paragraph.innerHTML= `My Day was absolutely terrible. I was supposed to meet with my ${textInput[0]} today, but when I arrived I was ${textInput[1]} greeted by their ${textInput[2]}. They told me their boss was busy ${textInput[3]} in ${textInput[4]}. I left to go get some ${textInput[5]} for lunch, but the restaurant's ${textInput[6]} ${textInput[7]} and all they had left was some ${textInput[8]}. I didn't even get to enjoy that, though! ${textInput[9]} had ${textInput[10]} into the building to ${textInput[11]} everyone there, and just to add insult to injury they stole my ${textInput[12]} and called me a ${textInput[13]} before they made their ${textInput[14]} escape. And to top it all off, this was the same day where my ${textInput[15]} called me to say that my ${textInput[16]} had crashed into a ${textInput[17]} and they were taking ${textInput[18]} dollars from my bank account. And to think I could've avoided this if I had ${textInput[19]} my ${textInput[20]}.`;
        }
    })
}())