# E-Commerce Project

<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://res.cloudinary.com/dkqu2s9gz/image/upload/v1730560704/alwkum2mk75sdptfkicw.png" width="250" alt="E-Commerce Screenshot 1">
  <img src="https://res.cloudinary.com/dkqu2s9gz/image/upload/v1730560710/d7ef3tbuxq05pmnzfg74.png" width="250" alt="E-Commerce Screenshot 2">
  <img src="https://res.cloudinary.com/dkqu2s9gz/image/upload/v1730560703/cuusdtsegvcfkpccc7z8.png" width="250" alt="E-Commerce Screenshot 3">
</div>

## Overview

This E-Commerce project is a full-stack web application that allows users to browse products, add them to a cart, and proceed with a checkout process. Built with a focus on scalability, performance, and a clean user experience, it features a frontend interface developed with modern web technologies and a backend that manages data storage and retrieval.

## Features

- **Product Browsing**: View product details and descriptions.
- **Cart Management**: Add, update, or remove items in the cart.
- **User Authentication**: Register, login, and manage user profiles.
- **Responsive Design**: Optimized for all devices.
- **Search & Filter**: Find products easily with search and filter options.
- **Secure Checkout**: Purchase products with secure checkout.

## Tech Stack

### Frontend

- React
- Tailwind CSS
- Shadcn UI
- Axios
- React Router
- Redux

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- PayPal SDK
- Cloudinary

## Getting Started

### Prerequisites

- **Node.js** (v14+ recommended)
- **MongoDB** (running locally or in the cloud)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/kemalcalak/E-Commerce.git
cd E-Commerce
```

2. **Install dependencies**:
   
For the backend:
```bash
cd server
npm install
```

For the frontend:
```bash
cd client
npm install
```

3. **Set up environment variables**:
   
In the `server` directory, create a `.env` file and add:
```plaintext
MONGODB_URL=your_mongodb_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
PAYPAL_MODE=your_paypal_mode
PORT=your_port
CLIENT_BASE_URL=your_client_base_url
```

In the `client` directory, create a `.env` file and add:
```plaintext
VITE_API_URL=your_vite_api_url
```

4. **Run the application**:
   
Start the backend server:
```bash
cd server
npm run dev
```

Start the frontend:
```bash
cd client
npm start
```

5. **Access the application**:
   - Open your browser and go to `http://localhost:5173`.

## Folder Structure

```plaintext
E-Commerce/
├── client/                     # Frontend code
│   ├── public/                 # Static assets (images, icons, etc.)
│   │   ├── index.html         # Main HTML file for the React app
│   │   └── favicon.ico        # Favicon for the application
│   └── src/                   # React components, pages, and styles
│       ├── components/        # Reusable React components
│       ├── pages/            # Main pages of the application
│       ├── styles/           # Global styles and Tailwind configs
│       ├── App.js           # Main app component
│       ├── index.js         # Entry point of React application
│       └── utils/           # Utility functions
├── server/                    # Backend code
│   ├── controllers/          # API route controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes definitions
│   ├── middleware/          # Custom middleware
│   ├── config/             # Configuration files
│   ├── services/           # Business logic layer
│   └── server.js           # Backend entry point
├── .env                    # Environment variables
├── package.json           # Project metadata and dependencies
└──README.md             # Project documentation
```

## Contact

For any questions or issues, please contact me at [kemalcalak.com](https://kemalcalak.com/contact).