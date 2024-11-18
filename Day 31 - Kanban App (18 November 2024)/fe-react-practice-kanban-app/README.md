# Kanban App

This is a simple Kanban board application for task management built with React.js and powered by `react-beautiful-dnd` for drag-and-drop functionality. The app allows users to organize tasks across three different status columns: **Backlog**, **On Progress**, and **Done**. The app's data is stored locally using the `json-server` library, simulating a REST API.

## Features

- **Drag-and-Drop**: Easily move tasks between columns (Backlog, On Progress, Done).
- **Task Management**: Add, and delete tasks.

## Tech Stack

- **Frontend**: React.js
- **Drag-and-Drop**: `react-beautiful-dnd`
- **Data Storage**: `json-server`

## Installation

To get started with this project, follow the steps below:

### 1. Clone the repository
First, clone the repository to your local machine. Then go to the folder "Day 31 - Kanban App (18 November 2024) /fe-react-practice-kanban-app"

### 2. Install dependencies
Run the following command to install all the necessary dependencies:
```
npm install
```

### 3. Configure the environment
You need to configure the .env file to set the correct endpoint for your JSON server.

1. Rename the file .env.example to .env.
2. Open the .env file and set the VITE_BASE_URL variable to the URL of your JSON server (usually http://localhost:3000).

Example:
```
VITE_BASE_URL=http://localhost:3000
```

### 4. Start the JSON Server
In order to run the app, you need to have a JSON server running to handle task data. You can start the JSON server with the following command:
```
npx json-server db.json
```
This will start the JSON server and you should see it running on http://localhost:3000.

### 5. Start the React app
Now, start the React development server:
```
npm run dev
```
The app will be running at http://localhost:5173 (or another port specified by Vite).

### 6. Open the app
You can now open your browser and navigate to:
```
http://localhost:5173
```
You should see the Kanban board in action. You can add tasks, move them between columns, and the data will be persisted in your JSON server.