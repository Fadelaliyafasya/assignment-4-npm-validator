const readline = require("readline");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputan() {
  function prosesNama() {
    rl.question("Masukan namamu: ", (nama) => {
      prosesNomor(nama);
    });
  }

  function prosesNomor(nama) {
    rl.question("Masukan nomormu: ", (nomor) => {
      if (validator.isMobilePhone(nomor, "id-ID")) {
        prosesEmail(nama, nomor);
      } else {
        console.log(
          "Nomor yang anda masukan invalid, silahkan coba masukan kembali!!..."
        );
        prosesNomor(nama);
      }
    });
  }

  function prosesEmail(nama, nomor) {
    rl.question("Masukan emailmu: ", (email) => {
      if (validator.isEmail(email)) {
        console.log(
          `Nama kamu adalah ${nama}, nomor handphonemu adalah ${nomor}, dan emailmu ${email}, terima kasih!!!`
        );
        rl.close();
      } else {
        console.log(
          "Email yang anda masukan invalid, coba masukan kembali!!..."
        );
        prosesEmail(nama, nomor);
      }
    });
  }

  prosesNama();
}
inputan();
