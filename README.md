# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Frontend - Technical Test Datacakra

Frontend aplikasi ini dibangun menggunakan teknologi modern berbasis **React.js** dan berbagai alat pendukung yang powerful untuk pengembangan UI dan manajemen state.

---

## Tech Stack

| Teknologi     | Keterangan                                                  |
|---------------|-------------------------------------------------------------|
| **ReactJS**   | Library utama untuk membangun antarmuka pengguna (UI)      |
| **Ant Design**| UI component library yang elegan dan konsisten              |
| **SCSS/SASS** | Preprocessor CSS untuk styling modular & maintainable       |
| **TailwindCSS** | Utility-first CSS framework untuk styling cepat dan fleksibel |
| **Redux**     | State management untuk skala besar dan kompleks             |
| **Redux Saga**| Middleware untuk side effect (seperti API call)             |
| **Axios**     | HTTP client untuk komunikasi API                            |

---

## 📦 Struktur Folder

```txt
src/
├── __test__/        # Unit Test
├── assets/          # Gambar, font, animasi, dll
├── components/      # Reusable components using Atomic Design
├── configs/         # Configuration for route, app, etc.
├── constants/       # Constant
├── middleware/      # Middleware for handler route
├── redux/           # Redux store, actions, reducers, sagas
│   ├── actions
│   ├── constants
│   ├── reducers
│   ├── sagas
│   ├── store.ts
│   ├── persistor.ts
├── services/           
│   ├── interfaces 
│   ├── ├── article-service.interface.ts 
│   ├── ├── auth-service.interface.ts
│   ├── auth.service.ts # auth service handler
│   ├── article.service.ts
├── types/           
├── utils/           
├── views/              # Page level components
│   ├── screens
├── App.tsx             # Root component
└── main.tsx            # Entry point
└── vite-env.d.ts       
```
## How To running ?

### development
```bash
npm run dev
```

### build vitejs
```bash
npm run build
```

### production
```bash
npm run start
```
```bash
npm run preview
```

### lint
```bash
npm run start
```
