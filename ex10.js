function sommelternative(n){
let s=0;
    for(let i=1;i<=n;i++){
    s+=i;
}
alert("la somme de la version 1 est : "+s);
}
function sommeRecursive(n){
    if(n==0){
        return 0;
    }
    else {
        return n + sommeRecursive(n-1);
    }
}
let t=Number(prompt("saisir un nombre"));
 let r=factorielle(t);
 alert(r);
 /* 1 - Quel code est le plus lisible ?
   le code le plus lisible est la fonction itératif
2 - Quel code est le plus performant ?
 code est le plus performant est le code itératif car si on a un grand nombre la récursif consomme plus de mémoire 
3 - La récursion peut-elle poser des problèmes ? Pourquoi ?
 oui  dans le cas le nombre est trop grand 
4 - Dans quels cas privilégier une boucle ? 
  a- le nombre est grand 
  b-optimiser de la mémoire 
  c- pour une code plus lisible 
  */