const input = require('prompt-sync')({ sigint: true})

const nilai = Number(input("Masukan  nilai: "))

if (nilai > 75){
    
    console.log("A")
}else{
    console.log("remidi")
}