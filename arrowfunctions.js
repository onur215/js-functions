// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

function selamla(){
    console.log("selam");
}

const Selamla = function(){
    console.log("Merhaba");
}

const Selamlas = () => {
    console.log("merhaba");
}

const selams=()=> console.log("selam :)");

//3 ün katını kontrol eden function yaz

// const kontrol=(num)=>{
//     result= num %3 === 0 ? "3 ün katıdır" : "3 ün katı değildir"
//     return result
// }


const kontrol=(num)=>num %3 === 0 ? "3 ün katıdır" : "3 ün katı değildir"
    
   

console.log(kontrol(48));

const add = (a,b)=>  a + b

console.log(add(6,8));

const hesap = (r,h)=> 3.14*(r**2)*h

console.log(hesap(3,5));

const hacim=(r,h)=> Math.PI*r**2*h
console.log(hacim(4,5));

//2 sayıdan büyük olanı bulan functionu yaz

const bigger = (a,b)=> a>b ? `${a} büyüktür` : `${b} büyüktür`
console.log(bigger(2,5));

//verilen değere kadar olan asal sayıuları yazdır

const asal = (num) => {
    if(num <= 1) return "sayı asal değildir"
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0)return "sayı asal değil"
    }
    return "sayı asal"
}
console.log(asal(11));