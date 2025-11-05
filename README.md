# 🔮 Jujutsu Kaisen API

## 📋 General Description

This RESTful API serves as the **Business Logic and Data Persistence Layer** for Jujutsu Kaisen character management. It acts as the **Business Logic and Data Persistence Layer**, allowing any client application to consume and manipulate character data in a centralized and structured way, following a **modular architectural approach** (Controllers, Models, Configuration).

The API enables client applications to:
- Query and filter character information
- Perform CRUD operations on character data
- Access both sorcerers and curses data through dedicated endpoints
- Maintain data consistency and validation at the server level

---

## 🛠️ Technologies Used (Stack M-E-N)

The application is built on a modern, asynchronous, and robust stack:

| Category | Technology | Function |
| :--- | :--- | :--- |
| **Backend Runtime** | Node.js | Server-side JavaScript runtime environment. |
| **Web Framework** | Express.js | Routing (GET, POST, etc.) and HTTP request handling. |
| **Database (NoSQL)** | MongoDB | Character data persistence. |
| **DB Driver** | `mongodb` | Direct connection and interaction with the database. |
| **Configuration** | `dotenv` | Secure management of environment variables and credentials. |
| **Middleware** | `body-parser` | Parsing of JSON and URL-encoded request bodies. |
| **CORS** | `cors` | Enable Cross-Origin Resource Sharing for client applications. |

---

## 🚀 Features

- **RESTful Architecture**: Clean and predictable endpoint structure
- **Modular Design**: Separation of concerns with Controllers, Models, and Routes
- **NoSQL Database**: Flexible schema for character attributes
- **Environment Configuration**: Secure credential management
- **CORS Enabled**: Ready for frontend integration
- **Dual Endpoints**: Separate routes for sorcerers and curses

---

<div align="center">

# 🔮 Jujutsu Kaisen API
</div>
