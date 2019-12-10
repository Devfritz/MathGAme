var play = false;
var score;
var action;
var timeremaining;
var bonneReponse;



document.querySelector(".question").style.display = "none";
document.querySelector(".result").style.display = "none";
document.querySelector("button").onclick= function(){
    if(play === true){
        location.reload();
    }else{
      play = true;
      document.querySelector(".gameOver").style.display = "none";
      document.querySelector(".startGame").innerHTML = "reset game";
      document.querySelector(".question").style.display = "block";
      document.querySelector(".result").style.display = "flex";
      score = 0;
      document.querySelector(".scoreValue").innerHTML = score;

      document.querySelector(".time").style.display = "block";

      
       timeremaining = 60;
      document.querySelector(".remaining").innerHTML = timeremaining;
      time();

     for(var i=1;i<5;i++){
        document.querySelector(".reponse"+i).addEventListener("click",function(){

            if(play===true){
                if( this.innerHTML == bonneReponse){
                   
                    score++;
                    document.querySelector(".scoreValue").innerHTML = score;
                    document.querySelector(".correct").style.display = "block";
   
                    setTimeout(function(){
   
                       document.querySelector(".correct").style.display = "none";
                    },1000);
                     questionAleatoire();
                   }
                   else {          
           document.querySelector(".incorrect").style.display = "block"; 
           setTimeout(function(){
               document.querySelector(".incorrect").style.display = "none";
   
            },1000);
         }
                   }  
        
   
         })
        
       

     }

      function time(){
           action = setInterval(function(){
              timeremaining -=1;
document.querySelector(".remaining").innerHTML = timeremaining;

if(timeremaining === 0){
  stopseconde();

  document.querySelector(".gameOver").style.display = "block";
  document.querySelector(".gameOver").innerHTML= "<h1>Finish time </h1> <p>score est " + score + " </p>" ;
  hidden();
  play = false;
}
          },1000);
      }







      function stopseconde(){
         clearInterval(action);
      }

      questionAleatoire();

      function hidden(){
          document.querySelector(".time").style.display="none";
      }
      function questionAleatoire(){
          var x = Math.floor(Math.random()* 10 ) + 1;

          var y = Math.floor(Math.random()* 10 ) + 1;


         bonneReponse = x * y ;

          document.querySelector(".question").innerHTML = x + "*" + y;

          var correctAnswerCase = Math.floor(Math.random()*4) + 1;
          
        document.querySelector(".reponse"+correctAnswerCase).innerHTML = bonneReponse;

        var answer = [bonneReponse];

        for(i = 1; i < 5;i++){
            if(i != correctAnswerCase){
                var mauvaiseReponse;
                do{
                      mauvaiseReponse = Math.floor(Math.random()* 10 ) + 1 * Math.floor(Math.random()* 10 ) + 1;
              

                }while(answer.indexOf(mauvaiseReponse)>-1);

               
               document.querySelector(".reponse"+i).innerHTML = mauvaiseReponse;

               answer.push(mauvaiseReponse);
            }
        }
          
          }

          
      }


    }




   

    