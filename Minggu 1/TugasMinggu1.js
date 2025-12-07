const input = require('prompt-sync')({ sigint: true})

const nama = input("Masukan nama: ")
const umur = Number(input("Masukan Umur: "))
if (umur < 21){
    console.log("Tolak")
}