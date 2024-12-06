class Operator{
    constructor (a,b){
        this.angka1 = a
        this.angka2 = b
    }

    tambah(){
        return this.angka1 + this.angka2
    }

    kali(){
        return this.angka1 * this.angka2
    }

    kurang(){
        /* Operasi Pengurangan */
        return this.angka1 - this.angka2
    }

    bagi(){
        return this.angka1 / this.angka2
    }
}

// let operasi = new Operator(3000,4)


// console.log(`hasil dari tambah\t = ${operasi.tambah()}`);
// console.log(`hasil dari kurang\t = ${operasi.kurang()}`);
// console.log(`hasil dari kali\t\t = ${operasi.kali()}`);
// console.log(`hasil dari bagi\t     = ${operasi.bagi()}`);


export default Operator