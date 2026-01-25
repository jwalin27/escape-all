# GEMINI Code Companion

This repository contains three distinct projects:

1.  **Cyber Phishing Game**: A web-based game.
2.  **Cyber LMS**: A Learning Management System with a Go backend and a React frontend.
3.  **ESC**: A Next.js application.

---

## 1. Cyber Phishing Game

### Project Overview

This project is a web-based game, likely designed to teach users about phishing. It's built with Vite and likely uses a modern web stack.

### Building and Running

To run this project, you'll need to have Node.js and npm installed.

1.  **Navigate to the project directory:**
    ```bash
    cd Cyber-phising-game
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 2. Cyber LMS

### Project Overview

This is a Learning Management System (LMS) with a Go backend and a Vite-powered React frontend. The backend provides a RESTful API for managing courses, lessons, quizzes, and users. The frontend provides a user interface for learners and instructors. The entire application is containerized using Docker.

### Building and Running

#### Backend

The backend is a Go project. To run it, you'll need Go and Docker installed.

1.  **Navigate to the project directory:**
    ```bash
    cd cyber-lms
    ```

2.  **Start the application with Docker Compose:**
    ```bash
    docker-compose up
    ```
    This will start the Go API server and a Postgres database.

3.  **Alternatively, run the backend without Docker:**
    *   Make sure you have a Postgres database running and have the connection details configured in `configs/config.yaml` or as environment variables.
    *   Run the following command:
        ```bash
        go run ./cmd/api
        ```

#### Frontend

The frontend is a React application. To run it, you'll need Node.js and npm installed.

1.  **Navigate to the frontend directory:**
    ```bash
    cd cyber-lms/frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 3. ESC

### Project Overview

This is a Next.js application. The purpose of the application is not immediately clear from the available information.

### Building and Running

To run this project, you'll need to have Node.js and npm installed.

1.  **Navigate to the project directory:**
    ```bash
    cd esc/esc
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
