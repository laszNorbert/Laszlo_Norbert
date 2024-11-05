function osszesOszto(szam:number) : number []{
 var tarolo : number [] = [];
 for(var i = 0; i <= szam; i++){
    if (szam % i === 0) {
        tarolo.push(i)
    }
 }
 return tarolo;
};
function parosDarab(szamtomb:number[]):number{
    var tarolo : number = 0;
    for(var i:number=0; i < szamtomb.length; i ++){
        if(szamtomb[i] % 2 === 0){
            tarolo++
        }
    }
    return tarolo;
};
function fuggvenyhivasPalindrom(fuggveny:() => string):boolean{
    var szoveg = fuggveny();
    var erdmeny:boolean=true;
    for(var i = 0; i < szoveg.length; i++){
        if(szoveg[i] != szoveg[szoveg.length-1-i]){
            erdmeny=false
            break;
        }
    }
    return erdmeny;
};