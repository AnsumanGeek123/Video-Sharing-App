# Video Sharing App

A full-stack video-sharing application built using **MERN stack (MongoDB, Express.js, React, Node.js)**. This app allows users to upload, stream, and share videos seamlessly.

# Backend Data modeling Architecture

->Link : - https://app.eraser.io/workspace/OyU1p9eAZaucM0UsLv4I?origin=share

## Features

- 🎥 **User Authentication** (Signup/Login)
- 📤 **Video Upload & Processing**
- 📺 **Video Streaming**
- 👍 **Like/Dislike Videos**
- 💬 **Commenting System**
- 🔍 **Search & Filters**
- 🔔 **Subscriptions & Notifications**
- 🏷️ **Categories & Tags**
- 📊 **Analytics Dashboard**

## Tech Stack

- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Storage:** Cloudinary/AWS S3 (for video storage)
- **Authentication:** JWT (JSON Web Tokens)
- **Video Processing:** FFmpeg

## Installation

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/yourusername/Video-Sharing-App.git
cd Video-Sharing-App
```

### 2️⃣ Install dependencies:
```sh
npm install
```

### 3️⃣ Set up environment variables:
Create a `.env` file in the root directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4️⃣ Start the application:

#### Backend:
```sh
cd server
npm run dev
```

#### Frontend:
```sh
cd client
npm start
```

## Usage

1. Sign up and log in.
2. Upload videos from the dashboard.
3. Stream videos from the homepage.
4. Like, comment, and subscribe to channels.

## Folder Structure

```
Video-Sharing-App/
│── server/           # Backend (Express.js)
│── client/           # Frontend (React.js)
│── models/           # Database Models
│── routes/           # API Routes
│── controllers/      # Business Logic
│── middleware/       # Authentication & Middleware
│── public/           # Static Files
│── .env.example      # Environment Variable Sample
│── README.md         # Project Documentation
```

## Contributions

Contributions are welcome! Feel free to fork this repo, create a new branch, and submit a pull request.
