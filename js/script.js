// ============================================
// EXPENSE & BUDGET VISUALIZER - script.js
// ============================================

// --- Ambil elemen-elemen dari HTML ---
const form = document.getElementById('transaction-form');
const itemNameInput = document.getElementById('item-name');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const transactionList = document.getElementById('transaction-list');
const totalBalanceEl = document.getElementById('total-balance');
const chartCanvas = document.getElementById('category-chart');

// --- Data transaksi ---
// TODO (Rabu): load data dari Local Storage kalau ada, kalau belum ada mulai dari array kosong
// Contoh: let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let transactions = [];

// --- Chart.js instance (biar bisa di-destroy & re-render tiap ada perubahan) ---
let categoryChart = null;

// ============================================
// TODO (Rabu): FUNGSI TAMBAH TRANSAKSI
// ============================================
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // 1. Ambil value dari input (itemNameInput.value, amountInput.value, categoryInput.value)
  // 2. Validasi: kalau ada yang kosong, kasih alert dan return (stop function)
  // 3. Bikin object transaksi baru, misal:
  //    const newTransaction = { id: Date.now(), name: ..., amount: ..., category: ... };
  // 4. Push ke array `transactions`
  // 5. Panggil saveToLocalStorage()
  // 6. Panggil renderTransactions()
  // 7. Panggil updateTotalBalance()
  // 8. Panggil renderChart()
  // 9. Reset form (form.reset())

});

// ============================================
// TODO (Rabu): FUNGSI RENDER LIST TRANSAKSI
// ============================================
function renderTransactions() {
  // 1. Kosongin dulu transactionList.innerHTML = ''
  // 2. Loop tiap item di array `transactions`
  // 3. Bikin elemen <li> berisi nama, amount, category, dan tombol Delete
  // 4. Tombol Delete kasih event listener yang manggil fungsi deleteTransaction(id)
  // 5. Append <li> ke transactionList
}

// ============================================
// TODO (Rabu): FUNGSI HAPUS TRANSAKSI
// ============================================
function deleteTransaction(id) {
  // 1. Filter array `transactions`, buang yang id-nya cocok
  // 2. Panggil saveToLocalStorage()
  // 3. Panggil renderTransactions()
  // 4. Panggil updateTotalBalance()
  // 5. Panggil renderChart()
}

// ============================================
// TODO (Rabu): FUNGSI HITUNG TOTAL BALANCE
// ============================================
function updateTotalBalance() {
  // 1. Jumlahin semua amount di array `transactions` (pakai .reduce())
  // 2. Tampilin ke totalBalanceEl.textContent, format ke 2 desimal contoh: `$${total.toFixed(2)}`
}

// ============================================
// TODO (Kamis): FUNGSI RENDER PIE CHART
// ============================================
function renderChart() {
  // 1. Hitung total amount per kategori (Food, Transport, Fun)
  // 2. Kalau categoryChart udah pernah dibikin, destroy dulu: categoryChart.destroy()
  // 3. Bikin chart baru pakai Chart.js:
  //    categoryChart = new Chart(chartCanvas, {
  //      type: 'pie',
  //      data: { labels: [...], datasets: [{ data: [...], backgroundColor: [...] }] }
  //    });
}

// ============================================
// TODO (Rabu): FUNGSI SIMPAN KE LOCAL STORAGE
// ============================================
function saveToLocalStorage() {
  // localStorage.setItem('transactions', JSON.stringify(transactions));
}

// ============================================
// Panggil render pertama kali saat halaman dibuka
// ============================================
renderTransactions();
updateTotalBalance();
renderChart();
