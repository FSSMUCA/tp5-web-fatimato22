function verifierMotPasse(mdp){
   let t =mdp.length;
   if(t>=8 && mdp.includes("@")){
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