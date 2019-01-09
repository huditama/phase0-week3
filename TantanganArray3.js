function dataHandling2() {

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]

input.splice(1, 1, 'Roman Alamsyah Elsharawy')
input.splice(2, 1, 'Provinsi Bandar Lampung')
input.splice(4, 1, 'Pria', 'SMA Internasional Metro')
console.log(input)

//------------------------------------------------

var bulan = '05'
switch(bulan){
  case '01': console.log('Januari')
  break;

  case '02': console.log('Februari')
  break;
    
  case '03': console.log('Maret')
  break;

  case '04': console.log('April')
  break;

  case '05': console.log('Mei')
  break;

  case '06': console.log('Juni')
  break;

  case '07': console.log('Juli')
  break;

  case '08': console.log('Agustus')
  break;
    
  case '09': console.log('September')
  break;

  case '10': console.log('Oktober')
  break;

  case '11': console.log('Nopember')
  break;

  case '12': console.log('Desember')
  break;

  default: console.log('ERROR')
}

//------------------------------------------------

var tanggal = input[3].split('/')
tanggal.sort(function(value1, value2) {return value2 - value1
})
console.log(tanggal)

var tanggal2 = input[3].split('/')
console.log(tanggal2.join('-'))


//------------------------------------------------

console.log(input[1].slice(0, 15))

}

dataHandling2()