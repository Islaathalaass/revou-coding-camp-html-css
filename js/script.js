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
// Load dari Local Storage kalau ada, kalau belum ada mulai dari array kosong
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// --- Chart.js instance (biar bisa di-destroy & re-render tiap ada perubahan) ---
let categoryChart = null;

// ============================================
// FUNGSI TAMBAH TRANSAKSI
// ============================================
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = itemNameInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (name === '' || isNaN(amount) || category === '') {
    alert('Mohon isi semua field ya!');
    return;
  }

  const newTransaction = {
    id: Date.now(),
    name: name,
    amount: amount,
    category: category
  };

  transactions.push(newTransaction);
  saveToLocalStorage();
  renderTransactions();
  updateTotalBalance();
  renderChart();

  form.reset();
});

// ============================================
// FUNGSI RENDER LIST TRANSAKSI
// ============================================
function renderTransactions() {
  transactionList.innerHTML = '';

  transactions.forEach(function (transaction) {
    const li = document.createElement('li');

    li.innerHTML = `
      <div class="info">
        <div class="name">${transaction.name}</div>
        <div class="amount">$${transaction.amount.toFixed(2)}</div>
        <span class="category">${transaction.category}</span>
      </div>
      <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', function () {
      deleteTransaction(transaction.id);
    });

    transactionList.appendChild(li);
  });
}

// ============================================
// FUNGSI HAPUS TRANSAKSI
// ============================================
function deleteTransaction(id) {
  transactions = transactions.filter(function (transaction) {
    return transaction.id !== id;
  });

  saveToLocalStorage();
  renderTransactions();
  updateTotalBalance();
  renderChart();
}

// ============================================
// FUNGSI HITUNG TOTAL BALANCE
// ============================================
function updateTotalBalance() {
  const total = transactions.reduce(function (sum, transaction) {
    return sum + transaction.amount;
  }, 0);

  totalBalanceEl.textContent = `$${total.toFixed(2)}`;
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
// FUNGSI SIMPAN KE LOCAL STORAGE
// ============================================
function saveToLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// ============================================
// Panggil render pertama kali saat halaman dibuka
// ============================================
renderTransactions();
updateTotalBalance();
renderChart();
