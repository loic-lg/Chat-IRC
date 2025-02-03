![image](https://github.com/user-attachments/assets/7bf00f42-0c93-4061-9496-0df470b4d3a0)




📌 README.md

# 🚀 Mon Projet MERN + Socket.io + TailwindCSS + Daisy UI

Bienvenue dans ce projet full-stack utilisant **MERN (MongoDB, Express, React, Node.js)** avec **Socket.io** pour la communication en temps réel, ainsi que **TailwindCSS** et **Daisy UI** pour le design.

---

## 📦 Installation

### 1️⃣ Prérequis
- [Node.js](https://nodejs.org/) (v16+ recommandé)
- [MongoDB](https://www.mongodb.com/) (ou un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

### 2️⃣ Cloner le projet

----------------------------------------------------------

3️⃣ Installation des dépendances
📌 Backend (Express + MongoDB)

    cd backend
    npm install express mongoose cors dotenv socket.io jsonwebtoken bcryptjs
    npm install --save-dev nodemon

--


📌 Frontend (React + TailwindCSS + Daisy UI)

    cd frontend
    npm install axios react-router-dom tailwindcss postcss autoprefixer daisyui socket.io-client


--


📌 Explication des packages :

--

   axios → Requêtes HTTP vers l’API
  
   react-router-dom → Gestion des routes
  
   tailwindcss → Framework CSS
  
   postcss et autoprefixer → Préprocesseurs pour TailwindCSS
  
   daisyui → Composants UI pour TailwindCSS
  
   socket.io-client → Communication en temps réel avec le serveur

--
  
⚙️ Configuration des Variables d’Environnement

 Crée un fichier .env dans le dossier backend avec ces variables :

 (Cloudinary permet d'avoir une bibliotèque d'image en ligne, non obligatoire pour lancer le projet)

    MONGODB_URI=...
    PORT=5001
    JWT_SECRET=...
    
    CLOUDINARY_CLOUD_NAME=...
    CLOUDINARY_API_KEY=...
    CLOUDINARY_API_SECRET=...
    
    NODE_ENV=development
---------------------------------------------------
---🏃 Démarrer le projet ---

🚀 Démarrer le Backend (API Node.js)

    cd backend
    npm run dev

  L'API tournera sur http://localhost:5001

🚀 Démarrer le Frontend (React)

    cd frontend
    npm run dev

L'application s'ouvrira automatiquement sur http://localhost:3000


--------------------------------------------------
🛠️ Technologies Utilisées

 -Technologie	Description
 
-MongoDB	Base de données NoSQL
 
-Express.js	Backend en Node.js
 
-React.js	Frontend moderne
 
 -Node.js	Serveur backend
 
 -Socket.io	Communication en temps réel
 
 -TailwindCSS	Framework CSS
 
 -Daisy UI	Composants UI pour TailwindCSS
 
 -Cloudinary	Stockage d'images
