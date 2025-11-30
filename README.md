# Social Media Marketplace App ( flipearn. )

A secure marketplace platform where users can list, buy, and sell social-media accounts from major platforms like Instagram, X (Twitter), Telegram, and YouTube.

---

## 🚀 Features

- User account creation and authentication  
- Seller dashboard: list social-media accounts for sale (Instagram, X, Telegram, YouTube)  
- Buyer workflow: browse listings, view details, initiate purchase  
- Secure in-app messaging between seller & buyer  
- Listing management: edit, deactivate, mark sold  
- Basic admin/verification infrastructure for trust and safety  
- Clean, modern UI & responsive design  

---

## 🧰 Tech Stack

- Front-end: ReactJS / NextJS (or your chosen framework)  
- Back-end: Node.js + Express (or your chosen server)  
- Database: MongoDB / PostgreSQL (pick one)  
- Authentication: JWT or OAuth  
- Hosting: Heroku / Vercel / AWS (whatever you prefer)  
- Payment & escrow (future version): Stripe / PayPal integration  

---

## 🏗️ Project Structure

```
Social-Media-Marketplace-App/
├── README.md
├── client/
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── App.jsx
│   │   ├── app/
│   │   │   ├── features/
│   │   │   │   └── listingSlice.js
│   │   │   └── store.js
│   │   ├── assets/
│   │   │   ├── assets.jsx
│   │   │   ├── favicon.ico
│   │   │   ├── image_1.jpg
│   │   │   ├── image_2.jpg
│   │   │   ├── image_3.jpg
│   │   │   ├── image_4.jpg
│   │   │   ├── logo.svg
│   │   │   └── user_profile.png
│   │   ├── components/
│   │   │   ├── CTA.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LatestListings.jsx
│   │   │   ├── ListingCard.jsx
│   │   │   ├── Navbar.jsx
|   |   |   ├── Plans.jsx
│   │   │   └── Title.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages/
│   │       ├── Home.jsx
│   │       ├── ListingDetails.jsx
│   │       ├── Loading.jsx
│   │       ├── ManageListing.jsx
│   │       ├── Marketplace.jsx
│   │       ├── Messages.jsx
│   │       ├── MyListings.jsx
│   │       └── MyOrders.jsx
│   └── vite.config.js
└── package-lock.json
'''

## 📦 Installation & Setup

Since this is currently a front-end-only project:

1. Download or clone the repository

     git clone https://github.com/adithyanhp/Social-Media-Marketplace-App.git

2. Open the project folder

3. Open index.html in your browser
   (No server required currently)
