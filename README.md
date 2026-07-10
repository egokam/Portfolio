<div align="center">

# ✨ Premium Personal Portfolio

### A sleek, modern, and luxurious developer portfolio built with Next.js, featuring immersive animations, premium UI/UX, and exceptional performance.

<p align="center">
  <img src="https://via.placeholder.com/1200x600/111827/10b981?text=Portfolio+Preview+Image" alt="Portfolio Preview" width="100%">
</p>

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-0055FF?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

</div>

---

# ✨ Overview

This portfolio was designed to provide a **premium digital experience**, combining smooth interactions, modern design principles, and high performance.

It showcases projects, skills, and professional experience through elegant animations, responsive layouts, and carefully crafted UI components.

---

# 🚀 Features

### 🎬 Immersive Animations
- Smooth page transitions
- Physics-based animations
- Scroll-triggered effects
- Drag interactions powered by Framer Motion

### 🗺️ Interactive Radar Map
- Fully draggable dark-themed map
- Built with Pigeon Maps
- Live coordinate clamping
- Custom radar-style interface

### 🎨 Premium UI / UX
- Luxury-inspired design
- Glassmorphism & blur effects
- Beautiful gradients
- Carefully crafted spacing and typography

### 📱 Fully Responsive
- Mobile-first approach
- Tablet optimized
- Desktop optimized
- Pixel-perfect layouts

### ⚡ Optimized Performance
- Next.js App Router
- Image optimization
- Fast loading pages
- SEO friendly

---

# 🛠 Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React Framework |
| **React 19** | UI Library |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Pigeon Maps** | Interactive Maps |
| **SVGR** | SVG Components |

---

## Infrastructure

| Technology | Purpose |
|------------|---------|
| **Ubuntu VPS (ARM)** | Hosting |
| **PM2** | Process Manager |
| **Caddy** | Reverse Proxy & HTTPS |

---

# 📂 Project Structure

```text
Portfolio/
│
├── app/
├── components/
├── public/
│   ├── images/
│   ├── icons/
│   └── assets/
├── styles/
├── lib/
├── hooks/
├── types/
├── package.json
└── README.md
```

---

# 💻 Local Development

## 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Portfolio.git
cd Portfolio
```

---

## 2️⃣ Install dependencies

```bash
npm install
```

---

## 3️⃣ Start the development server

```bash
npm run dev
```

---

## 4️⃣ Open your browser

Visit:

```text
http://localhost:3000
```

---

# 🌍 Production Deployment

This project is optimized for deployment on an **Ubuntu VPS** using **PM2** and **Caddy**.

---

## Build the project

```bash
npm run build
```

---

## Start with PM2

```bash
PORT=3002 pm2 start npm --name "portfolio" -- start
pm2 save
```

---

## Configure Caddy

Edit:

```text
/etc/caddy/Caddyfile
```

Add:

```caddy
portfolio.yourdomain.com {
    reverse_proxy localhost:3002
}
```

---

## Reload Caddy

```bash
sudo systemctl reload caddy
```

---

# 📸 Preview

> Replace the placeholder image below with an actual screenshot of your portfolio.

<p align="center">
<img src="https://via.placeholder.com/1400x700/0f172a/10b981?text=Portfolio+Screenshot" width="100%">
</p>

---

# 📈 Performance

✅ Optimized for Lighthouse

- ⚡ Performance
- ♿ Accessibility
- 🔍 SEO
- ✅ Best Practices

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push the branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

# 📬 Contact

**Email**

```text
egokam.business@gmail.com
```

**Portfolio**

```text
https://portfolio.egokam.site
```

---

<div align="center">

## ⭐ If you like this project, consider giving it a star!

Made with ❤️ using **Next.js**, **Tailwind CSS**, and lots of ☕.

</div>