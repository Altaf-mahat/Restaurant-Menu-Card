document.addEventListener("DOMContentLoaded", () => {
  const hotelOrders = document.getElementById("hotel-orders");
  const clearAllBtn = document.getElementById("clear-all");

  // Render all tables
  function loadAllTables() {
    hotelOrders.innerHTML = "";
    let hasOrders = false;

    for (let i = 1; i <= 8; i++) {
      const orders = JSON.parse(localStorage.getItem(`table_${i}_orders`)) || [];
      if (orders.length > 0) {
        hasOrders = true;
        const total = orders.reduce((sum, o) => sum + o.price, 0);
        const html = `
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-danger">Table ${i}</h5>
                <ul class="list-group mb-3">
                  ${orders
                    .map(
                      (o, idx) => `
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>${o.title}</span>
                      <div>
                        <strong>₹${o.price}</strong>
                        <button class="btn btn-sm btn-outline-danger delete-item" data-table="${i}" data-index="${idx}">🗑️</button>
                      </div>
                    </li>`
                    )
                    .join("")}
                </ul>
                <h6 class="text-right text-success mb-3">Total: ₹${total}</h6>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-success btn-sm pay-btn" data-table="${i}">💳 Pay Bill</button>
                  <button class="btn btn-outline-danger btn-sm clear-btn" data-table="${i}">🧹 Clear Table</button>
                </div>
              </div>
            </div>
          </div>`;
        hotelOrders.insertAdjacentHTML("beforeend", html);
      }
    }

    if (!hasOrders) {
      hotelOrders.innerHTML = `<p class="text-center text-muted">No active orders yet.</p>`;
    }
  }

  // Delete individual item
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-item")) {
      const table = e.target.dataset.table;
      const index = parseInt(e.target.dataset.index);
      const key = `table_${table}_orders`;
      const orders = JSON.parse(localStorage.getItem(key)) || [];

      orders.splice(index, 1);
      if (orders.length === 0) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(orders));
      }
      loadAllTables();
    }
  });

  // Pay bill - WORKING LOGIC
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("pay-btn")) {
      const table = e.target.dataset.table;
      const orders = JSON.parse(localStorage.getItem(`table_${table}_orders`)) || [];
      const total = orders.reduce((sum, o) => sum + o.price, 0);

      if (orders.length === 0) {
        alert("No orders for this table!");
        return;
      }
      
      // कन्फर्मेशन और डेटा क्लियर
      if (confirm(`Mark Table ${table} bill ₹${total} as paid and clear orders?`)) {
        localStorage.removeItem(`table_${table}_orders`);
        loadAllTables();
        alert(`✅ Payment received for Table ${table}`);
      }
    }
  });

  // Clear table
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("clear-btn")) {
      const table = e.target.dataset.table;
      if (confirm(`Clear all orders from Table ${table}?`)) {
        localStorage.removeItem(`table_${table}_orders`);
        loadAllTables();
      }
    }
  });

  // Clear all orders
  clearAllBtn.addEventListener("click", () => {
    if (confirm("Clear ALL tables' orders?")) {
      for (let i = 1; i <= 8; i++) {
        localStorage.removeItem(`table_${i}_orders`);
      }
      loadAllTables();
    }
  });

  // Initial load
  loadAllTables();
});