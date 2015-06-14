            
var loader = new PxLoader(), 
    logoimg = loader.addImage('images/2.gif'),
    bg3_11img = loader.addImage('images/bg3_11.gif'), 
    overlayimg = loader.addImage('images/overlay.png'), 
    intrologo1img = loader.addImage('images/intrologo1.png'),
    
    playimg = loader.addImage('images/play.gif'),
     
    videoleveldragon1img = loader.addImage('images/videoleveldragon1.gif'),
     videoleveldragonfinimg = loader.addImage('images/videoleveldragonfin.gif'),
    
       continueimg = loader.addImage('images/continue.gif'),
     
       rstartimg = loader.addImage('images/rstart.png'),
       bunimg = loader.addImage('images/bun.gif'),
               
       nave11img = loader.addImage('images/nave11.gif'),
       gameoverimg = loader.addImage('images/gameover.png'),
       mimg = loader.addImage('images/m.png '),
       flechaimg = loader.addImage('images/flecha.gif'),
       pauseimg = loader.addImage('images/pause.gif'),
       liveimg = loader.addImage('images/live.png'),
              levelimg = loader.addImage('images/level.png'),                              
               levelcompleteimg = loader.addImage('images/levelcomplete.png'),
    contadorlive1img = loader.addImage('images/1.png'),                              
                    contadorlive2 = loader.addImage('images/2.png'),    
                      contadorlive3 = loader.addImage('images/3.png'),                     
                              contadorlive4 = loader.addImage('images/4.png'),  
                                  contadorlive5 = loader.addImage('images/5.png'),           
                                    contadorlive6 = loader.addImage('images/6.png'),             
                                    contadorlive7 = loader.addImage('images/7.png'), 
                                             contadorlive8 = loader.addImage('images/8.png');                         
                                       contadorlive9 = loader.addImage('images/9.png');
                                      
                                            
                                       
                                            
                                      
    
    
    
 
