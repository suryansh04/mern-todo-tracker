# MERN Stack Todo Application

This is a full-stack Todo application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to manage their daily tasks, including adding, viewing, editing, and deleting todos.

## Features

-   **Add New Tasks:** Easily create and add new todo items.
-   **View All Tasks:** Display a list of all existing tasks.
-   **Edit Tasks:** Modify the details of an existing task.
-   **Delete Tasks:** Remove tasks that are no longer needed.
-   **Responsive Design:** User-friendly interface that adapts to various screen sizes.

## Technologies Used

### Frontend

-   **React:** A JavaScript library for building user interfaces.
-   **Vite:** A fast build tool for modern web projects.
-   **Axios:** Promise-based HTTP client for making API requests.
-   **CSS Modules:** For scoped styling of components.

### Backend

-   **Node.js:** JavaScript runtime environment.
-   **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
-   **MongoDB:** A NoSQL database for storing task data.
-   **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   Node.js (LTS version recommended)
-   npm (Node Package Manager) or Yarn
-   MongoDB (Community Server or MongoDB Atlas account)

## Installation

Follow these steps to set up and run the application locally.

### 1. Clone the repository

```bash
git clone <repository_url>
cd Todo_app
```

### 2. Backend Setup

Navigate to the `backend` directory, install dependencies, and start the server.

```bash
cd backend
npm install
# or yarn install
```

Create a `.env` file in the `backend` directory and add your MongoDB connection string:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000 # or any other port you prefer
```

Start the backend server:

```bash
npm start
# or node server.js
```

The backend server will run on `http://localhost:5000` (or your specified PORT).

### 3. Frontend Setup

Open a new terminal, navigate back to the root directory of the project, then go into the frontend directory (which is the root `Todo_app` directory in this structure), install dependencies, and start the React development server.

```bash
cd .. # If you are still in the backend directory
npm install
# or yarn install
```

Start the frontend development server:

```bash
npm run dev
# or yarn dev
```

The frontend application will open in your browser, usually at `http://localhost:5173`.

## Usage

Once both the frontend and backend servers are running:

1.  Open your web browser and navigate to `http://localhost:5173`.
2.  You can now add new tasks, view existing ones, edit their details, and delete them.

## Project Structure

```
Todo_app/
├── .git/
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── server.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── model/
│   │   └── Task.js
│   ├── node_modules/
│   └── routes/
│       └── taskRoutes.js
├── node_modules/
├── public/
├── src/
│   ├── AddItem.jsx
│   ├── App.jsx
│   ├── EditItem.jsx
│   ├── Heading.jsx
│   ├── main.jsx
│   ├── TaskContainer.jsx
│   ├── TaskItem.jsx
│   ├── api/
│   │   └── axios.js
│   └── styles/
│       ├── AddItem.css
│       ├── EditItem.css
│       ├── Heading.css
│       ├── TaskContainer.css
│       └── TaskItem.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.