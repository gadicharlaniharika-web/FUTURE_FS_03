# ☕ MoonBean Café — Smart Online Café System

> A modern, fully responsive café website built with pure **HTML · CSS · JavaScript** — no frameworks, no dependencies.

![MoonBean Café](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80)

---

## 🌐 Live Demo

Open `index.html` directly in any browser — no server needed.

---

## 📌 Project Overview

**MoonBean Café** is a real-world local café website project (Task 3 — Local Business Website & Live Pitch).  
It solves the problem of offline-only ordering by providing a complete digital café experience.

| Before | After |
|--------|-------|
| Orders only offline | Customers order online |
| Long queues | Faster, queue-free service |
| No online menu | Full digital menu with photos |
| No combo deals | Smart auto-applied discounts |
| No table booking | Online reservation system |

---

## 🗂️ Project Structure

```
moonbean-cafe/
│
├── index.html        ← Main HTML structure (all sections)
├── style.css         ← All styling (variables, layout, animations, responsive)
├── script.js         ← All JavaScript (data, cart, builder, orders, reservation)
├── README.md         ← Project documentation (this file)
├── LICENSE           ← MIT License
└── .gitignore        ← Git ignore rules
```

---

## ✨ Features

### 🏠 Hero Section
- Full-screen landing with animated headline
- CTA buttons → Browse Menu & Build Coffee
- Live stats: 50+ items, 4.9★ rating, 2k+ customers

### 🏷️ Brand Visual Strip
- Café story + feature pills
- 2×2 photo mosaic with hover zoom
- Spinning Google rating badge

### ⭐ Featured Section
- Staff-picked items with "Hot Pick / Best Seller / New / Best Value" badges
- Click any card to add directly to cart

### 📋 Full Menu
- Tabbed: **Coffee · Snacks · Combos**
- Real food photos (Unsplash)
- VEG / COMBO tags
- Add to cart from each card

### ✨ Build Your Coffee
- Choose: Coffee Base · Milk Type · Sugar Level · Ice Level · Toppings
- Price auto-calculates in real time
- Add custom coffee to cart

### 💰 Smart Combo Deals
- Auto-applied discounts:
  - ₹800+ order → 10% off
  - ₹1000+ order → Free delivery
  - Buy 2 coffees → Free brownie
- Live banner in cart

### 📅 Table Reservation
- Name, phone, date, time slot, table size
- Form validation
- Confirmation modal + SMS note
- Embedded Google Map (Koramangala, Bangalore)

### 💬 Customer Reviews
- 6 real-style reviews with café atmosphere photos
- Star ratings + reviewer details

### 🧾 Order History
- Every placed order saved in session
- Shows order number, items, total, date, status

### 🛒 Cart Drawer
- Slide-in from right
- Quantity controls (+ / −) and remove
- Smart deal banners based on total
- Discount row auto-appears when eligible
- Place Order → confirmation modal

---

## 🛠️ Technologies Used

| Technology | Usage |
|------------|-------|
| **HTML5** | Page structure, semantic sections, forms |
| **CSS3** | Variables, Grid, Flexbox, animations, responsive design |
| **JavaScript (ES6+)** | DOM rendering, cart logic, builder, order history |
| **Google Fonts** | Playfair Display, DM Sans, Caveat |
| **Unsplash** | Free food & café photography |
| **Google Maps Embed** | Location map in reservation section |

> ⚡ Zero external JS libraries. No React, no jQuery, no Bootstrap.

---

## 🚀 Getting Started

### Option 1 — Open directly
```bash
# Just open in browser
open index.html
```

### Option 2 — Clone & run
```bash
git clone https://github.com/YOUR_USERNAME/moonbean-cafe.git
cd moonbean-cafe
open index.html
```

### Option 3 — Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

---

## 📁 File Details

### `index.html`
All page sections in order:
- `<nav>` — Fixed navbar with cart button
- `#hero` — Landing screen
- `#brand` — Brand story + mosaic
- `#featured` — Staff picks
- `#menu` — Tabbed full menu
- `#builder` — Coffee customiser
- `#deals` — Combo deals
- `#reservation` — Table booking + map
- `#reviews` — Customer reviews
- `#history` — Order history
- Cart drawer, modal, toast overlays

### `style.css`
Organised sections:
```
:root variables → Reset → Navbar → Hero →
Shared → Brand Strip → Featured → Menu →
Builder → Deals → Reservation → Reviews →
History → Footer → Cart → Toast → Modal →
Animations → @media (mobile)
```

### `script.js`
Organised sections:
```
Image URLs → Menu Data → Featured Data →
Reviews Data → Deals Data → Builder Options →
renderFeatured() → renderTabs() → renderMenuGrid() →
renderBuilder() → selectChip() → calcBuilderPrice() →
renderDeals() → renderReviews() →
addToCart() → removeFromCart() → changeQty() →
updateCartUI() → openCart() → closeCart() → placeOrder() →
renderHistory() → makeReservation() →
showToast() → toggleMobile() → Init
```

---

## 📸 Image Credits

All photos from [Unsplash](https://unsplash.com) — free to use under the Unsplash License.

---

## 🎯 Business Pitch

> *"I created a complete digital café ordering platform for MoonBean Café in Bangalore.  
> Before this project, the café had no online system — customers had to order physically and wait in long queues.  
> My solution provides online ordering, custom coffee building, combo deals, table reservations, and mobile-friendly access,  
> helping the café improve customer experience and increase sales."*

---

## 🔮 Future Enhancements

- [ ] QR code ordering
- [ ] Dark mode toggle
- [ ] Online payment gateway (Razorpay / UPI)
- [ ] WhatsApp order integration
- [ ] Customer login & profiles
- [ ] Loyalty points system
- [ ] Admin dashboard
- [ ] Backend with Node.js + MongoDB

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

Built as **Task 3 — Local Business Website & Live Pitch Project**  
Café: **MoonBean Café**, Koramangala, Bangalore  
Stack: Pure HTML + CSS + JavaScript

---

<p align="center">Made with ❤️ and ☕ for MoonBean Café, Bangalore</p>