loader.addCompletionListener(function() { 
  
   sound1.src="images/electronsoft.mp3";
  sound1.play();
  
   loading.style.display="none";
   
   splashlogocompany.style.display = "block";
            
    pantaprincipal.style.backgroundImage ='url('+videoleveldragonfinimg.src +')';
    game.style.backgroundImage = 'url('+bg3_11img.src +')';//loader.addImage('images/bg3_11.gif'), 
    protectorcortinalevel.style.backgroundImage = 'url('+overlayimg.src +')';// = loader.addImage('images/overlay.png'), 
    protectorcortinapause.style.backgroundImage = 'url('+overlayimg.src +')';// = loader.addImage('images/overlay.png'), 
   protectorcortina.style.backgroundImage = 'url('+overlayimg.src +')';// = loader.addImage('images/overlay.png'), 
      protectorcortinastart.style.backgroundImage = 'url('+overlayimg.src +')'; //= loader.addImage('images/overlay.png'), 
      protectorcortinagameover.style.backgroundImage = 'url('+overlayimg.src +')'; //= loader.addImage('images/overlay.png'), 
    menu.style.backgroundImage = 'url('+overlayimg.src +')'; //= loader.addImage('images/overlay.png'),
    btnstart.style.backgroundImage = 'url('+intrologo1img.src +')'; //= loader.addImage('images/intrologo1.png'),
     msglevel.style.backgroundImage = 'url('+levelimg.src +')';// = loader.addImage('images/level.png'),
       msglevelcomplete.style.backgroundImage = 'url('+levelcompleteimg.src +')'; //= loader.addImage('images/levelcomplete.png'),
    btnmsglevelcomplete.style.backgroundImage = 'url('+playimg.src +')'; //= loader.addImage('images/play.gif'),
     splashlogocompany.style.backgroundImage = 'url('+logoimg.src +')';// = loader.addImage('images/2.gif'),
    //videoleveldragon1.style.backgroundImage = 'url('+videoleveldragon1img.src +')'; //= loader.addImage('images/videoleveldragon1.gif'),
      
    
       btncontinue.style.backgroundImage = 'url('+continueimg.src +')'; //= loader.addImage('images/continue.gif'),
       btnrestart.style.backgroundImage = 'url('+rstartimg.src +')'; //= loader.addImage('images/bun.gif'),
       pantabun.style.backgroundImage = 'url('+bunimg.src +')'; //= loader.addImage('images/bun.gif'),
               pantaactor2.style.backgroundImage = 'url('+bunimg.src +')';// = loader.addImage('images/bun.gif'),
       pantaactor1avioneta2.style.backgroundImage = 'url('+nave11img.src +')'; //= loader.addImage('images/nave11.gif'),
       contador.style.backgroundImage = 'url('+contadorlive9.src +')';// = loader.addImage('images/9.png'),
       contadorm.style.backgroundImage = 'url('+mimg.src +')'; //= loader.addImage('images/m.png '),
       contadorflecha.style.backgroundImage = 'url('+flechaimg.src +')';// = loader.addImage('images/flecha.gif'),
       btnpause.style.backgroundImage = 'url('+pauseimg.src +')';// = loader.addImage('images/pause.gif'),
       contadorlive.style.backgroundImage = 'url('+liveimg.src +')';// = loader.addImage('images/live.png'),
              contadorlevel.style.backgroundImage = 'url('+levelimg.src +')';// = loader.addImage('images/level.png'),                              
     
   
  
    
    
    
    
    
    
     var  splashlogo1 = setInterval(function () {
         
            
              sound1.src="images/intro.ogg";
         
              clearInterval(splashlogo1);

    }, 2700);
		 var  splashlogo = setInterval(function () {
         
            gamescreen.style.display = "block";
              splashlogocompany.style.display = "none";
            
              clearInterval(splashlogo);

    }, 4000);
        
        
         var  gamescreenstart = setInterval(function () {

         var introc25 = setInterval(function () {
           
          sound1.play();
            pantaprincipal.style.backgroundSize = "100% 100%,0px 0px ,auto,auto";
            pantaprincipal.style.backgroundImage ='url('+videoleveldragon1img.src +')'; 
            pantaprincipal.style.backgroundRepeat = "no-repeat";
           
           
            clearInterval(introc25);
        }, 5000);
        
         var introc26 = setInterval(function () {
	
		 
        pantaprincipal.style.display = "none";
		         
		
           game.style.left = "0px";
           
           pantabun.style.display = "block";
         
			  lazerdeath.play();
           
            clearInterval(introc26);
        }, 8000);
        
          var introc27 = setInterval(function () {

	   
	   msglevel.style.left="35%";
           pantabun.style.display = "none";
		   btnstart.style.backgroundImage='url('+playimg.src +')';
		  
           
          
            clearInterval(introc27);
        }, 9500);
        
        
          var introc28 = setInterval(function () {
              btnpause.style.opacity="0.1";
       //gamerun();
        protectorcortinastart.style.display ="block";  
              btnpause.style.display="block";  
            clearInterval(introc28);
			
        }, 9900);
		
		  clearInterval(gamescreenstart);
			
        }, 4100);
    
    
    
    
    
      var a = document.getElementsByTagName('canvas')[0];
      var b = document.body;
      var d = function(e){ return function(){ e.parentNode.removeChild(e); }; }(a);
      
      var AudioContext =
        window.AudioContext ||
          window.webkitAudioContext;
      var requestAnimationFrame =
        window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(f){ setTimeout(f, 1000/30); };
     
      document.body.clientWidth;
      
      (window.onorientationchange = window.onresize = function(a){
        var mw = Infinity;
        var mh = Infinity;
        var min = Math.min;

        return function(w,h){
          if (arguments.length === 2) {
            mw = w;
            mh = h;
          }
          a.style.width = window.innerWidth+ 'px';
          a.style.height = window.innerHeight+ 'px';
        };
      }(a))();

      var c = a.getContext('2d');
    
    
    
    
c.scale(a.height/1E3,a.height/1E3);


d=e=f=h=0;
g=[];
for(o=0;o<1E3;o++)
  g[o]=g[o+1E3]=8*Math.random()|1-1;
i=j=300;
k=20;
l=50;

var  gameover = false;
var  pause = false;


click=onmousedown=onkeydown=function(){
  

  if(e){
    d=e=f=h=0;
    g=[];
    for(o=0;o<1E3;o++)
      g[o]=g[o+1E3]=8*Math.random()|1-1;
    i=j=300;
    k=20;
    l=50;

	
msglevel.style.left="35%";

  }
  

  else{
    h=45;
    d=1;
	

		 
		 
  }
};


function gamerun(){

(n=function(){
    
  c.fillStyle="transparent";
  c.fillRect(0,0,4E4,4E4);
  c.clearRect(0,0,4E4,4E4);
 
  c.fillStyle="black";
 
  c.beginPath();
  c.moveTo(-k,0);
  for(o=2E3;o--;)
    o%20
    ?
    c.lineTo(40*o-k,20+4*g[o])
    :
    (c.lineTo(40*o-k,100*g[o]),c.lineTo(40*o-k-4,100*g[o]));
  c.lineTo(40*o-k,0);
  c.fill();
  
  
  c.beginPath();
  c.moveTo(-k,2E3);
  for(o=2E3;o--;)
    o%20
    ?
    c.lineTo(40*o-k,980-4*g[o])
    :
    (c.lineTo(40*o-k,100*(g[o]+3)),c.lineTo(40*o-k-4,100*(g[o]+3)));
  c.lineTo(40*o-k,1E3);
  c.fill();
  
  // Dragon
  p="fEFf&{{~_=,;=vviJ.jfVi/.OoyizyhkhEwf74)\n$fwwuvtU`"+(10<h?"iZ[*)yj:*im**y|Ktdww54#5Dy\iz[Kzi[Jiijk[e@1!":"zl]LfU{\lKtBUh{zzU66iigig5\n&iiyz{vfwwiyDfwiiE");
  c.fillStyle="black";
  c.beginPath();
  c.moveTo(v=i-e,w=(j-=h)-e);
  for(o in p){
    y=8-2*(p.charCodeAt(o)>>4);
    z=16-2*(p.charCodeAt(o)&15);
    c.lineTo(v+=(e?y:z),w+=(e?-z:y));
  }
  c.fill();
  
 
  d&&(h-=6);
  

  d&&!e&&(k+=20,4E4<k&&(k-=4E4));
  

  !d||e||(k+280)%800||(f++,20<l&&l--);
  
  if(50>j||950<j||!((k+300)%800)&&(j<100*g[20*~~(k/800)+20]+50||j>100*g[20*~~(k/800)+20]+250)){
    e=40;

	 sound1.src="images/soundmenu2.ogg";
        protectorcortinagameover.style.display ="block";
		
		btnstart.style.backgroundImage="url(images/gameover.png)";
		pantabun.style.display="block";
		golpedragon.play();
        contador.style.backgroundImage="url(images/9.png)";
    
    btnpause.style.opacity="0.1";
         gameover = true;
	}
	else{

	}
	
   c.fillStyle="gray";
  c.font="3em Arial";

  if(d)
  {
 
		 
  }
  
  if(d)
  {
  
  menu.style.display="none";
  btnstart.style.left ="-150%";
  protectorcortina.style.opacity="0.1";
  }
  
   if(e)
  {
  c.fillText(" ",a.width/(a.height/1E3)/2-30*4,600);
  
   menu.style.display="block";
  btnstart.style.left ="35%";

  }
  else{

  }
  
  if(e){
//  c.fillText(" ",a.width/(a.height/1E3)/2-30*9,600);
 
		
  }
  
  if(!d){
   c.fillText(" ",a.width/(a.height/1E3)/2-30*1,800);
   sound1.src="images/s9.ogg";
         sound1.play();
		 
   
  }
  
  
  if(f === 1)
  {
        contador.style.backgroundImage="url(images/9.png)";
  
  }
     if(f === 2)
  {
      contador.style.backgroundImage="url(images/8.png)";
  
  }
  if(f === 3)
  {
  contador.style.backgroundImage="url(images/7.png)";
      
		 pantaactor1avioneta2.style.left="-80%";
		 
  }
    
      if(f === 4)
  {
  contador.style.backgroundImage="url(images/6.png)";
   	 
  }
    
    
  
   if(f === 5)
  {
 contador.style.backgroundImage="url(images/5.png)";
		 
		 pantaactor1avioneta2.style.left="-40%";
		 
  }
    
       if(f === 6)
  {
       pantaactor2.style.display="block";
  contador.style.backgroundImage="url(images/4.png)";
   	 
  }
          if(f === 7)
  {
      
     
  contador.style.backgroundImage="url(images/3.png)";
   	 
  }
  
   if(f === 8)
  {
      
 
		 contador.style.backgroundImage="url(images/2.png)";
		 pantaactor1avioneta2.style.left="-30%";
		 
  }
      if(f === 9)
  {
 
		 contador.style.backgroundImage="url(images/1.png)";
		
		 
  }
    
    
  
   if(f === 10)
  {
        btnpause.style.display="none"; 
		 pantaactor1avioneta2.style.left="-30%";
		 msglevelcomplete.style.left="20%";
     
		 protectorcortina.style.opacity="0.9";
   
     gameover = true;
      
      var  splashgameover = setInterval(function () {
  protectorcortinalevel.style.display="block";
btnmsglevelcomplete.style.left="30%";
          
     clearInterval(splashgameover);

    }, 3000);
     
		 
  }
  
  
  if(gameover === false){
       setTimeout(n,l);
 
    
}
    



})();


}

    document.getElementById("protectorcortinagameover").addEventListener("click", function () {
      pantaactor2.style.display="none";
        
        
        
        contador.style.backgroundImage="url(images/9.png)"; 
protectorcortinagameover.style.display="none";

      pantabun.style.display="none";
	  
	  btnstart.style.backgroundImage="url(images/play.gif)";
        gameover = false;
		
		gamerun();


}, false);

 document.getElementById("protectorcortinastart").addEventListener("click", function () {

      pantaactor2.style.display="none";
         contador.style.backgroundImage="url(images/9.png)";
		
		
protectorcortinastart.style.display="none";

      pantabun.style.display="none";
        gameover = false;
		 gamerun();

}, false);



 document.getElementById("protectorcortina").addEventListener("click", function () {
btnpause.style.opacity="0.9";  
 contador.style.backgroundImage="url(images/9.png)";
			msglevel.style.left="100%";
	
}, false);

 document.getElementById("protectorcortinalevel").addEventListener("click", function () {
			  location.href="level2.html";
	
}, false);
        
        
        
         document.getElementById("btnpause").addEventListener("click", function () {
  if(!gameover){
       
      protectorcortinapause.style.display="block";
gameover = true;
      
     }else
         {
          setTimeout(n,l);
gameover = false;    
             
                   protectorcortinapause.style.display="none";
         }
             
             
           }, false);
        
          document.getElementById("btncontinue").addEventListener("click", function () {
  if(!gameover){
       
      protectorcortinapause.style.display="block";
gameover = true;
      
     }else
         {
          setTimeout(n,l);
gameover = false;    
             
                   protectorcortinapause.style.display="none";
         }
             
             
           }, false);
        
         document.getElementById("btnrestart").addEventListener("click", function () {
        location.reload(); 
          }, false);
  
}); 


// no  click  right
document.oncontextmenu = function() {
      return false
   }
   function right(e) {
      
      if (navigator.appName == 'Netscape' && e.which == 3) {
         
         return false;
      }
      else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) {
         
      return false;
      }
   return true;
}
document.onmousedown = right;



            
 