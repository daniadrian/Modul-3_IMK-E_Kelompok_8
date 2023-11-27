const hapusdaftartunggu = document.querySelector(".hapusdaftartunggu");
const hapusreservasi = document.querySelector(".hapusreservasi");
const checkbox_daftar_tunggu = document.querySelectorAll(
  "#check_daftar_tunggu"
);
const checkbox_reservasi = document.querySelectorAll("#check_reservasi");

//hapus reservasi
const konfirmasi_reservasi = document.querySelector("#c2");
document.querySelector(".hapusreservasi").onclick = () => {
  hapusreservasi.classList.add("hilang");
  konfirmasi_reservasi.classList.add("muncul");
  hapusdaftartunggu.classList.add("hilang");
  checkbox_reservasi.forEach((element) => {
    element.classList.add("muncul-check");
  });
};
konfirmasi_reservasi.classList.add("hilang");

//hapus daftar tunggu
const konfirmasi_daftar_tunggu = document.querySelector("#c1");
document.querySelector(".hapusdaftartunggu").onclick = () => {
  hapusdaftartunggu.classList.add("hilang");
  konfirmasi_daftar_tunggu.classList.add("muncul");
  hapusreservasi.classList.add("hilang");
  checkbox_daftar_tunggu.forEach((element) => {
    element.classList.add("muncul-check");
  });
};
konfirmasi_daftar_tunggu.classList.add("hilang");

// hilang check_daftar_tunggu
checkbox_daftar_tunggu.forEach((element) => {
  element.classList.add("hilang");
});

// hilang check_reservasi
checkbox_reservasi.forEach((element) => {
  element.classList.add("hilang");
});
