# 🎵 Song List App (MERN)

A **full-stack MERN application** that allows users to **view, add, edit, and delete songs**.  
The **frontend** uses **React + Redux Toolkit + Redux-Saga**, while the **backend** is built with **Node.js + Express** and uses **MongoDB** for data storage.  

---

## Features
### **Frontend**
- Add, edit, delete songs
- Pagination for better UI
- Responsive design with **Emotion + Styled-System**
- State management using **Redux Toolkit + Redux-Saga**
- Navigation with **React Router v6**
- Bundled with **Webpack 5**

### **Backend**
- RESTful API with **Node.js + Express**
- CRUD operations for songs
- MongoDB for persistent storage using **Mongoose**

---

## Which parts were assistanced by AI?
- Initial **Webpack configuration**.

---

## How I verified the code works:
- **Frontend:**
  - Tested UI interactions (add/edit/delete) in the browser.
  - Verified Redux actions via **Redux DevTools**.
  - Checked API calls in **Network tab**.
- **Backend:**
  - Tested API endpoints using **Postman**.
  - Verified data persistence in **MongoDB Compass**.
- **Build:**
  - Ran `npm run build` for production and served with a local HTTP server.
  - Ensured no missing dependencies or runtime errors.

---

## Webpack Setup Overview
- **Entry:** `src/index.js`
- **Output:** `dist/bundle.js`
- **Loaders:** `babel-loader`, `style-loader`, `css-loader`
- **Plugins:** `HtmlWebpackPlugin`
- **Optimizations:**  
  - Code Splitting: `React.lazy()` and `Suspense` for lazy loading  
  - Source Maps in development  

### Scripts:
```bash
npm start   # Development server with webpack-dev-server
npm build   # Production build
```
### Folder Structure:
```bash
frontend/
├── src/
│   ├── components/
│   │   ├── SongList.js
│   │   └── SongForm.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── songsSlice.js
│   │   └── sagas.js
│   ├── styles/
│   │   ├── SongListStyles.js
│   │   ├── SongFormStyles.js
│   │   └── theme.js
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── public/
│   └── index.html
├── webpack.config.js
└── package.json
```

# Clone repository
git clone https://github.com/Olanakelbesa/addis-software-test-frontend.git

# Run frontend
npm install
npm start    


