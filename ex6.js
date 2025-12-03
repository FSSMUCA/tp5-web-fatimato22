let i;
let sp=0;
let si=0;
for(i=1;i<51;i++){
    if(i%2==0){
        sp+=i;
    }
    else{
      si+=i;
    }
}
console.log("la somme des nombre pair est : " +sp);
console.log("la somme des nombre impair est : " +si);