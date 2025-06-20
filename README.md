# 🔗 Shortify - URL Shortener

**Shortify** is a sleek and simple URL shortener built with **Next.js** and **MongoDB**. It allows users to create custom shortened links and easily redirect to the original long URLs.

---

## 🚀 Features

- 🔐 Custom short URLs with user-defined aliases  
- 🔁 Automatic redirection to the original URL  
- 🎨 Beautiful and minimal UI using React & Tailwind CSS  

---

## 🛠️ Tech Stack

- **Next.js** (App Router + Server Actions)  
- **React** (with client-side components)  
- **MongoDB** (hosted on Atlas or local)  
- **Tailwind CSS** (for styling)  
- **React Toastify** (for notifications)  

---

## 🧪 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/shortify.git
cd shortify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root:

```env
MONGODB_URI="your-mongodb-uri"
NEXT_PUBLIC_HOST="http://localhost:3000/"
```

- `MONGODB_URI` – Your MongoDB Atlas or local connection string  
- `NEXT_PUBLIC_HOST` – For local development use `http://localhost:3000/`, and set to your domain when deployed  

### 4. Run the Dev Server

```bash
npm run dev
```

App will be live on `http://localhost:3000/`

---

## 📃 License

[MIT](LICENSE)
