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
    window.location.href = "a_maininterface.html" // Updated path to index.html
});

document.getElementById('message-us').addEventListener('submit', function(event) {
    event.preventDefault();
        
    var name = document.getElementById('ms-name').value;
    var birthdate = document.getElementById('ms-birthdate').value;
    var gender = document.getElementById('ms-gender').value;
    var message = document.getElementById('ms-message').value;

    document.getElementById('result-name').textContent = name;
    document.getElementById('result-birthdate').textContent = birthdate;
    document.getElementById('result-gender').textContent = gender;
    document.getElementById('result-message').textContent = message;

    this.reset(); // Optional: Reset the form after submission
});
