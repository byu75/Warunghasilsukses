function generateKey() {
    const keyLength = 5; // Panjang kunci (misalnya 16 karakter)
    let key = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"; // Karakter yang dapat digunakan
    
    for (let i = 0; i < keyLength; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length)); // Pilih karakter acak
    }
    
    // Tampilkan kunci pada elemen dengan id "keyDisplay"
    document.getElementById("keyDisplay").textContent = key;
}

// Panggil fungsi generateKey saat halaman dimuat
window.onload = generateKey;

// Fungsi untuk menyalin kunci ke clipboard
function copyKey() {
    const key = document.getElementById("keyDisplay").textContent;

    if (key) {
        // Menggunakan Clipboard API untuk menyalin teks
        navigator.clipboard.writeText(key)
            .then(() => {
                alert("Kunci berhasil disalin!");
            })
            .catch(err => {
                alert("Gagal menyalin kunci: " + err);
            });
    } else {
        alert("Tidak ada kunci yang tersedia untuk disalin.");
    }
}