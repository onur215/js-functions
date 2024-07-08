const toplam = (n)=>{
    let toplam =0
    for (let i =1; i<=n; i++){
        // toplam += i
        toplam = toplam +i
    }
    console.log(toplam);
}
toplam(9)

//fibonacci terimleri

const fibonacci = (n)=>{
    if (n===0) return n;
    if (n<=2){
        return 1
    } else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
}

console.log(fibonacci(6));