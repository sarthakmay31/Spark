# Test Design Document

## Application: Spark Rock Customer Success Center

### Features/Functionalities to Test:

1. **Customer Registration:**
   - **Valid Registration:** Validate that customers can register themselves on the Spark Rock customer portal.
   - **Registration Form Validations:** Validate that input field error messages are displayed when the criteria for input by the user during registration are not met.
   
2. **Login:**
   - **Valid Login:** Validate that customers can log in to the application with correct credentials.
   - **Invalid Login:** Validate that an error message is displayed when incorrect credentials are entered by the customer on the login page.

### Test Cases

| Test Case ID | Feature                | Test Case Title           | Test Steps                                                                                                                                       | Expected Results                                                         |
|--------------|------------------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| TC001        | Customer Registration  | Valid Registration        | 1. Navigate to registration page  2. Enter valid details  3. Submit the form                                                             | User is registered successfully and redirected to the dashboard          |
| TC002        | Customer Registration  | Registration Form Validation | 1. Navigate to registration page  2. Enter invalid details 3. Submit the form                                                           | Error messages are displayed for invalid input fields                    |
| TC003        | Login                  | Valid Login               | 1. Navigate to login page  2. Enter valid credentials  3. Submit the form                                                                | User is logged in successfully and redirected to the dashboard           |
| TC004        | Login                  | Invalid Login             | 1. Navigate to login page  2. Enter invalid credentials  3. Submit the form                                                              | Error message is displayed indicating incorrect credentials              |
| TC005        | Customer Registration  | Duplicate Registration    | 1. Navigate to registration page  2. Enter details of an already registered user  3. Submit the form                                     | Error message is displayed indicating the user is already registered     |

### Test Strategy:

1. **Manual Testing:**
   - Perform in-depth manual testing to confirm the functionality and usability of essential user flows, including main menu navigation, product page exploration, and contact form submissions.
   - This hands-on approach allows for a detailed assessment of the website’s features, ensuring the user experience is seamless and intuitive.

2. **Automated Testing:**
   - Create automated tests for tasks that are repetitive or likely to regress, such as checking links on multiple pages, validating form inputs, and ensuring consistent page rendering across different devices and browsers.
   - Automated testing improves efficiency and provides rapid feedback on the website’s stability after code changes or updates.

### Rationale:

1. **Login Page:**
   - **Valid Login:**
     - **Rationale:** Validating the login functionality is crucial as it is the primary access point for users. Ensuring that only authenticated users can access the application maintains security and user privacy.
   - **Invalid Login:**
     - **Rationale:** It is essential to test invalid login attempts to ensure that the application can handle unauthorized access attempts gracefully and provide appropriate feedback to users. This enhances security and user experience by preventing unauthorized access.
   
2. **Register Page:**
   - **Valid Registration:**
     - **Rationale:** Ensuring that the registration process works correctly is vital for onboarding new users. A seamless registration process improves user acquisition and satisfaction. Verifying that new users can log in with their credentials confirms the integrity and functionality of the registration process.

### Prioritization and Alignment with Application Use Case:

The tests are prioritized based on the application's primary use cases. The login and registration functionalities are fundamental for user interaction with the Spark Rock Customer Success Center. Ensuring these core functionalities work correctly aligns with the goal of providing a secure and user-friendly platform for customer success management.


### Overview of Allure Reports On Execution Completion Of Tests:
<img width="1385" alt="Screenshot 2024-06-28 at 10 34 41 AM" src="https://github.com/sarthakmay31/Spark/assets/47483105/b1200d91-56b3-4749-b7e5-6f02e88e0da8">
<img width="1389" alt="Screenshot 2024-06-28 at 10 35 08 AM" src="https://github.com/sarthakmay31/Spark/assets/47483105/fae8dabe-0a8c-4748-b34c-f482729b93a7">
<img width="1395" alt="Screenshot 2024-06-28 at 10 35 15 AM" src="https://github.com/sarthakmay31/Spark/assets/47483105/1d2100aa-0a35-424a-9cb2-e88fd0a30c6b">

### Link to the video:

https://drive.google.com/file/d/1WZIjxCPg2kdUdt2O7HKs6x4D5uCGVNfJ/view?usp=sharing
