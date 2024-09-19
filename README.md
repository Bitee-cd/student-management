# Student Management System

This project is a **Student Management System** built with **Next.js**, **Chakra UI**,**React Query**, and **TypeScript**. It allows users to create, edit, view, and manage student records. Features include pagination, search functionality, and mobile responsiveness.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Running the Project](#running-the-project)
4. [Development Approach](#development-approach)
5. [Project Structure](#project-structure)

## Features

- View, create, update, and delete student records.
- Search functionality based on name, registration number, and GPA.
- Pagination for student lists.
- Mobile responsive design using Chakra UI.
- API endpoints for CRUD operations on students.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. Clone the repository:

   ```bash
   git clone https://github.com/Bitee-cd/student-management.git
   ```

2. Navigate to project
   cd student-management

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun instal
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Step 4: View the Application

Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application running.

You can start editing the project by modifying `pages/index.tsx`. The page will auto-update as you make changes.

## Development Approach

The development approach for this project emphasizes modularity, responsiveness, and type safety. Key aspects include:

### 1. Component-Driven Architecture

- The UI is built using reusable **Chakra UI** components to ensure consistent design and styling across the application.
- Custom components are created to handle the core functionalities such as displaying student cards, pagination, and handling form inputs.

### 2. State Management & Data Fetching

- **React Query** is used for efficient data fetching, caching, and synchronization with the backend. It simplifies API calls and ensures that the UI is always up to date with the latest data from the server.
- By leveraging React Query, the app minimizes unnecessary re-fetching of data, improves performance, and handles loading and error states seamlessly.

### 3. TypeScript Integration

- **TypeScript** is used across the application to ensure type safety and to catch potential issues during development. This results in more robust and maintainable code, improving both the development experience and the final product's quality.

### 4. Responsive Design

- **Chakra UI**’s responsive design utilities are utilized to ensure that the application works well across different screen sizes and devices.
- The layout dynamically adjusts for mobile, tablet, and desktop views, providing an optimal user experience.

### 5. API Integration

- API endpoints are built to handle CRUD operations on student records. The project uses **Next.js API routes** for server-side functionality, ensuring a full-stack experience within the same framework.

### 6. File and Folder Structure

- The project is organized in a way that supports scalability:
  - `components/`: Contains all reusable UI components.
  - `builder/`: Contains all API call logic and service interactions. This directory includes functions and hooks for making HTTP requests, handling responses, and managing data fetching and mutation for different parts of the application.
  - `pages/`: Houses the Next.js pages and API routes for routing and backend logic.
  - `styles/`: Includes global styles and Chakra UI theme customizations.
  - `lib/`: Contains helper functions for reuse across the project.
  - `public/`: Stores static assets like images and icons.

### 7. Testing & Debugging

- The modular structure allows for easy unit testing of individual components and utility functions.
- TypeScript’s type-checking, combined with React Query’s handling of data fetching, reduces potential runtime errors, ensuring a smoother development process.

By adhering to these principles, the project remains scalable, maintainable, and easy to develop further as new features or improvements are needed.
