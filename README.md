# Rainbow Sprouts Daycare Website

Official website for **Rainbow Sprouts Daycare & Playschool**, Sector 10, Gurgaon.

Built as a high-quality, mobile-first brochure website with strong conversion focus
(Call / WhatsApp / Book a Visit).

---

## 🧰 Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion**
- **Vercel** (Hosting & CI/CD)

---

## 🚀 Live Website
https://rainbowsprouts.in

---

## 📂 Project Structure (High Level)


---

## ▶️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/dsharma1984/rainbow-sprouts-daycare.git
cd rainbow-sprouts-daycare
src/
├─ app/ # App Router pages
├─ components/ # Reusable UI & layout components
├─ config/ # Centralized config (images, site data)
├─ styles/ # Global styles
public/
├─ images/ # Logos & static assets


---

## ▶️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/dsharma1984/rainbow-sprouts-daycare.git
cd rainbow-sprouts-daycare

2. Install dependencies
npm install

3. Start development server
npm run dev


Open http://localhost:3000
 in your browser.

🌐 Deployment

Automatically deployed via Vercel

Every push to the main branch triggers a new deployment

Production domain managed via Vercel + Namecheap DNS

📞 Contact / Ownership

Client: Kamini Rajotia
Location: Sector 10, Gurgaon
Phone: +91 81990 62496


✅ This is **clean, client-safe, and portfolio-ready**.

---

## B) Add / Verify `.gitignore` (Next.js default)

### Where
- Root of the repo
- File name: **.gitignore**

### What it should contain (copy–paste)

```gitignore
# dependencies
/node_modules

# Next.js
/.next
/out

# production
/build

# env files
.env
.env.local
.env.development
.env.production
.env*.local

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Vercel
.vercel
