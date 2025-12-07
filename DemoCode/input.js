const input = require('prompt-sync')({ sigint: true})

const sapa  = "Halo"
const nama = input("Masukan  nama: ")
const lahir = Number(input("Masukan  tahun lahir: "))
const umur = 2025 - lahir

console.log(sapa + nama)
console.log(`Halo ${nama}, umur ${umur}`)