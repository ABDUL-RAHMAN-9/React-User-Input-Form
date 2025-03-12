# UserForm Component
# verview:
- The UserForm component is a simple React form that enables users to input their name and email. Upon submission, it validates the inputs, alerts the user if any fields are missing, logs the input values to the console, and then resets the form fields.

# Features:
- State Management: Uses React's useState hook to manage the name and email states.

- Form Validation: Checks for empty fields before submission. Displays an alert if the form is incomplete.

- Controlled Inputs: Updates the form fields dynamically with the user input.

- Styling: Includes basic styling for the form elements using Tailwind CSS classes.

# Code Structure:
* States:

- name: Stores the user's name.

- email: Stores the user's email.

* Functions:

-handleSubmit: Handles form submission, validates the inputs, logs the data, and resets the form fields.

* UI Elements:

- Text Inputs: For entering name and email, styled with Tailwind CSS.

- Submit Button: Triggers the form submission.

# How to Use:
* Prerequisites:

- Ensure your project is set up with React and has support for Tailwind CSS.

# Import the Component:

```
import UserForm from './UserForm';
```
# Integrate the Component into Your App:
```
<UserForm />
```
# Test the Form:

- Enter a name and email into the fields.

- Click the Submit button. The input will be logged in the browser console.

- If any field is empty, an alert will prompt the user to fill in all fields.
