const input = require('prompt-sync')({ sigint: true})

const nama = input("Masukan nama: ")
const umur = Number(input("Masukan Umur: "))


if (umur < 21){
    console.log("Maaf",nama, ", umur kamu kurang", 21 - umur, "tahun lagi")
}else if (umur >= 21){
    const uang = Number(input("Masukan Uang: "))
}else if (uang < 500000){
    console.log("Maaf", nama, ", uang kamu cuma", uang, "datang lagi lain kali")
}