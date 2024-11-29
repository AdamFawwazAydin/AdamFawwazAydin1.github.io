// Menangani interaksi tombol "Tambahkan ke Keranjang"
let cart = [];
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const closeCartButton = document.getElementById('close-cart');

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    cartItems.innerHTML = ''; // Kosongkan daftar keranjang
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');

        // Menambahkan gambar produk
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.product;
        itemImage.classList.add('cart-item-image');

        // Menambahkan informasi produk dan harga
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('cart-item-details');
        itemDetails.innerHTML = `<strong>${item.product}</strong><br>Rp ${item.price}`;

        listItem.appendChild(itemImage);
        listItem.appendChild(itemDetails);

        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalPriceElement.textContent = total;
    cartButton.textContent = `Keranjang (${cart.length})`;
}

// Fungsi untuk menambah produk ke keranjang
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseInt(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');

        cart.push({ product, price, image });
        updateCart();
        alert(`${product} telah ditambahkan ke keranjang!`);
    });
});

// Menampilkan modal keranjang
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Menutup modal keranjang
closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});
document.getElementById('cart-button').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'flex'; // Show the modal
});

document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none'; // Hide the modal
});
// Fungsi untuk menghapus semua item di keranjang
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = []; // Kosongkan array keranjang
    updateCart(); // Perbarui tampilan keranjang
    alert('Keranjang telah dikosongkan!'); // Tampilkan pesan
});
