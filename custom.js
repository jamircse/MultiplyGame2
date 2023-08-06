
"use strict"

var question = document.querySelector('.question h2');
var ansoption = document.querySelector('.options');
var start = document.querySelector('.start');
var timeleft = document.querySelector('.timeleft');
var score = document.querySelector('.score');
var num1, num2;
var currectanswer,answer;
var options = []
var timer, currect =0;
var flag=0;


start.addEventListener("click", () => {
    clearInterval(timer);
    currect=0;
    flag=1;
    initTimer(60);
    start.innerText = "Restart";
    
});


var initTimer = (maxTime) => {
    timer = setInterval(() => {

        if (maxTime > 0) {
            maxTime--;
            return timeleft.innerText =`Time left : ${maxTime}`;
        } else{ flag=0;}
         
       clearInterval(timer);
       showMassage('Time over  ', 'danger');
            
                           
    }, 1000);


    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

  
function multiplygame(){
    
    ansoption.innerHTML = '';
    options = [];
    num1 = Math.ceil(Math.random() * 20);
    num2 = Math.ceil(Math.random() * 20);
    currectanswer = num1 * num2;
    question.innerText = `${num1} x ${num2} = ?`;
    options = [currectanswer];

    var ansbox = Math.ceil(Math.random() * 4);

    for (let i = 1; i < 5; i++) {
        var wrong;
        if (i != ansbox) {
            do {
                wrong = Math.ceil(Math.random() * 20) * Math.ceil(Math.random() * 20);
            } while (options.indexOf(wrong) > -1)
            options.push(wrong);
        }
    }

    options = shuffle(options);

    for (let i = 0; i < options.length; i++) {
        let optionbox = document.createElement("lebel");
        optionbox.classList.add("ansbox_box");
        optionbox.innerText = options[i];
        ansoption.appendChild(optionbox);
    }

    
    answer = document.querySelectorAll('.ansbox_box');
    answer.forEach(Element => {
        Element.addEventListener('click', setcal);
    });
    
    function setcal() {
        if(flag==1){

            if (this.innerText == currectanswer) {
                multiplygame();
                currect++;
                score.innerText=`Score : ${currect}`;
                 showMassage('currect', 'success');
        } else {
            showMassage('Try again ', 'danger');
        }
    }else { 
        showMassage('Time over please click restart button ', 'danger');}
        
        


        }
       


}


function gamestart(){
    multiplygame();
}

gamestart();



    
    var showMassage = (message, status) => {
        var msg = document.querySelector(".msg");
        msg.classList.add(`bg-${status}`);
        msg.innerText = message;
        setTimeout(() => {
            msg.innerText = " ";
            localStorage.removeItem("msg");
            localStorage.removeItem("status");
            msg.classList.remove(`bg-${status}`);
        }, 1000);
    }
}

