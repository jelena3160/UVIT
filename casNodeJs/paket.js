const studenti = [
    {indeks: 288, ime: 'Jelena'},
    {indeks: 25, ime: 'Vukasin'}
];

let broj_studenata = {broj: studenti.length};
function dodaj_studenta(indeks, ime){
    studenti.push({indeks, ime});
    broj_studenata.broj++;
}

function pronadji_studenta(indeks){
    for(const student of studenti){
        if(student.indeks === indeks)
            return student;
    }
    return null;
}

//module.exports.dodaj_studenta = dodaj_studenta;
//module.exports.pronadji_studenta = pronadji_studenta;
module.exports = {
    dodaj_studenta: dodaj_studenta,
    pronadji_studenta: pronadji_studenta,
    brojStudenata: broj_studenata
};