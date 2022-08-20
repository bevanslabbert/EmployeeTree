# EmployeeTree
Recruiting project for Epi-Use

For this implementation of EmployeeTree, users can manage schedules through a web application interface developed in Angular.

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
- Run `npm run start` to serve the application on localhost:4200.
- Open your browser to `http://localhost:4200`
