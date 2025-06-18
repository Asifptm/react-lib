# Library App – Full Stack (React + Node.js)

A modern full-stack library management system built with **React (Vite)** for the frontend and **Node.js (Express)** for the backend.

---

## 📁 Project Structure

```
/client       → React frontend (Vite)
/server       → Node.js backend (Express)
/.env         → Environment variables
```

---

## 🚀 Getting Started

### 🧰 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-app.git
cd library-app
```

### 2. Install Dependencies

#### 🔹 Backend (Express)

```bash
cd server
npm install
```

#### 🔹 Frontend (React + Vite)

```bash
cd ../client
npm install
```

---

## 🧪 Running the App

### 1. Start the Backend

```bash
cd server
npm run dev
```

Runs at: `http://localhost:5000`

### 2. Start the Frontend

```bash
cd ../client
npm run dev
```

Runs at: `http://localhost:5173`

---

## 🌐 Environment Variables

Create a `.env` file in both `/server` and `/client` directories.

### 📦 server/.env

```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_jwt_secret
```

### 📦 client/.env

```
VITE_API_URL=http://localhost:5000/api
```

> ⚠️ Remember to add `.env` files to your `.gitignore`.

---

## 📚 Features

- 🔐 Admin login
- 📦 Member registration
- 💳 Payment tracking
- 📄 PDF report generation
- 🌐 RESTful API with Express
- ⚡ Fast frontend with Vite
- 🌈 Clean UI using React + CSS
- 📡 Offline detection & auto-refresh

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📞 Support

For issues, contact [dev432@gmail.com.com] or open an [issue](https://github.com/your-username/library-app/issues).
