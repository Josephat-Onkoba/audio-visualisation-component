# 🎵 Audio-Viz — 3D Voice Assistant Visualization

A stunning 3D audio visualization component built with **React**, **TypeScript**, **Vite**, and **Three.js**. Features a beautiful iridescent bubble with animated waveform bars that creates a modern, lively conversational AI aesthetic.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)
![Three.js](https://img.shields.io/badge/Three.js-0.182-000000?logo=threedotjs)

---

## ✨ Features

- 🔮 **3D Animated Bubble** — GPU-accelerated iridescent bubble using custom GLSL shaders
- 🎛️ **Dynamic Waveform** — Real-time animated audio bars with smooth wave animations
- 📱 **Fully Responsive** — Adapts beautifully to mobile, tablet, and desktop screens
- 🎨 **Modern UI** — TailwindCSS styling with Shadcn UI components
- ⚡ **High Performance** — Optimized animations using requestAnimationFrame

---

## 📋 Table of Contents

1. [Prerequisites](#-prerequisites)
2. [Quick Start Guide](#-quick-start-guide)
3. [Step-by-Step Installation](#-step-by-step-installation)
4. [Running the Project](#-running-the-project)
5. [Building for Production](#-building-for-production)
6. [Project Structure](#-project-structure)
7. [Troubleshooting](#-troubleshooting)
8. [Tech Stack](#-tech-stack)

---

## 🔧 Prerequisites

Before you begin, make sure you have the following installed on your computer:

### 1. Node.js (Version 18 or higher)

Node.js is the JavaScript runtime that allows you to run this project.

**How to check if you have Node.js:**
```bash
node --version
```

If you see a version number like `v18.x.x` or higher, you're good! If not, download it from:
- 🌐 **Official Website**: [https://nodejs.org](https://nodejs.org) (Download the **LTS** version)

### 2. pnpm (Package Manager)

This project uses `pnpm` as its package manager. It's faster and more efficient than npm.

**How to install pnpm:**
```bash
npm install -g pnpm
```

**How to verify pnpm is installed:**
```bash
pnpm --version
```

> 💡 **Note for beginners**: A package manager helps you download and manage all the code libraries (dependencies) that this project needs to run.

### 3. Git

Git is needed to clone (download) the project from GitHub.

**How to check if you have Git:**
```bash
git --version
```

If not installed, download from: [https://git-scm.com](https://git-scm.com)

---

## 🚀 Quick Start Guide

If you're comfortable with the terminal, here's the fast way to get started:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/audio-viz.git

# 2. Navigate into the project folder
cd audio-viz

# 3. Install all dependencies
pnpm install

# 4. Start the development server
pnpm dev
```

Then open your browser and go to: **http://localhost:5173**

---

## 📖 Step-by-Step Installation

### Step 1: Clone the Repository

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
git clone https://github.com/YOUR_USERNAME/audio-viz.git
```

> 📝 **What this does**: Downloads a complete copy of the project to your computer.

### Step 2: Navigate to the Project Folder

```bash
cd audio-viz
```

> 📝 **What this does**: Moves your terminal into the project directory so you can run commands inside it.

### Step 3: Install Dependencies

```bash
pnpm install
```

> 📝 **What this does**: Downloads all the code libraries that the project needs to run. This might take 1-3 minutes depending on your internet speed.

**What you should see:**
```
Packages: +XXX
+++++++++++++++++++++++++++++++++++
Progress: resolved XXX, reused XXX, downloaded XX, added XXX, done
```

### Step 4: Verify Installation

After installation completes, you should see a `node_modules` folder in your project directory. This folder contains all the downloaded dependencies.

---

## ▶️ Running the Project

### Development Mode (Recommended for Testing)

Start the development server with hot-reload (automatically refreshes when you make changes):

```bash
pnpm dev
```

**You should see output like:**
```
  VITE v7.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
  ➜  press h + enter to show help
```

🎉 **Open your browser** and navigate to: **http://localhost:5173**

You should see the beautiful 3D animated bubble with waveform bars!

### Stopping the Server

To stop the development server, press `Ctrl + C` in your terminal.

---

## 📦 Building for Production

If you want to deploy this project to a web server:

### Step 1: Build the Project

```bash
pnpm build
```

> 📝 **What this does**: Creates an optimized, minified version of your app in the `dist` folder.

### Step 2: Preview the Production Build (Optional)

```bash
pnpm preview
```

This lets you preview the production build locally before deploying.

### Step 3: Deploy

Upload the contents of the `dist` folder to your web hosting service. Popular options include:
- **Vercel** (Recommended - free and easy)
- **Netlify**
- **GitHub Pages**
- **AWS S3**

---

## 📁 Project Structure

Here's a quick overview of the important files and folders:

```
audio-viz/
├── 📁 public/              # Static assets (favicon, etc.)
│   └── vite.svg
├── 📁 src/                 # Source code
│   ├── 📁 components/      # React components
│   │   ├── Bubble3D.tsx        # 3D iridescent bubble (Three.js)
│   │   ├── VoiceAssistant.tsx  # Main voice assistant component
│   │   └── 📁 ui/              # Shadcn UI components
│   ├── 📁 lib/             # Utility functions
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── 📄 package.json         # Project configuration & dependencies
├── 📄 tailwind.config.js   # TailwindCSS configuration
├── 📄 vite.config.ts       # Vite bundler configuration
├── 📄 tsconfig.json        # TypeScript configuration
└── 📄 README.md            # This file!
```

### Key Components

| Component | Description |
|-----------|-------------|
| `VoiceAssistant.tsx` | Main component with animated waveform bars |
| `Bubble3D.tsx` | 3D bubble with custom GLSL shaders for iridescent effects |

---

## ❓ Troubleshooting

### Common Issues and Solutions

#### ❌ "pnpm: command not found"

**Solution**: Install pnpm globally:
```bash
npm install -g pnpm
```

#### ❌ "Node.js version is too old"

**Solution**: Update Node.js by downloading the latest LTS version from [nodejs.org](https://nodejs.org)

#### ❌ Installation fails with errors

**Solution**: Try these steps in order:
```bash
# 1. Delete node_modules and lock file
rm -rf node_modules pnpm-lock.yaml

# 2. Clear pnpm cache
pnpm store prune

# 3. Reinstall dependencies
pnpm install
```

#### ❌ "Port 5173 is already in use"

**Solution**: Either close the other application using that port, or run Vite on a different port:
```bash
pnpm dev --port 3000
```

#### ❌ 3D bubble not rendering / WebGL errors

**Solution**: 
1. Make sure your browser supports WebGL (most modern browsers do)
2. Try updating your browser to the latest version
3. Check if hardware acceleration is enabled in your browser settings

#### ❌ Page is blank or shows errors

**Solution**:
1. Open browser developer tools (press `F12`)
2. Check the Console tab for error messages
3. Make sure all dependencies are installed correctly

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint to check for code issues |

---

## 🧰 Tech Stack

This project is built with modern web technologies:

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev) | UI component library |
| [TypeScript 5.9](https://typescriptlang.org) | Type-safe JavaScript |
| [Vite 7](https://vitejs.dev) | Fast build tool and dev server |
| [Three.js](https://threejs.org) | 3D graphics library |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js |
| [TailwindCSS 3](https://tailwindcss.com) | Utility-first CSS framework |
| [Shadcn UI](https://ui.shadcn.com) | Beautiful pre-built components |
| [pnpm](https://pnpm.io) | Fast, efficient package manager |

---

## 🤝 Need Help?

If you run into any issues not covered in this guide:

1. **Check the issues** on the GitHub repository
2. **Create a new issue** with a detailed description of your problem
3. **Include**: Your operating system, Node.js version, and any error messages

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ using React + Three.js
</p>
