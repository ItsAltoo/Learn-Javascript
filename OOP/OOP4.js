class Buku {

    constructor (judul,pengarang,tahun_terbit){
        this.judul = judul
        this.pengarang = pengarang
        this.terbit = tahun_terbit
    }

    deskripsi = () => {
        console.log(`judul : ${this.judul}\npengarang : ${this.pengarang}\nTahun terbit : ${this.terbit}`);
    }
}

class Mahasiswa extends Buku


let buku = new Buku('buku','saya',123)
buku.deskripsi()