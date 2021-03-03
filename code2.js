function reverseWords(kalimat) {
    if (typeof (kalimat) === "string" && kalimat) {
        //deklarasi
        let n = kalimat.length;
        let j = 0;
        let i = 0;
        let arrKata = [];
        let hasil = "";
        arrKata[0] = "";
        //begin
        //melakukan perulangan untuk memasukan kalimat kedalam array dengan pemisah " "
        while (i < n) {
            if (kalimat[i] !== " ") {
                arrKata[j] = arrKata[j] + kalimat[i];
            } else {
                j++;
                arrKata[j] = "";
            }
            i++;
        }
        //perulangan untuk memasukan semua character pada arrKata ke hasil
        let k = arrKata.length - 1;
        while (k >= 0) {
            hasil = hasil + arrKata[k] + " ";
            k--;
        }
        //output hasil
        console.log(hasil);
        //end
    } else {
        console.log("Parameter harus string dan tidak boleh kosong");
    }
}
//pemanggilan fungsi reverseWords()
reverseWords("Saya belajar Javascript");