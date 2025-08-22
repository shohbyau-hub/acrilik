const products = {
  keychain: {
    title: "Keychain NCT Dream",
    desc: "Bahan: Acrylic tebal dengan finishing glossy<br>Ukuran: 5 cm<br>Desain: Karakter chibi NCT Dream<br>Kelebihan: Ringan, awet, cocok untuk gantungan tas atau kunci",
    price: "Harga: Rp25.000/pcs",
    img: "keychain.jpg"
  },
  idcard: {
    title: "ID Card NCT Dream",
    desc: "Bahan: PVC premium dengan laminasi doff<br>Ukuran: Standar ID Card (8,5 x 5,4 cm)<br>Desain: Member NCT Dream dengan gaya eksklusif<br>Kelebihan: Tahan lama, warna tajam, bisa digunakan sebagai akses kartu atau koleksi",
    price: "Harga: Rp30.000/pcs",
    img: "idcard.jpg"
  },
  cardholder: {
    title: "Card Holder NCT Dream",
    desc: "Bahan: Kulit sintetis berkualitas tinggi<br>Ukuran: 10 x 7 cm<br>Desain: Logo & karakter NCT Dream emboss elegan<br>Kelebihan: Muat banyak kartu, praktis dibawa, cocok untuk fans dan kolektor",
    price: "Harga: Rp40.000/pcs",
    img: "cardholder.jpg"
  },
  keychain_enhypen: {
    title: "Keychain Enhypen",
    desc: "Bahan: Acrylic premium<br>Ukuran: 5 cm<br>Desain: Karakter Enhypen dengan detail tajam<br>Kelebihan: Ringan, kuat, cocok untuk gantungan tas atau koleksi",
    price: "Harga: Rp27.000/pcs",
    img: "enhypen_keychain.jpg"
  }
};

let selectedProduct = "";

// Tampilkan produk
function showProduct(product) {
  selectedProduct = product;
  document.getElementById("home").style.display = "none";
  document.getElementById("productPage").style.display = "block";

  document.getElementById("productTitle").innerText = products[product].title;
  document.getElementById("productDesc").innerHTML = products[product].desc;
  document.getElementById("productPrice").innerText = products[product].price;
  document.getElementById("formProduct").innerText = products[product].title;
  document.getElementById("productImg").src = products[product].img;
}

// Balik ke beranda
function goHome() {
  document.getElementById("productPage").style.display = "none";
  document.getElementById("home").style.display = "block";
}

// Form kirim ke WhatsApp
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let jumlah = document.getElementById("jumlah").value;
  let alamat = document.getElementById("alamat").value;

  let nomorWA = "6289518118538"; // Nomor WhatsApp kamu
  let pesan = `*Halo Admin*, saya ingin pre-order *${products[selectedProduct].title}*:%0A
- Nama: ${nama}%0A
- Email: ${email}%0A
- Jumlah: ${jumlah}%0A
- Alamat: ${alamat}`;

  let url = `https://wa.me/${nomorWA}?text=${pesan}`;
  window.open(url, "_blank");

  document.getElementById("orderForm").reset();
});

// Default tampil beranda
window.onload = function() {
  goHome();
};
