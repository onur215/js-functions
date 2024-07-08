// Call back FUNCTİONS


// normal fonksiyon tanımlama
// a : argument
function deneme(a){
    console.log(a);
}
//67 değeri parametre
deneme(67)

//*** Callback function */
// JavaScript'te callback fonksiyonları, bir fonksiyonun başka bir fonksiyona argüman olarak geçirilip, bu fonksiyonun daha sonra çağrılması prensibine dayanır.

function ilkFonksiyon(a){
    console.log("ilk fonksiyon");
}

function ikinciFonksiyon (){
    console.log("ikinci fonksiyon");
}

ilkFonksiyon (ikinciFonksiyon)

//------------

function matematikselislem(sayi1,sayi2,islem){
    const sonuc = islem(sayi1,sayi2)
    console.log(sonuc);
}

function topla(a,b){
    return a+b

}

function cıkar(a,b){
    return a-b

}

matematikselislem(45,23,topla)
matematikselislem(45,23,cıkar)

//---------------

function islemler(sayi1, sayi2, islem){
    const sonuc = islem(sayi1,sayi2)
    console.log(sonuc);
}


function sqr(a,b){
    return (a**2 + b**2);
}

function sqrt(a,b){
    return (Math.sqrt(a) + Math.sqrt(b));
}

islemler(12,9,sqr)
islemler(12,9,sqrt)