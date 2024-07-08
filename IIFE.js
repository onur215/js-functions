//syntax

(function(){
    console.log("Merhaba");
})();

//parametre gönderme işlemi

(function(a,b){
    let toplam = a + b
    console.log(toplam);
})(45,67);

//gönderilen birinci değer taban ikinci üs olacak şekilde üs bulma işlemi yapalım

(function(a,b){
    let islem = a**b
    console.log(islem);
})(5,2);

//değişken kapsülleme

const veri = (function(){
    const sifre = "25647"
    return{
        sifreyiGoster:function(){
            return sifre
        }
    }
})();
console.log(veri.sifreyiGoster());