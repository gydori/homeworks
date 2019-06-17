const deanTar = 4;
const deanToltenyTar = 10;
const samTar = 3;
const samToltenyTar = 8;
const himTolteny = 4;
const noTolteny = himTolteny/2;
const alfaTolteny = himTolteny*3;
const osszVampir = 12;
const noVampir = 3;
const alfaVampir = 1;

const ToltenyKulOssz = (a, b) => {
    return a * b;
}

let deanToltenyOssz = ToltenyKulOssz(deanTar, deanToltenyTar);
console.log("Hány tölténye volt Deannek?")
console.log("Deannek összesen " , deanToltenyOssz , " tölténye volt.", '\n');

let samToltenyOssz = ToltenyKulOssz(samTar, samToltenyTar);
console.log("Hány tölténye volt Sannek?")
console.log("Sannek összesen " , samToltenyOssz , " tölténye volt.", '\n');

const ToltenyOssz = (a, b) => {
    return a + b;
}

let toltenyOssz = ToltenyOssz(deanToltenyOssz, samToltenyOssz);
console.log("Hány töltényük volt összesen?")
console.log("Összesen " , toltenyOssz , " töltényük volt.", '\n');

console.log("Hány töltény kell egy női vámpír kivégzéséhez?")
console.log("Egy női vámpír kivégzéséhez " , noTolteny , " töltény szükséges.", '\n');

console.log("Hány töltény kell egy alfa vámpír kivégzéséhez?")
console.log("Egy alfa vámpír kivégzéséhez " , alfaTolteny , " töltény szükséges.", '\n');

const TobbTolteny = (a, b) =>{
    if( a > b){
        return a;
    }
    else{
        return b;
    }
}

let tobbTolteny = TobbTolteny(deanToltenyOssz, samToltenyOssz);
console.log("Kinek volt több tölténye?")
if(tobbTolteny == deanToltenyOssz){
    console.log("Deannek volt több tölténye." , '\n');
}
else{
    console.log("Samnek volt több tölténye.", '\n');
}

const OsszVampirKill = (a, b, c, d, e, f) => {
    return a * b + c * d + (e-(a+c)) * f;
}

let osszVampirKill= OsszVampirKill(noVampir, noTolteny, alfaVampir, alfaTolteny, osszVampir, himTolteny);
console.log("Hány töltény szükséges az összes vámpír kivégzéséhez?");
console.log("Az összes vámpír kivégzéséhez " , osszVampirKill , " töltény szükséges.", '\n');

let lov = 1;
let noVampirCsokk = 3;
if(noVampirCsokk > 0){
    if(lov%noTolteny == 0){
        noVampirCsokk=noVampirCsokk-1;
    }
    lov++;
}
lov--;

console.log("Ha minden golyó betalál, Samnek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?");
console.log("Maradék töltény:" , samToltenyTar-lov , '\n');

let himVampirCsokk = 8;
let noVampirCsokk2 = 3;
let szamlNo = 0;
let szamlHim = 0;

for(let deanlov =1; deanlov<=deanToltenyTar; deanlov++){
    if(noVampirCsokk2>0 && deanlov%noTolteny == 0){
        noVampirCsokk2--;
        szamlNo = szamlNo + noTolteny;
    }
    else if(himVampirCsokk>0 && (deanlov-szamlNo)%himTolteny == 0){
        himVampirCsokk--;
        szamlHim = szamlHim + himTolteny;
    }
    //console.log("kilőtt töltények: " , deanlov);
    //console.log("nők megöléséhez elhasznált töltények: " , szamlNo);
    //console.log("hímek megöléséhez elhasznált töltények: " ,szamlHim);
    //console.log("női vámpír " , noVampirCsokk2);
    //console.log("hím vámpír " , himVampirCsokk,'\n');
}

console.log("Ha minden golyó betalál, Deannek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?");
console.log("Maradék töltény:" , deanToltenyTar-(szamlNo+szamlHim), '\n');

console.log("Szükséges volt-e Castiel közbelépése?");
if(toltenyOssz>osszVampirKill){
    console.log("Nem volt rá szükség.", '\n');
}
else{
    console.log("Szükség volt ra.", '\n');
}

console.log("Sam vagy Dean lőtt le több vámpírt, ha Deannek minden harmadik lövése félrement a sok wiskeytől?");
if(samToltenyOssz>(deanToltenyOssz*2/3)){
    console.log("Sam lőtt le többet", '\n');
}
else{
    console.log("Dean lőtt le többet", '\n');
}

//let deanKill= ((deanToltenyOssz*2/3-3*noTolteny)/himTolteny)+3;
//console.log(deanKill);

console.log("Ha megjelenik a csetepaté végén Crowley, a keresztúti démon, marad-e elég golyó a számára?");
const crowley = alfaTolteny*5;

if(ToltenyOssz-osszVampirKill>=crowley){
    console.log("Marad elég töltény Crowley-hoz.", '\n');
}
else{console.log("Nem marad elég töltény Crowley-hoz.", '\n');
}

console.log("Hány hete néz folyamatosan Supernatural-t Tasi, ha most tart az S8E18-nál és napi átlag 5 rész lecsúszik, de hétvégén 10 is?");
const snReszOssz = 5*22+16+23+18;
const reszPerHet = 5*5+2*10;

let hetek = snReszOssz/reszPerHet;
console.log("Tasi " , hetek, " hete nézi a sorozatot.");






