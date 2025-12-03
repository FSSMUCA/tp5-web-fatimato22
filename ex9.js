function factorielle(n){
    if(n==0){
        return 1 ;
    }
    else{
        return n*factorielle(n-1);}
    }
 let t=Number(prompt("saisir un nombre"));
 let n=factorielle(t);
 alert(n);