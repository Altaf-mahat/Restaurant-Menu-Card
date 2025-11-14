// ======================== MENU DATA ============================
const menu = [
  { id: 1, title: "Tomato Soup", category: "starters", price: 120, description: "Classic tomato soup with herbs", img:"tamatto.jpg" },
  { id: 2, title: "Paneer Tikka", category: "starters", price: 180, description: "Grilled paneer cubes marinated in spices", img: "panner tikka.jpg" },
  { id: 3, title: "Veg Manchow Soup", category: "starters", price: 130, description: "Spicy Chinese-style soup", img: "Veg Manchow Soup.webp" },
  { id: 4, title: "Spring Rolls", category: "starters", price: 150, description: "Crispy fried vegetable rolls", img: "Spring Rolls.jpg" },
  { id: 5, title: "Hakka Noodles", category: "mains", price: 190, description: "Stir-fried noodles with veggies", img: "Hakka Noodle.webp" },
  { id: 6, title: "Butter Paneer", category: "mains", price: 220, description: "Paneer cooked in creamy tomato gravy", img: "Butter Paneer.jpg" },
  { id: 7, title: "Dal Tadka", category: "mains", price: 160, description: "Lentils tempered with spices", img: "Dal Tadka.jpg" },
  { id: 8, title: "Jeera Rice", category: "mains", price: 130, description: "Basmati rice flavored with cumin", img: "Jeera Rice.jpg" },
  { id: 9, title: "Roti (2 pcs)", category: "mains", price: 40, description: "Soft wheat bread", img: "Roti (2 pcs).jpg" },
  { id: 10, title: "Veg Pulao", category: "mains", price: 160, description: "Rice with mixed vegetables", img: "Veg Pulao.jpg" },
  { id: 11, title: "Chocolate Lava Cake", category: "desserts", price: 180, description: "Hot chocolate cake with molten center", img: "Chocolate Lava Cake.jpg" },
  { id: 12, title: "Ice Cream Sundae", category: "desserts", price: 130, description: "Ice cream with chocolate syrup", img: "Ice Cream Sundae.jpg" },
  { id: 13, title: "Gulab Jamun", category: "desserts", price: 100, description: "Sweet syrupy dumplings", img: "Gulab Jamun.jpg" },
  { id: 14, title: "Tiramisu", category: "desserts", price: 210, description: "Coffee-flavored Italian dessert", img: "Tiramisu.jpg" },
  { id: 15, title: "Brownie with Ice Cream", category: "desserts", price: 190, description: "Fudgy brownie served warm", img: "Brownie with Ice Cream.webp" },
  { id: 16, title: "Cold Coffee", category: "beverages", price: 110, description: "Chilled coffee with ice cream", img: "Cold Coffee.jpg" },
  { id: 17, title: "Masala Chai", category: "beverages", price: 60, description: "Spiced Indian tea", img: "Masala Chai.jpg" },
  { id: 18, title: "Mango Shake", category: "beverages", price: 120, description: "Mango milkshake with ice cream", img: "Mango lassi.jpg" },
  { id: 19, title: "Lemon Soda", category: "beverages", price: 70, description: "Refreshing lemon soda", img: "Lemon Soda.webp" },
  { id: 20, title: "Iced Tea", category: "beverages", price: 80, description: "Cold brewed tea with lemon", img: "ice tea.webp" },
  { id: 21, title: "Veg Burger", category: "mains", price: 150, description: "Crispy patty burger with fries", img: "Veg Burger.jpg" },
  { id: 22, title: "Cheese Pizza", category: "mains", price: 200, description: "Cheesy pizza with tomato base", img: "Cheese Pizza.jpg" },
  { id: 23, title: "French Fries", category: "starters", price: 100, description: "Crispy golden fries", img: "French Fries.webp" },
  { id: 24, title: "Chicken Biryani", category: "mains", price: 250, description: "Aromatic rice with chicken", img: "Chicken Biryani.jpg" },
  { id: 25, title: "Fish Curry", category: "mains", price: 280, description: "Spicy fish curry with coconut", img: "Fish Curry.webp" },
  { id: 26, title: "Paneer Butter Masala", category: "mains", price: 230, description: "Paneer in rich creamy sauce", img: "Paneer Butter Masala.jpg" },
  { id: 27, title: "Samosa", category: "starters", price: 50, description: "Crispy fried samosa", img: "Samosa.jpg" },
  { id: 28, title: "Idli Sambar", category: "mains", price: 100, description: "South Indian delicacy", img: "Idli Sambar.jpg" },
  { id: 29, title: "Tea", category: "beverages", price: 30, description: "Hot Indian chai", img: "Tea.webp" },
  { id: 30, title: "Coke", category: "beverages", price: 50, description: "Chilled soft drink", img: "Coke.webp" },
];

