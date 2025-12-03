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