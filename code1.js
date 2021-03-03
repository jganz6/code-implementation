function cekPalindrom(teks) {
    if (typeof (teks) === "string" && teks) {
        //deklarasi
        let n = teks.length;
        let palindrom = true;
        let i = 0;
        if (n > 1) {
            palindrom = true;
        } else {
            palindrom = false;
        }
        //begin
        //perulangan untuk mengecek per index string dan mengontrol isi palindrom
        while (i < (n / 2) && palindrom == true) {
            if (teks[i] === teks[n - (i + 1)]) {
                palindrom = true;
            } else {
                palindrom = false;
            }
            i++;
        }
        //pengecekan palindrom jika true output="Palindrom" jika false output ="Bukan Palindrom"
        if (palindrom === true) {
            console.log("Palindrom");
        } else {
            console.log("Bukan Palindrom");
        }
        //end
    } else {
        console.log("Parameter harus string dan tidak boleh kosong");
    }
}
//pemanggilan fungsi cekPalindrom()
cekPalindrom("malam")