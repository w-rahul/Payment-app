# Payment Application

Welcome to the Payment Application repository! This project is designed to provide a simple payment system where users can create accounts, view other users, and send money. Below are the key features and technical details of the application.

## Key Features

- **User Account Creation:** Anyone can create an account.
- **Initial Credit:** A random amount is credited to the user's account upon creation.
- **User Listing:** Signed-in users can see a list of other users.
- **Money Transfer:** Signed-in users can send money to other users.

## Backend

The backend of this project is implemented using Node.js and Express, with MongoDB as the database. Here are some of the key technologies and libraries used:

- **Database:** MongoDB
- **Express Middleware:**
  - `express-router` for defining routes
  - `cors` for enabling CORS (Cross-Origin Resource Sharing)
  - `dotenv` for environment variables
- **Data Validation:** `zod` for data schema validation
- **Authentication and Authorization:** `jsonwebtoken` (JWT) for token-based authentication and authorization
- **Database Connectivity:** `mongoose` for MongoDB object modeling

## Frontend

The frontend of the application is developed using React.js. It consists of multiple pages to facilitate different functionalities:

- **Pages:**
  - **Signup:** User registration page
  - **Signin:** User login page
  - **Dashboard:** Main user interface after login
  - **Send Money:** Page for transferring money between users

### Frontend Libraries and Tools

- **JavaScript Framework:** React.js
- **Routing:** `react-router-dom` for declarative routing
- **HTTP Client:** `axios` for making API requests
- **Styling:** `Tailwind CSS` for utility-first CSS framework

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. **Clone the repository:**
