# 🏢 Employee Management System

A React-based employee task management system built with Vite and Tailwind CSS.

## 📋 Features

### 🔐 Authentication
- **Admin and Employee login** 🔑
- **Session management** using localStorage 💾

### 👨‍💼 Admin Dashboard (AdminDashboard)
- ✏️ Create and assign tasks to employees
- 📊 View all employees' task statistics
- 🔍 Monitor task progress across the organization

### 👨‍💻 Employee Dashboard (EmployeeDashboard)
- 📝 View assigned tasks
- 🔄 Task status management (New, Active, Complete, Failed)
- 📈 Task statistics overview

## 🛠️ Tech Stack
- ⚛️ React.js with Vite
- 🎨 Tailwind CSS
- 🔄 Context API for state management
- 💾 Local Storage for data persistence

## 🚀 Project Setup

1. 📥 Clone the repository
    ```bash
    git clone https://github.com/pawan-r4ju/EmployeeManagementSystem.git
    ```

2. 📂 Navigate into the project folder
    ```bash
    cd EmployeeManagementSystem
    ```

3. 📦 Install dependencies
    - Run the following command to install all the necessary dependencies:
    ```bash
    npm install
    ```
    This will read the `package.json` file and install all required dependencies into the `node_modules` folder. Ensure that you're connected to the internet while running this command.

4. 🏃‍♂️ Start the development server
    ```bash
    npm run dev
    ```
    This will start the server and you can open the application by navigating to `http://localhost:3000` (default).

## 📜 Scripts

Here are the available scripts you can use in the project:

```json
"scripts": {
  "dev": "vite",               // Starts the development server using Vite
  "build": "vite build",       // Builds the project for production
  "lint": "eslint .",          // Runs ESLint to check the code for errors and styling issues
  "preview": "vite preview",  // Previews the production build locally
  "predeploy": "npm run build", // Runs the build before deployment
  "deploy": "gh-pages -d dist" // Deploys the production build to GitHub Pages
}

```

## 📁 Project Structure

```bash
src/
├── 🔐 components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   └── TaskList/
│       ├── TaskList.jsx
│       └── TaskItem.jsx
├── 🔄 context/
│   └── AuthProvider.jsx
├── 🛠️ utils/
│   └── localStorage.jsx
├── 📄 App.jsx
├── 📄 main.jsx
└── 📄 index.css

```

## 🔑 Login Credentials

### 👨‍💼 Admin
- 📧 **Email:** pawanunknown4@gmail.com
- 🔐 **Password:** Pawan123

### 👨‍💻 Employee
- 📧 **Email:** e@e.com
- 🔐 **Password:** 123

## ⚙️ Configuration Files
- 📝 **.eslintrc.cjs**
- 🎨 **tailwind.config.js**
- ⚡ **vite.config.js**

## 🚀 Deployment

The application is configured for GitHub Pages deployment. To deploy:

1. 🏗️ Build the project
    ```bash
    npm run build
    ```

2. 🚀 Deploy to GitHub Pages
    ```bash
    npm run deploy
    ```


## 📄 License
MIT

## 👨‍💻 Author
Pawan Raju






