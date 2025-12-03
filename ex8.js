function totalAvecRemise(total,remise){
    
    return total - (total*remise/100) ;
}
let total=Number(prompt("saisir un total ht"));
    let remise=Number(prompt("saisir un remise(valeur en %)"));
let n=totalAvecRemise(total,remise);
alert(n);