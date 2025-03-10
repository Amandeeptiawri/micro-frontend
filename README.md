﻿# Micro-Frontend Architecture

This project implements a **scalable and modular** micro-frontend architecture using **Webpack Module Federation**. The system consists of:

- **Main Application (Host Application):** Serves as the wrapper for all micro-applications, managing the design system and shared components.
- **Chat Application (Micro-Frontend):** A standalone application responsible for chat-related functionality.
- **Email Application (Micro-Frontend):** A standalone application responsible for email-related functionality.

---

## Tools & Frameworks Used

- **React** – Frontend UI framework
- **Webpack Module Federation** – Enables micro-frontend architecture
- **React Router** – Handles navigation between micro-apps
- **Pure CSS** – Styling for better maintainability
- **Node.js & NPM** – Package management and script execution

---

## How to Set Up & Run the Application

### **1️ Clone the Repository**

```sh
git clone https://github.com/Amandeeptiawri/micro-frontend.git
cd micro-frontend
```

### **2️ Install Dependencies**

Run the following commands for each app:

```sh
cd main-app && npm install
cd chat-app && npm install
cd email-app && npm install
```

### **3️ Start the Applications**

Each application must be started separately:

```sh
# Start the host application
cd main-app && npm start

# Start the chat micro-frontend
cd chat-app && npm start

# Start the email micro-frontend
cd email-app && npm start
```

Now, open **[http://localhost:3008](http://localhost:3008)** to access the host app.


