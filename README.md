# EmployeeTree
Recruiting project for Epi-Use

For this implementation of EmployeeTree, users can manage schedules through a web application interface developed in Angular.
The application uses express.js to fetch records stored in MongoDB.
The angular service files send http post requests to the express.js file to create, update, delete or read records from the database.
An authentication guard guarantees that users cannot access other pages of the application without logging in.

# Functionality
- Only registered users are allowed to access and use the application. Attempts to navigate to pages besides the login page will result in a redirection to the login page if the user is not logged in.

- Once logged in, users have access to the other 3 pages. Users are redirected to the home screen upon logging in.

- Logged in users can navigate to the "hierarchy" page, where the employee hierarchy of the logged in users is displayed in the form of an expandable and collapsable tree. The logged in user can click on an employee in the tree to view their schedules to the right of the tree (the current logged in user's schedule is displayed by default).

- Users can also navigate to the "schedules" page, where the logged in user can view and edit schedules of any of the employees in the hierarchy tree (including themselves).

- Logged in users can click on "logout" in the navigation bar to be logged out and returned to the login page.

# Architecture Diagram

The project is developed according to the structure of an n-tier, model view controller architectural pattern.
![architecture diagram](https://github.com/bevanslabbert/EmployeeTree/blob/main/ArchitectureDiagram.jpg?raw=true)

# Setup Instructions

- Clone this repository.
- Navigate to the EmployeeTree directory in this repository.
- Run `npm install` to install all dependencies required to run the application.
- Run `npm run start` to run the express server and serve the application on localhost:4200.
- Open your browser to `http://localhost:4200`
- Some credentials for testing:
  `username: knopel`
  `password: jjsdiner`
  
# Login

This is the first screen users see when accessing the application.
Users log in with a username and password. The password is compared to the stored password if the username exists in the registed_users collection. The password is hashed using bcrypt (based on the Blowfish cipher) and compared to the stored password that is also hashed with bcrypt (stored passwords are also salted). If the passwords match, the user is logged in and redirected to the home page.

![login](https://github.com/bevanslabbert/EmployeeTree/blob/main/login.png?raw=true)

# Home

From here, users can navigate to other pages.

![home](https://github.com/bevanslabbert/EmployeeTree/blob/main/home.png?raw=true)

# Hierarchy

On this page users can view the employees that report to them and their schedules. Clicking on a user shows their schedule on the right (by default, the logged in user's schedule is displayed).

![hierarchy](https://github.com/bevanslabbert/EmployeeTree/blob/main/hierarchy.png?raw=true)

# Schedules

Logged in users can edit the schedules of the employees that report to them, as well as their own. 
Schedules can be updated, added or removed.

![schedules](https://github.com/bevanslabbert/EmployeeTree/blob/main/schedules.png?raw=true)

This is what the user sees when they want to update or create a schedule item. Initially the "apply" button is inactive. It only becomes active when a change to the schedule item is detected.
A schedule item cannot overlap with another schedule item.
The start time and end time fields are validated using regex to match the correct format (YYYY-MM-DD HH:MM).
Fields can not be empty when updating or creating an item.
Confirmation is required when deleting an item.

![schedule_edit](https://github.com/bevanslabbert/EmployeeTree/blob/main/schedule_edit.png?raw=true)
  

  

