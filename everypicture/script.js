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
        
    }

    function updatePreview3(){
        document.getElementById('preview').setAttribute("src", 'images/mm11.png');
        
    }

    function updatePreview4(){
        document.getElementById('preview').setAttribute("src", 'images/kirbystarallies.png');
        
    }

    function updatePreview5(){
        document.getElementById('preview').setAttribute("src", 'images/kirbyforgottenland.png');
        
    }

    function updatePreview6(){
        document.getElementById('preview').setAttribute("src", 'images/pokemonbd.png');
        
    }

    function updatePreview7(){
        document.getElementById('preview').setAttribute("src", 'images/pokemonlgp.png');
        
    }

    function updatePreview8(){
        document.getElementById('preview').setAttribute("src", 'images/pokkendx.png');
        
    }

    function updatePreview9(){
        document.getElementById('preview').setAttribute("src", 'images/pokemonla.png');
        
    }

    function updatePreview10(){
        document.getElementById('preview').setAttribute("src", 'images/mario3dworld.png');
        
    }

    function updatePreview11(){
        document.getElementById('preview').setAttribute("src", 'images/marioodyssey.png');
        
    }

    function updatePreview12(){
        document.getElementById('preview').setAttribute("src", 'images/mk8dx.png');
        
    }

    function updatePreview13(){
        document.getElementById('preview').setAttribute("src", 'images/skywardswordhd.png');
        
    }

    function updatePreview14(){
        document.getElementById('preview').setAttribute("src", 'images/botw.png');
        
    }

    function updatePreview15(){
        document.getElementById('preview').setAttribute("src", 'images/smashultimate.png');
        
    }

    function updatePreview16(){
        document.getElementById('preview').setAttribute("src", 'images/xcde.png');
        
    }




}());