# Hack Frontend
HACK is an application created for HACK Employees and HR. This application let them check their profile and project details. Also, they can give their daily updates.

This is an assignment for full stack program. Here HACK comes from teammates first letter.

### HACK Main Features
 - Provides authentication and authorization on specific pages
 - Provides rights to Admin to initialize data for pprojects and their respective HR's (one Project has only one HR).
 - Shows HR project details and daily updates to HR. HR can give daily updates.
 - Provides rights to HR to initialize Employees data for their project and create accounts.
 - Shows Employee project details, HR details and daily updates to Employee. Employee can give daily updates.
 - Shows all project employee details to HR and also their daily updates.

### Prerequisites
 - Angular 15
 - npm

### Setup
 #### Start Server
  ```
    https://github.com/himanshuvarandani/hack.git
  ```
 
 #### Run Application
  ```
    ng serve --open
  ```
 
### Initialization
 #### Login as Admin and Initialize Application Data
  - Go to 'http://localhost:4200/login' and give below credentials
    ```
      Username: admin
      Password: password
    ```
  - Go to 'Initialize Data' and upload 'HACKInitialData.xlsx' from 'src/assets/documents' and click on submit
  - Update data as you want and check the passwords for HR
  - Click on logout
 
 #### Login as HR
  - Go to Login Page and give HR credentials as initialized above
  - Check all features
  - Go to 'AddEmployees' Link on '/hr' page
  - Upload 'HACKProjectEmployeeData.xlsx' from 'src/assets/documents' and click on submit
  - Update data as you want and check the passwords for Employee
  - Click on logout
 
 #### Login as Employee
  - Go to Login Page and give Employee credentials as initialized above
  - Check all features
