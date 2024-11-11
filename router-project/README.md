
# StudyNotion

StudyNotion is a web application that provides users with an educational platform where they can sign up, log in, and access a personalized dashboard. The platform offers courses, resources, and tools for students and instructors. It features a simple and intuitive user interface built with React, and includes authentication, routing, and private route protection.

## Features

- **User Authentication**: Login and signup forms with email and password authentication.
- **Private Routes**: Protects routes like the Dashboard to ensure only authenticated users can access them.
- **Responsive Design**: The platform is designed to be fully responsive and works seamlessly across various devices.
- **Google OAuth**: Users can sign up and log in using their Google account.
- **Dynamic Forms**: The signup form allows users to choose between a "Student" or "Instructor" account type.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: For handling routing between different pages in the app.
- **Tailwind CSS**: A utility-first CSS framework for fast UI development.
- **React Icons**: For using vector icons in the app.
- **React Hot Toast**: For providing toast notifications in the app.
- **Google OAuth**: For allowing users to sign up/login using their Google account.

## Installation

To get started with this project, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/studynotion.git
   ```

2. Navigate into the project directory:

   ```bash
   cd studynotion
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`/src`**: Contains the main source code for the project.
  - **`/components`**: Reusable components such as Navbar, Template, PrivateRoute, etc.
  - **`/pages`**: Contains the main pages of the app, such as Home, Login, Signup, and Dashboard.
  - **`/assets`**: Stores images and other static files used in the project.
  - **`App.js`**: The main application file that handles routing and app logic.

## Usage

1. **Home Page**: The landing page of the app where users can navigate to login or signup.
2. **Login Page**: Users can log in using their email and password or using their Google account.
3. **Signup Page**: Users can create a new account and choose between a "Student" or "Instructor" account.
4. **Dashboard**: A private page only accessible to logged-in users.

## Private Routes

The Dashboard page is a private route that can only be accessed by logged-in users. If a user tries to access the Dashboard without logging in, they are redirected to the login page.




