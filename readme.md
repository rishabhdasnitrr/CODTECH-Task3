**Name**: Rishabh Das\
**Company**: CODTECH IT SOLUTIONS\
**ID**: CT08PD733\
**Domain**: WEB DEVELOPMENT\
**Duration**: 4 weeks\
**Mentor**: G.SRAVANI

# Overview of the project

## Project: CourseWire - A Learning Management System

CourseWire is a comprehensive Learning Management System (LMS) built using the MERN stack (MongoDB, Express.js, React, and Node.js). This platform enables instructors to create and sell video courses across a variety of topics such as Web Development, Data Science, AI, and more. Students can explore, purchase, and track their progress within each course, making learning easy and accessible. 

## Features

- **User Registration & Authentication**: Secure sign-up and login functionality for students and instructors.
- **Course Catalog**: Browse and filter through a wide selection of courses across multiple categories.
- **Course Purchase**: Students can securely purchase courses using PayPal.
- **Progress Tracking**: Students can mark their progress for each course and see their overall completion.
- **Instructor Dashboard**: Instructors can create courses, upload videos, and view their students.
- **Responsive Design**: The platform is fully responsive, providing a seamless experience across devices.

## Tech Stack
- **Frontend**: React, Redux for state management, Tailwind CSS and Shad CN UI for styling.
- **Backend**: Node.js, Express.js for API development, MongoDB for database.
- **Media Storage**: Cloudinary for media and image hosting.
- **Payments**: PayPal API for secure transactions.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB
- A Cloudinary account (for media storage)
- A PayPal developer account (for sandbox mode transactions)

### Installation

1. **Clone the Repository**
    ```bash
    git clone [repository link]
    cd CourseWire
    ```

2. **Install Dependencies**
    ```bash
    cd client
    npm install
    cd ..
    cd server
    npm install
    ```

3. **Environment Setup**: Create a .env file in the project root and add the following environment variables:
    ```bash
    MONGO_URI=your_mongodb_uri
    CLOUDINARY_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    PAYPAL_CLIENT_ID=your_paypal_client_id
    NODE_ENV=development
    PORT=5000
    ```

4. **Run the Application**
    - Start the server and client:
    ```bash
    cd server
    npm run dev
    cd..
    cd client
    npm run dev
    ```
    - The backend server should be running on ```http://localhost:5000```, and the React frontend on ```http://localhost:5173```


## Usage
- **For Students**: Register or log in, browse courses, purchase a course, and track your progress.
- **For Instructors**: Sign up as an instructor, create and upload courses, and view student enrollments.


## Contributing

We welcome contributions to improve CourseWire! Here’s how to contribute:

1. **Fork the Repository**: Click the fork button on the GitHub page to create a copy of the repository in your account.

2. **Clone the Forked Repository**:
    ```bash
    git clone https://github.com/rishabhdasnitrr/CODTECH-Task3
    cd CODTECH-Task3-main
    ```

3. **Create a New Branch**:
    ```bash
    git checkout -b feature-name
    ```

4. **Make Changes**: Implement your feature or fix.

5. **Commit and Push Changes**:
    ```bash
    git add .
    git commit -m "Description of changes"
    git push origin feature-name
    ```
6. **Submit a Pull Request**: Go to the original repository and submit a pull request from your forked repository.
## Contact
For any questions or feedback, please contact prin100603@gmail.com
