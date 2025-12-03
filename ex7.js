function verifierMotPasse(mdp){
    c=0 ;
   let t =Text.length;
   if(t>=8){
      c++;
   }
   if(mdp.includes("@")){
    c++;
   }
   if(c==0){
    return false;
   }
   else{
    return true;
   }
}
let n=prompt("saisie votre mot de passe");
if(verifierMotPasse(n)){
    alert("mot de passe valide ");
}
else{
    alert("mot de passe invalide ");
}