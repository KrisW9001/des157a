(function(){
    "use strict";
    console.log('reading js');

    const myForm = document.querySelector('main');
    const preview = document.querySelector('.preview');
    let title;
    let description;

    //create event listener to update the preview image
    document.getElementById('mpss').addEventListener('mouseover',updatePreview0);
    document.getElementById('dread').addEventListener('mouseover',updatePreview1);
    document.getElementById('mhgu').addEventListener('mouseover',updatePreview2);
    document.getElementById('mm11').addEventListener('mouseover',updatePreview3);
    document.getElementById('ksa').addEventListener('mouseover',updatePreview4);
    document.getElementById('kfl').addEventListener('mouseover',updatePreview5);
    document.getElementById('pbd').addEventListener('mouseover',updatePreview6);
    document.getElementById('plgp').addEventListener('mouseover',updatePreview7);
    document.getElementById('pokken').addEventListener('mouseover',updatePreview8);
    document.getElementById('pla').addEventListener('mouseover',updatePreview9);
    document.getElementById('sm3dw').addEventListener('mouseover',updatePreview10);
    document.getElementById('smo').addEventListener('mouseover',updatePreview11);
    document.getElementById('mk8dx').addEventListener('mouseover',updatePreview12);
    document.getElementById('sshd').addEventListener('mouseover',updatePreview13);
    document.getElementById('botw').addEventListener('mouseover',updatePreview14);
    document.getElementById('ssbu').addEventListener('mouseover',updatePreview15);
    document.getElementById('xcde').addEventListener('mouseover',updatePreview16);

    //note: for some reason mouseover does not work. Code has been adapted to have a simpler format for displaying images.

    function updatePreview0(){
        document.getElementById('preview').setAttribute("src", 'images/mariopartysuperstars.png');
        document.getElementById('title').innerHTML='Mario Party SuperStars';
        document.getElementById('description').innerHTML="Well-rounded and represents the series well. My only issue is that there's always something else that could've been in this game.";
        document.getElementById('description').style.color='yellow';
    }

    function updatePreview1(){
        document.getElementById('preview').setAttribute("src", 'images/metroiddread.png');
        document.getElementById('title').innerHTML='Metroid Dread';
        document.getElementById('description').innerHTML="Fantastic in every way. Easily my favorite game exlusive to this system.";
        document.getElementById('description').style.color='forestgreen';
    }

    function updatePreview2(){
        document.getElementById('preview').setAttribute("src", 'images/mhgu.png');
        document.getElementById('title').innerHTML='Monster Hunter Generations Ultimate';
        document.getElementById('description').innerHTML="Despite having the rust of pre-World Monster Hunter, This is a game I hold close to my heart. One of my favorite games of all time!";
        document.getElementById('description').style.color='forestgreen';
    }

    function updatePreview3(){
        document.getElementById('preview').setAttribute("src", 'images/mm11.png');
        document.getElementById('title').innerHTML='Mega Man 11';
        document.getElementById('description').innerHTML="I'm not the biggest Mega Man fan, but I did appreciate that this didn't feel like an decades-old game with a new coat of paint. (looking at you, pokemon)";
        document.getElementById('description').style.color='yellow';
        
    }

    function updatePreview4(){
        document.getElementById('preview').setAttribute("src", 'images/kirbystarallies.png');
        document.getElementById('title').innerHTML='Kirby Star Allies';
        document.getElementById('description').innerHTML="For everything that this game does, another game in the franchise does it better. Also ability balance is ****ed because of the element system.";
        document.getElementById('description').style.color='red';
        
    }

    function updatePreview5(){
        document.getElementById('preview').setAttribute("src", 'images/kirbyforgottenland.png');
        document.getElementById('title').innerHTML='Kirby and the Forgotten Land';
        document.getElementById('description').innerHTML="Easily on the top 10 of best switch games. It's oozing with polish despite being a new direction for the series!";
        document.getElementById('description').style.color='forestgreen';
    }

    function updatePreview6(){
        document.getElementById('preview').setAttribute("src", 'images/pokemonbd.png');
        document.getElementById('title').innerHTML='Pokemon Brilliant Diamond';
        document.getElementById('description').innerHTML="This didn't get a bad opinion from me for being a bad remake, it got a bad opinion for giving me the worst buyer's remorse I have ever known.";
        document.getElementById('description').style.color='red';
        
    }

    function updatePreview7(){
        document.getElementById('preview').setAttribute("src", 'images/pokemonlgp.png');
        document.getElementById('title').innerHTML="Pokemon Let's go Pikachu";
        document.getElementById('description').innerHTML="It's fine for what it is I guess, and that's all I can really say about it. Pokemon games on the switch tend to give me buyer's remorse a lot...";
        document.getElementById('description').style.color='orangered';
        
    }

    function updatePreview8(){
        document.getElementById('preview').setAttribute("src", 'images/pokkendx.png');
        document.getElementById('title').innerHTML='Pokken Tournament DX';
        document.getElementById('description').innerHTML="Barely played it, but had fun when I did. Tekken-style fighting games have never clicked with me. A solid game either way.";
        document.getElementById('description').style.color='yellow';
        
    }

    function updatePreview9(){
        document.getElementById('preview').setAttribute("src", 'images/pokemonla.png');
        document.getElementById('title').innerHTML='Pokemon Legends Arceus';
        document.getElementById('description').innerHTML="The most fun I've had with anything in the Pokemon Franchise for a long time. It has a lot that can be improved upon, but it never will be improved upon because of Nintendo.";
        document.getElementById('description').style.color='yellow';
        
    }

    function updatePreview10(){
        document.getElementById('preview').setAttribute("src", 'images/mario3dworld.png');
        document.getElementById('title').innerHTML='Super Mario 3D World + Bowsers Fury';
        document.getElementById('description').innerHTML="Bowser's Fury was a fun mini campaign that made the purchase worth it, and I have nothing else to say about this game.";
        document.getElementById('description').style.color='forestgreen';
        
    }

    function updatePreview11(){
        document.getElementById('preview').setAttribute("src", 'images/marioodyssey.png');
        document.getElementById('title').innerHTML='Super Mario Oddysey';
        document.getElementById('description').innerHTML="I usually hate games of this structure, but the nuance of the control made me appreciate how much thought went into this.";
        document.getElementById('description').style.color='forestgreen';
        
    }

    function updatePreview12(){
        document.getElementById('preview').setAttribute("src", 'images/mk8dx.png');
        document.getElementById('title').innerHTML='Mario Kart 8 Deluxe';
        document.getElementById('description').innerHTML="A great improvement to an already great game. The DLC was weird, though. They should've just made a new game.";
        document.getElementById('description').style.color='forestgreen';
        
    }

    function updatePreview13(){
        document.getElementById('preview').setAttribute("src", 'images/skywardswordhd.png');
        document.getElementById('title').innerHTML='Zelda: Skyward Sword HD';
        document.getElementById('description').innerHTML="My favorite zelda game, now much easier to just boot up and start playing whenever! No real improvements to the game other than the new control scheme, but it was a good purchase.";
        document.getElementById('description').style.color='yellow';
        
    }

    function updatePreview14(){
        document.getElementById('preview').setAttribute("src", 'images/botw.png');
        document.getElementById('title').innerHTML='Zelda: Breath of the Wild';
        document.getElementById('description').innerHTML="Loved it to bits then, and I still love it now. It's far from perfect, but it's perfect as it is.";
        document.getElementById('description').style.color='forestgreen';
        
    }

    function updatePreview15(){
        document.getElementById('preview').setAttribute("src", 'images/smashultimate.png');
        document.getElementById('title').innerHTML='Super Smash Bros Ultimate';
        document.getElementById('description').innerHTML="I've spent hundreds of hours on this game with my friends, and I'll happily spend hundreds more. The fine tuning of this game makes it an experience unlike any other!";
        document.getElementById('description').style.color='green';
        
    }

    function updatePreview16(){
        document.getElementById('preview').setAttribute("src", 'images/xcde.png');
        document.getElementById('title').innerHTML='Xenoblade Chronicles Definitive Edition';
        document.getElementById('description').innerHTML="The polish added to this version of the game makes it live up to the title of 'Definitive Edition'. Not my favorite RPG in the world, but It's a great experience.";
        document.getElementById('description').style.color='green';
        
    }




}());