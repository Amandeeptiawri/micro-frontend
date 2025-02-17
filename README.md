# Micro-Frontend Architecture

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

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/Amandeeptiawri/micro-frontend.git
cd micro-frontend
```

### **2️⃣ Install Dependencies**

Run the following commands for each app:

```sh
cd main-app && npm install
cd chat-app && npm install
cd email-app && npm install
```

### **3️⃣ Start the Applications**

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

---

## Key Architectural Decisions & Trade-offs

### **Why Module Federation?**

- **Independent Development & Deployment** – Each micro-app can be developed and deployed separately.
- **Dynamic Loading** – The host app loads micro-frontends only when required, improving performance.
- **Shared Dependencies** – Common libraries (e.g., React, UI components) are shared across micro-apps, reducing redundancy.

###  **Why React Router?**

- Provides seamless navigation between micro-applications without full page reloads.
- Each micro-frontend can manage its own routes independently.

###  **Why Pure CSS?**

- Keeps styles lightweight and easy to manage.
- Avoids conflicts between micro-applications.

###  **Trade-offs Considered**

| Decision              | Pros                                     | Cons                                      |
| --------------------- | ---------------------------------------- | ----------------------------------------- |
| **Module Federation** | Enables independent scaling & deployment | Requires extra setup                      |
| **Shared Components** | Reduces duplication                      | Tightens coupling between apps            |
| **Pure CSS**          | Simple and efficient                     | No pre-built styling system like Tailwind |

---

## 📩 Future Enhancements

✅ Implement **real-time chat** using WebSockets or Firebase.\
✅ Add a **Notifications micro-frontend** dynamically.\
✅ Improve UI/UX with animations and better styling.

---



