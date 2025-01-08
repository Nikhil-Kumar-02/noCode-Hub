# Project Setup Guide

Welcome! This guide will walk you through the steps to set up the project for local development on your machine.

---

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

---

## Steps to Setup the Project

### 1. Fork the Repository

- Click the **"Fork"** button at the top-right corner of the page to create a personal copy of the repository under your GitHub account.

### 2. Clone the Repository

- Clone your forked repository to your local machine by running the following command in your terminal:
  ```bash
  git clone https://github.com/<your-username>/noCode-Hub.git
  ```
- Replace `<your-username>` with your GitHub username and `<repository-name>` with the repository name.

### 3. Install Dependencies

#### For the Client

1. Open the integrated terminal in the `client` directory.
2. Install the required dependencies by running:
   ```bash
   npm install
   ```

#### For the Server

1. Open the integrated terminal in the `server` directory.
2. Install the required dependencies by running:
   ```bash
   npm install
   ```

### 4. Start the Development Server

#### For the Client

1. Open the integrated terminal in the `client` directory.
2. Start the development server by running:
   ```bash
   npm run dev
   ```
3. Once the server starts, you will see output similar to this:

   ```
   VITE vX.X.X  ready in X ms

   Local:    http://localhost:5173/
   Network:  http://192.168.X.X:5173/
   ```

4. Click or open the **Local** link in your browser: `http://localhost:5173/`

---

## Notes

- Ensure both the `client` and `server` directories have their dependencies installed.
- The `client` is served at `http://localhost:5173/`. Check the terminal output for the exact URL if it changes.
- To close the server press `CTRL+C` and then press `y`

Happy coding!
