
score=0;
pass= true;
document.onkeydown=function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38 || e.keyCode==32){
        player=document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(()=>{
            player.classList.remove('animatePlayer')
        },700);

    }

    if(e.keyCode==39){
        player=document.querySelector('.player');
        playerx=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'))
        player.style.left=playerx+120+"px";

    }

    if(e.keyCode==37){
        player=document.querySelector('.player');
        playerx=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'))
        player.style.left=playerx-110+"px";
        
    }
}

setInterval(()=>{
    player=document.querySelector('.player');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(player,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);

    if(offsetX<100 && offsetY<50){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('animateobs')
    }
    else if(offsetX<10 && pass){
        score+=10;
        updatescore(score);
        pass=false;
        setTimeout(()=>{
            pass=true;
        },1000);
    
        // setTimeout(()=>{
        //     dur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        //     newdur=dur=0.1;
        //     obstacle.style.animationDuration=newdur+'s';
        // },500);
       
        // console.log(offsetX);
    }

},10);

function updatescore(score){
    scoreCont.innerHTML = "Your Score: "+score;
}
