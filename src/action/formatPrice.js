export function formatHarga(angka) {
    if (typeof angka !== "number") {
      return "Input bukan angka";
    }

    // Mengubah angka menjadi string dan memisahkan bagian desimal
    const parts = angka.toFixed(3).split(".");
    const nilai = parseInt(parts[0], 10);

    // Mengubah angka menjadi format ribuan dan menambahkan bagian desimal kembali
    const formattedNilai = nilai
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const hasil = parts[1] ? formattedNilai + "." + parts[1] : formattedNilai;

    // Menambahkan satuan ribuan, jutaan, miliar, dst.
    if (nilai >= 1000000000) {
      return (nilai / 1000000000).toFixed(3) + " Miliar";
    } else if (nilai >= 1000000) {
      return (nilai / 1000000).toFixed(3) + " Juta";
    } else {
      return hasil;
    }
  }