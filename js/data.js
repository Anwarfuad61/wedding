function kirimData() {
  // Mengambil nilai dari input
  var nama = document.getElementById("form-nama").value;
  var kehadiran = document.getElementById("form-kehadiran").value;
  var pesan = document.getElementById("form-pesan").value;

  // Mengirim data ke Google Sheets melalui URL
  var url =
    "https://script.google.com/macros/s/AKfycbyUJXAEZYWmA5uXGWoLT2AGR0udBpYFWOe52HBO8xPsjaPDBmvpx79l-ibZ1uK7k_4p0w/exec";
  var params =
    "nama=" +
    encodeURIComponent(nama) +
    "&kehadiran=" +
    encodeURIComponent(kehadiran) +
    "&pesan=" +
    encodeURIComponent(pesan);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "?" + params, true);
  xhr.send();

  // Mengosongkan input setelah pengiriman
  document.getElementById("form-nama").value = "";
  document.getElementById("form-kehadiran").value = "0";
  document.getElementById("form-pesan").value = "";

  // Menampilkan hasil kehadiran
  var hasilKehadiran = kehadiran == "0" ? "Hadir" : "Berhalangan";
  alert("Data telah berhasil dikirim! ");
}
