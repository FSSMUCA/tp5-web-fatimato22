function totalAvecRemise(total,remise){
    let total=Number(prompt("saisir un total ht"));
    let remise=Number(prompt("saisir un remise(valeur en %)"));
    return total - (total*remise/100) ;
}
let n=totalAvecRemise(total,remise);
alert(n);