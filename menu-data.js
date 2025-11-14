// All 30 food items
const menuData = [
  // Starters
  { id: 1, title: "Tomato Soup", category: "starters", price: 120, description: "Classic tomato soup with herbs", img: "https://images.unsplash.com/photo-1565958011702-44e2112dbe0f?w=400" },
  { id: 2, title: "Veg Manchow Soup", category: "starters", price: 130, description: "Spicy vegetable soup", img: "https://images.unsplash.com/photo-1572552633873-19629e7a2c39?w=400" },
  { id: 3, title: "Paneer Tikka", category: "starters", price: 180, description: "Marinated paneer grilled to perfection", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400" },
  { id: 4, title: "Spring Rolls", category: "starters", price: 150, description: "Crispy veg spring rolls", img: "https://images.unsplash.com/photo-1625944230942-77b2b3a1b8eb?w=400" },
  { id: 5, title: "French Fries", category: "starters", price: 110, description: "Crispy potato fries", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400" },
  { id: 6, title: "Masala Papad", category: "starters", price: 70, description: "Papad topped with onion, tomato & spices", img: "https://images.unsplash.com/photo-1623401925801-9d9e4d8c3e5b?w=400" },

  // Main Course
  { id: 7, title: "Butter Paneer", category: "mains", price: 220, description: "Paneer in creamy tomato gravy", img: "https://images.unsplash.com/photo-1601050690597-3fede2b63b05?w=400" },
  { id: 8, title: "Dal Tadka", category: "mains", price: 160, description: "Lentils tempered with ghee and spices", img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400" },
  { id: 9, title: "Jeera Rice", category: "mains", price: 130, description: "Basmati rice with cumin", img: "https://images.unsplash.com/photo-1603899124396-1a5e16b2c983?w=400" },
  { id: 10, title: "Paneer Butter Masala", category: "mains", price: 230, description: "Paneer in butter-rich curry", img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1e1b2?w=400" },
  { id: 11, title: "Veg Biryani", category: "mains", price: 210, description: "Fragrant basmati rice cooked with vegetables", img: "https://images.unsplash.com/photo-1603899124396-1a5e16b2c983?w=400" },
  { id: 12, title: "Roti (2 pcs)", category: "mains", price: 40, description: "Whole wheat flatbread", img: "https://images.unsplash.com/photo-1627308595197-8d3b788b9b01?w=400" },
  { id: 13, title: "Naan (2 pcs)", category: "mains", price: 60, description: "Soft leavened flatbread", img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1e1b2?w=400" },
  { id: 14, title: "Chole Bhature", category: "mains", price: 200, description: "Spicy chickpeas with fluffy bhature", img: "https://images.unsplash.com/photo-1600687403731-2be7c42b2f1b?w=400" },
  { id: 15, title: "Pav Bhaji", category: "mains", price: 170, description: "Mashed vegetables with buttered buns", img: "https://images.unsplash.com/photo-1613141419418-b91d53fede1f?w=400" },

  // Desserts
  { id: 16, title: "Gulab Jamun", category: "desserts", price: 90, description: "Sweet syrupy dumplings", img: "https://images.unsplash.com/photo-1628188177133-2a3c2e4d9b44?w=400" },
  { id: 17, title: "Rasgulla", category: "desserts", price: 80, description: "Soft cottage cheese balls in syrup", img: "https://images.unsplash.com/photo-1628188177133-2a3c2e4d9b44?w=400" },
  { id: 18, title: "Ice Cream", category: "desserts", price: 100, description: "Choice of vanilla, chocolate or strawberry", img: "https://images.unsplash.com/photo-1570197788417-0e82375c9372?w=400" },
  { id: 19, title: "Chocolate Cake", category: "desserts", price: 150, description: "Rich chocolate layered cake", img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400" },
  { id: 20, title: "Brownie with Ice Cream", category: "desserts", price: 160, description: "Warm brownie topped with vanilla scoop", img: "https://images.unsplash.com/photo-1586985287749-38f06f4ca08a?w=400" },

  // Beverages
  { id: 21, title: "Cold Coffee", category: "beverages", price: 130, description: "Chilled coffee with whipped cream", img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400" },
  { id: 22, title: "Lassi", category: "beverages", price: 100, description: "Sweet yogurt-based drink", img: "https://images.unsplash.com/photo-1623220573965-08b8868b648a?w=400" },
  { id: 23, title: "Fresh Lime Soda", category: "beverages", price: 90, description: "Refreshing lemon soda", img: "https://images.unsplash.com/photo-1627308595197-8d3b788b9b01?w=400" },
  { id: 24, title: "Mojito", category: "beverages", price: 140, description: "Mint lime soda", img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1e1b2?w=400" },
  { id: 25, title: "Mango Shake", category: "beverages", price: 130, description: "Thick mango milkshake", img: "https://images.unsplash.com/photo-1623401925801-9d9e4d8c3e5b?w=400" },

  // Extra
  { id: 26, title: "Veg Burger", category: "mains", price: 150, description: "Burger with crispy veggie patty", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400" },
  { id: 27, title: "Grilled Sandwich", category: "starters", price: 130, description: "Cheese grilled sandwich", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400" },
  { id: 28, title: "Pasta Alfredo", category: "mains", price: 220, description: "Creamy white sauce pasta", img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1e1b2?w=400" },
  { id: 29, title: "Tandoori Chicken", category: "mains", price: 250, description: "Spicy roasted chicken", img: "https://images.unsplash.com/photo-1601050690597-3fede2b63b05?w=400" },
  { id: 30, title: "Masala Dosa", category: "mains", price: 180, description: "Crispy dosa stuffed with spiced potatoes", img: "https://images.unsplash.com/photo-1627308595197-8d3b788b9b01?w=400" }
];
