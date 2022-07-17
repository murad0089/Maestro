const word_place = document.querySelector('.word')
const letter= document.querySelectorAll('.letter')
const Start = document.getElementById('Start')
const next_word = document.querySelector('#next_word')
const hint = document.querySelector('#hint')
let words=['collapse','present','printer']
let new_div
let new_letter
let countDownDate = new Date().getTime()+30000;
let u
let score=0

Start.addEventListener('click', start)

function search(word,i,u){
    
    for(let a = 0;a<words[i].length;a++){
        if(words[i].indexOf(word,u)!=-1 && document.getElementById((words[i].indexOf(word,u)+1).toString()).innerHTML==''){
            console.log(word,words[i].indexOf(word,u));
            document.getElementById((words[i].indexOf(word,u)+1).toString()).innerHTML=word
            score=score+10
            document.querySelector('.score').innerHTML="Score: "+score
            u=1+words[i].indexOf(word,u)
        }else{
            break;
        }
    }

}
function start(){
    i=0
    new_blocks(i)
    countDownDate = new Date().getTime()+31000;
    var inter = setInterval(countdown,0)
    next_word.addEventListener('click',()=>{
        i++;
        console.log(i,words.length);
        if(i>=words.length){
            console.log(i,words.length);
            word_place.removeChild(word_place.firstChild);
            new_div=document.createElement('div')
            new_div.className= 'first'
            new_div.innerHTML = 'Game is over'
            word_place.appendChild(new_div)
            clearInterval(inter)
            document.querySelector(".time").innerHTML ='Time';
            Start.removeEventListener('load',start)
            
        }else{
            new_blocks(i)
        }
    countDownDate = new Date().getTime()+31000;
       
    })
    letter.forEach(lt=> lt.addEventListener('click',(e)=>{
        search(e.target.innerHTML,i)
    }))
}  

function countdown(){

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".time").innerHTML ='Time: '+seconds;
    console.log(seconds)
    if (distance < 0) {
        document.querySelector(".time").innerHTML = "Time is up";
      }
    }
function new_blocks(i){
    word_place.removeChild(word_place.firstChild);
    
        new_div=document.createElement('div')
        new_div.className= 'all_letters'
        for(let j=0;j<words[i].length;j++){
            new_letter=document.createElement('div')
            new_letter.className='each'
            new_letter.id=j+1
            new_div.appendChild(new_letter)
        }
        word_place.appendChild(new_div)
    
}