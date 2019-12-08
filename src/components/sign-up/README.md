## Shop component

This is the Signup component that is responsible for displaying the registration components for email/password that communicate with Firebase and Firestore.

In handleSubmit we try to create a new user if the passwords match (there is also a minimum password complexity).

Note that this is done with an await/async call, so the execution of the application will continue while we try this.
