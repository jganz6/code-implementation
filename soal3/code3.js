function divideAndSort(sequenceOfNumber) {
    if (typeof (sequenceOfNumber) === "number" && sequenceOfNumber) {
        //deklarasi
        let convertString = sequenceOfNumber.toString();
        let j = 0;
        let matriksAngka = [];
        let result = "";
        let k = 0;
        matriksAngka[j] = [];
        matriksAngka[0][0] = "";
        //begin
        //perulangan untuk memasukan string ke dalam array multi dimensi [bagian][daftar angka]
        // j = index untuk dimensi pertama 
        // k = index untuk dimensi kedua
        for (row in convertString) {
            if (convertString[row] !== "0") {
                matriksAngka[j][k] = "";
                matriksAngka[j][k] = matriksAngka[j][k] + convertString[row];
                k++;
            } else {
                k = 0;
                j++;
                matriksAngka[j] = [];
                matriksAngka[j][0] = "";
            }
        }
        //perulangan untuk memasukan semua angka pada array ke dalam variabel result
        for (l in matriksAngka) {
            let swapp = true;
            let n = matriksAngka[l].length - 1;
            let arrAngka = matriksAngka[l];
            do {
                swapp = false;
                for (let i = 0; i < n; i++) {
                    if (arrAngka[i] > arrAngka[i + 1]) {
                        let temp = arrAngka[i];
                        arrAngka[i] = arrAngka[i + 1];
                        arrAngka[i + 1] = temp;
                        swapp = true;
                    }
                }
                n--;
            } while (swapp); /*menyortir angka per bagian*/
            for (m in arrAngka) {
                result = result + arrAngka[m];
            }
        }
        console.log("=".repeat(result.length))
        //mengubah menjadi integer
        resultParsed = parseInt(result);
        console.log(resultParsed); /*menampilkan Output yang bertipe number*/
        //end
    } else {
        console.log("parameter harus number dan tidak boleh kosong!");
    }
}
//pemanggilan fungsi divideAndSort()
divideAndSort(5956560159466056);