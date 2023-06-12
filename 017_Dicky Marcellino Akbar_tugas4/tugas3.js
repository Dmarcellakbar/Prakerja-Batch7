function hitungLuasLingkaran(jariJari) {
  var luas = Math.PI * jariJari ** 2;
  return luas;
}

function hitungKelilingLingkaran(jariJari) {
  var keliling = 2 * Math.PI * jariJari;
  return keliling;
}

// Input panjang jari-jari dari pengguna
var jariJari = parseFloat(prompt('Masukkan panjang jari-jari lingkaran:'));

// Hitung luas dan keliling lingkaran
var luas = hitungLuasLingkaran(jariJari);
var keliling = hitungKelilingLingkaran(jariJari);

// Tampilkan hasil
console.log('Luas lingkaran: ' + luas);
console.log('Keliling lingkaran: ' + keliling);