// ======================== SCRIPT LOGIC ============================
document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-items");
  const menuSection = document.getElementById("menu-section");
  const ordersSection = document.getElementById("orders-section");
  const ordersList = document.getElementById("orders-list");
  const orderCount = document.getElementById("order-count");

  // ========== Render Menu ==========
  function renderMenuItem(item) {
    return `
      <div class="menu-item col-12 col-md-6 col-lg-4 mb-4">
        <div class="card">
          <img src="${item.img}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5>${item.title}</h5>
            <h6 class="text-muted">₹${item.price}</h6>
            <p>${item.description}</p>
            <label>Select Table:</label>
            <select class="form-select mb-2 table-select" data-id="${item.id}">
              <option value="">--Choose Table--</option>
              ${[...Array(8).keys()].map(i => `<option value="${i+1}">Table ${i+1}</option>`).join("")}
            </select>
            <button class="order-btn btn btn-danger w-100 mt-2" data-id="${item.id}">Order Now</button>
          </div>
        </div>
      </div>`;
  }

  function filterMenu(category) {
    const filtered = category === "all" ? menu : menu.filter(i => i.category === category);
    menuContainer.innerHTML = filtered.map(renderMenuItem).join("");
  }

  filterMenu("all");

  document.querySelectorAll(".nav-link[data-filter]").forEach(btn => {
    btn.addEventListener("click", function() {
      filterMenu(this.getAttribute("data-filter"));
    });
  });

  document.getElementById("search-input").addEventListener("input", function() {
    const term = this.value.toLowerCase();
    const filtered = menu.filter(item => item.title.toLowerCase().includes(term));
    menuContainer.innerHTML = filtered.map(renderMenuItem).join("");
  });

  // ========== Add Orders ==========
  document.body.addEventListener("click", e => {
    if (e.target.classList.contains("order-btn")) {
      const id = parseInt(e.target.dataset.id);
      const item = menu.find(m => m.id === id);
      const select = e.target.parentElement.querySelector(".table-select");
      const tableNo = select.value;
      if (!tableNo) return alert("⚠️ Please select a table!");

      const allOrders = JSON.parse(localStorage.getItem("orders")) || {};
      if (!allOrders[tableNo]) allOrders[tableNo] = [];
      allOrders[tableNo].push(item);
      localStorage.setItem("orders", JSON.stringify(allOrders));

      const totalCount = Object.values(allOrders).flat().length;
      orderCount.textContent = totalCount;
      alert(`${item.title} added to Table ${tableNo} ✅`);
    }
  });

  // ========== View Orders ==========
  document.getElementById("view-orders-btn").addEventListener("click", () => {
    menuSection.style.display = "none";
    ordersSection.style.display = "block";
    loadOrders();
  });

  function loadOrders() {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || {};
    ordersList.innerHTML = "";
    for (let i = 1; i <= 8; i++) {
      const tableOrders = allOrders[i] || [];
      if (tableOrders.length > 0) {
        const total = tableOrders.reduce((sum, o) => sum + o.price, 0);
        const div = document.createElement("div");
        div.className = "col-12 mb-3";
        div.innerHTML = `
          <h5 class="text-danger">Table ${i}</h5>
          <ul>${tableOrders.map(o => `<li>${o.title} - ₹${o.price}</li>`).join("")}</ul>
          <h6 class="fw-bold text-end">Total: ₹${total}</h6>
          <button class="btn btn-sm btn-danger clear-btn" data-table="${i}">🧹 Clear Order</button>
          <button class="btn btn-sm btn-success pay-btn ms-2" data-table="${i}">💳 Pay Bill</button>
          <hr>`;
        ordersList.appendChild(div);
      }
    }
  }

  // ========== Clear / Pay ==========
  document.body.addEventListener("click", e => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || {};

    if (e.target.classList.contains("clear-btn")) {
      const table = e.target.dataset.table;
      if (confirm(`Clear all orders for Table ${table}?`)) {
        delete allOrders[table];
        localStorage.setItem("orders", JSON.stringify(allOrders));
        loadOrders();
        const totalCount = Object.values(allOrders).flat().length;
        orderCount.textContent = totalCount;
      }
    }

    if (e.target.classList.contains("pay-btn")) {
      const table = e.target.dataset.table;
      if (allOrders[table]) {
        const total = allOrders[table].reduce((sum, i) => sum + i.price, 0);
        alert(`💰 Table ${table} Bill Paid! Total ₹${total}`);
        delete allOrders[table];
        localStorage.setItem("orders", JSON.stringify(allOrders));
        loadOrders();
        const totalCount = Object.values(allOrders).flat().length;
        orderCount.textContent = totalCount;
      }
    }
  });

  // ========== Back Button ==========
  document.getElementById("back-to-menu").addEventListener("click", () => {
    ordersSection.style.display = "none";
    menuSection.style.display = "block";
  });
});
