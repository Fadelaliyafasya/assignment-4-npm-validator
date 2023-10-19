const readline = require("readline");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputan() {
  rl.question("Masukan namamu: ", (nama) => {
    rl.question("Masukan nomormu: ", (nomor) => {
      if (validator.isMobilePhone(nomor, "any")) {
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
            inputan();
          }
        });
      } else {
        console.log(
          "Nomor yang anda masukan invalid, silahkan coba masukan kembali!!..."
        );
        inputan();
      }
    });
  });
}
inputan();
