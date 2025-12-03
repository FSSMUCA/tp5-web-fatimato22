let min= Number(prompt("entrer le nombre minimale : "));
let max=Number(prompt("entrer le nombre maximale : "));
let i ;
for(i=min;i<=max;i++){
    if(i%3==0){
        alert(i);
        alert("Three");
    }
    if(i%5==0){
       alert(i);
        alert("Five");
    }
    if(i%3==0 && i%5==0){
       alert(i);
        alert("Three&Five"); 
    }
}