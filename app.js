let sign="X";
let disp=document.getElementById("player");

document.body.style.backgroundColor="orange";


function printx(number){
    document.getElementById("new").innerText="";
    let select=document.getElementById("t"+number);
    if(select.innerText==""){
    select.innerText=sign;
   
    checksign();
    disp.innerHTML="<center>" +sign +" is currently playing" +"<center>";
    winner();}
}

function checksign(){
    if (sign=="X") sign="O";
    else sign="X"
}


function getbox(no){
    return document.getElementById("t"+ no).innerText;
}

function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
        return true;
    else return false;
}

function winner(){
    if(checkmove(1,2,3,"X") || checkmove(4,5,6,"X") || checkmove(7,8,9,"X") || checkmove(1,4,7,"X") || checkmove(2,5,8,"X") || checkmove(3,6,9,"X") || checkmove(1,5,9,"X") || checkmove(7,5,3,"X")){
        for(let i=1;i<=9;i++){
            document.getElementById("t"+i).innerText=""
        }
        disp.innerHTML="<center>"+"X has Won"+"</center>"
        document.getElementById("new").innerHTML="<center>"+"Please Play Again"+"</center>"
    }
    else if(checkmove(1,2,3,"O") || checkmove(4,5,6,"O") || checkmove(7,8,9,"O") || checkmove(1,4,7,"O") || checkmove(2,5,8,"O") || checkmove(3,6,9,"O") || checkmove(1,5,9,"O") || checkmove(7,5,3,"O")){
       for(let i=1;i<=9;i++){
            document.getElementById("t"+i).innerText=""
        }
        disp.innerHTML="<center>"+"O has Won"+"</center>"
       document.getElementById("new").innerHTML="<center>"+"Please Play Again"+"</center>"
    }
    else{
        if(getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" && getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" && getbox(9)!=""  )
            {
                
                disp.innerHTML="<center>"+"Its a Tie"+"</center>"
                document.getElementById("new").innerHTML="<center>"+"Please Play Again"+"</center>"
  
                for(let i=1;i<=9;i++){
                    document.getElementById("t"+i).innerText=""
                
            }

    }
}
}
