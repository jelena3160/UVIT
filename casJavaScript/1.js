const a = 15;
const b = 2.5;
console.log('Obim je ', 2*a + 2*b);
console.log('Povrsina je ', a*b);

//pseudoslucajan broj [50,150]

let random_broj = Math.random() * 100 + 50;
random_broj = Math.floor(random_broj);
console.log(random_broj);

let prva_rec = 'Ovo';
let druga_rec = 'je';
let treca_rec = 'recenica';


let recenica = prva_rec + ' ' + druga_rec + ' ' + treca_rec;
console.log(recenica);
console.log(recenica.length);

let indeks = recenica.indexOf('recenica');
console.log(indeks);
indeks = recenica.indexOf('nepostojeca niska');
console.log(indeks);

let podniska = recenica.substring(recenica.length-8, recenica.length);
console.log(podniska);

let nova_recenica = recenica.replace('recenica', 'nesto duza recenica');
console.log(nova_recenica);

console.log(recenica.toUpperCase());
console.log(recenica.toLowerCase());

console.log('\n ' + recenica + ' \n');
console.log(recenica.trim());

console.log(recenica.charAt(0));
console.log(recenica.charAt(recenica.length - 1));

let broj = 42;
let niska = broj.toString();
console.log(niska ,typeof niska);
console.log(broj, typeof broj);

niska = '7';
broj = Number.parseInt(niska);
console.log(broj, typeof broj);
niska = '3.14';
broj = Number.parseFloat(niska);
console.log(broj, typeof broj);

let niska1 = 'jedan';
let niska2 = 'dva';
let broj1 = Number.parseInt(niska1);
let broj2 = Number.parseInt(niska2);
console.log(broj1, broj2, broj1 === broj2);

function najveca_vrednost(a, b){
    return a > b ? a: b;
}

console.log(najveca_vrednost(-1,1), typeof najveca_vrednost);


ispisi_argument = function(arument){
    console.log(arument);
}

ispisi_argument(7);


function pozovi_funkciju_sa_parametrom(prvi, drugi){
    if(typeof prvi == 'function'){
        console.log(prvi.name)
        prvi(drugi);
    }
    else{
        console.log('Neispravni argumenti');
    }
}

pozovi_funkciju_sa_parametrom(ispisi_argument, 8);
pozovi_funkciju_sa_parametrom(0,8);

const niz = [0,1,2,3];
console.log(typeof niz, niz.length);

let suma = 0;
let proizvod = 1;
for(const elem of niz){
    suma += elem;
    proizvod *= elem;
}

console.log(suma, proizvod);

//14

const niz_niski = ['uvit', 'os', 'aisp'];

function ispisi_uvecane_niske(niska){
    for(const elem of niska){
        console.log(elem.toUpperCase());
    }
}

ispisi_uvecane_niske(niz_niski);

//15

const mesoviti_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

function negiraj_bulove_vrednosti(niz){
    for(let i = 0; i < niz.length; i++){
        if(typeof niz[i] === 'boolean')
            niz[i] = !niz[i];
    }
}
negiraj_bulove_vrednosti(mesoviti_niz)
console.log(mesoviti_niz);

//16

function izdvoji_samo_brojeve(niz){
    const novi_niz = [];
    for(const elem of niz){
        if(typeof elem === 'number')
            novi_niz.push(elem);
    }
    return novi_niz;
}

console.log(izdvoji_samo_brojeve(mesoviti_niz));

//17

function ukloni_poslednjih_n_elemenata(niz ,n){ 
    for(let i = n; i > 0; i--){
        niz.pop();
    }
}

ukloni_poslednjih_n_elemenata(mesoviti_niz, 2);
console.log(mesoviti_niz);

//18

const sekvenca = 'a-t-a-g-c-a-g-t-c-c-a';
const nukleotide = sekvenca.split('-');
console.log(nukleotide);

//19

console.log(nukleotide.join("-"));

//20

function napravi_2grame(niz){
    const dvagrami = [];
    for(let i = 0; i < niz.length - 2; i++){
        dvagrami.push(niz.slice(i, i+2));
    }
    return dvagrami;
}

console.log(napravi_2grame(nukleotide));

//21

indeks = nukleotide.indexOf('g');
console.log(indeks);
indeks = nukleotide.indexOf('g', indeks+1);
console.log(indeks);
indeks = nukleotide.indexOf('g', indeks+1);
console.log(indeks);

//22

const niz1 = ['a', 'b'];
const niz2 = ['a', 'b'];

console.log(niz1 === niz2);

//23

function da_li_su_jednaki(niz1, niz2){
    if(niz1.length != niz2.length)
        return false;

    for(let i=0; i<niz2.length; i++){
        if(niz1[i] != niz2[i])
            return false;
    }

    return true;
}

console.log(da_li_su_jednaki(niz1, niz2));

//24

const automobil = {
    ime: 'Fiat',
    model: 500, 
    tezina: 850.0,
    boja: 'bela',
    pokreni: function(){
        console.log('Ukljucen');
    }, 
    vozi: function(){
        console.log('U pokretu');
    },
    zakoci: function(){
        console.log('Koci');
    },
    ugasi: function(){
        console.log('Gasi se');
    },
    ispisi_informacije: function(){
        console.log('Ime ' + this.ime + ' model ' + this.model
        + ' tezina ' + this.tezina + ' kg boja ' + this.boja);
    }
};

console.log(typeof automobil, automobil);

//25

automobil.pokreni();
automobil.vozi();
automobil.zakoci();
automobil.vozi();
automobil.zakoci();
automobil.ugasi();

//26

automobil.ispisi_informacije();

//27

console.log('ime' in automobil);
console.log('prezime' in automobil);
console.log('pokreni' in automobil); 

for(const kljuc in automobil){
    console.log(automobil[kljuc], typeof automobil[kljuc]);
}
