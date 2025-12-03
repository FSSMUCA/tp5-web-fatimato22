let nbr=Number(prompt("veulliez entrer une valeur"));
if(n<0){
 alert("c'est un nombre négatif ");
}
else{
    if(n>=0 && n<=10){
        alert("c'est un nombre petit");
    }
    if(n>=11 && n<=50){
        alert("c'est un nombre moyen");
    }
     if(n>50 && n<=100){
        alert("c'est nombre grand ");
    }
    else if(n>100){
      alert("c'est un nombre tres grande ");
    }

}