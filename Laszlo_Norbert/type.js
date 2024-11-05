function osszesOszto(szam) {
    var tarolo = [];
    for (var i = 0; i <= szam; i++) {
        if (szam % i === 0) {
            tarolo.push(i);
        }
    }
    return tarolo;
}
;
function parosDarab(szamtomb) {
    var tarolo = 0;
    for (var i = 0; i < szamtomb.length; i++) {
        if (szamtomb[i] % 2 === 0) {
            tarolo++;
        }
    }
    return tarolo;
}
;
function fuggvenyhivasPalindrom(fuggveny) {
    var szoveg = fuggveny();
    var erdmeny = true;
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] != szoveg[szoveg.length - 1 - i]) {
            erdmeny = false;
            break;
        }
    }
    return erdmeny;
}
;
