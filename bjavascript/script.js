document.getElementById('signup-form').addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    // Retrieve form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("password_confirmation").value;
 
    // Basic form validation
    if (!name || !email || !password || !passwordConfirmation) {
        alert("Please fill in all the fields!");
        return false;
    }
    
    if (password !== passwordConfirmation) {
        alert("Passwords do not match!");
        return false;
    }

    // Store user details in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Redirect to index.html
    window.location.href = "../chtml/index.html"; // Updated path to index.html
});
