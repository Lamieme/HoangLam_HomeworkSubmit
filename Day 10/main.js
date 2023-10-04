// Password uppercase check function
function containsUppercase(password) {
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Check if the character is uppercase
            return true;
        }
    }
    return false;
}

// Function to validate the registration form
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user inputs
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check if email already exists 
    var existingEmails = ["abc@gmail.com", "abc12@gmail.com", "abc123@gmail.com"];
    if (existingEmails.includes(email)) {
        alert("Email already exists. Please use a different email.");
        return;
    }

    // Check password criteria
    if (password.length < 6 || !containsUppercase(password)) {
        alert("Password must be at least 6 characters long and contain at least 1 uppercase letter.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save registration information to localStorage
    var user = {
        email: email,
        password: password
    };
    existingEmails.push(email);
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
});

// Function to handle login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user inputs
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Retrieve user from localStorage
    var user = JSON.parse(localStorage.getItem("user"));

    // Check if user exists and passwords match
    if (user && user.email === loginEmail && user.password === loginPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
});