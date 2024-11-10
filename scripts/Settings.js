// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// Set initial theme from localStorage
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Personalized Greeting
function setGreeting() {
    const hours = new Date().getHours();
    const greetingElement = document.getElementById('greeting');

    if (hours < 12) {
        greetingElement.textContent = "Good Morning, Creator!";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon, Creator!";
    } else {
        greetingElement.textContent = "Good Evening, Creator!";
    }
}

// Call the function to set the greeting when the page loads
setGreeting();

// Get all the navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

// Loop through each link and check if it matches the current URL
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active'); // Add the 'active' class to the matching link
    }
});

// Save Profile Information
document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Profile Updated! \nName: ${name} \nEmail: ${email}`);
});

// Enable Two-Factor Authentication
document.getElementById('enable-2fa').addEventListener('click', () => {
    alert('Two-Factor Authentication Enabled');
});

// View Login History
document.getElementById('view-login-history').addEventListener('click', () => {
    alert('Displaying Login History...');
});

// Handle File Upload (for Profile Picture)
document.getElementById('profile-picture').addEventListener('change', () => {
    alert('Profile Picture Uploaded!');
});
