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



document.addEventListener("DOMContentLoaded", function() {
    // Grab elements
    const createPostForm = document.getElementById('create-post-form');
    const titleInput = document.getElementById('post-title');
    const contentTextarea = document.getElementById('post-content');
    const fileInput = document.getElementById('post-image');
    const submitButton = document.getElementById('submit-post');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    // Enable the submit button only if title and content are filled out
    createPostForm.addEventListener('input', function() {
        if (titleInput.value && contentTextarea.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });

    // Form submission handler
    createPostForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Basic Validation
        if (!titleInput.value || !contentTextarea.value) {
            errorMessage.textContent = "Please fill out both the title and content fields.";
            errorMessage.style.display = "block";
            return;
        } else {
            errorMessage.style.display = "none";
        }

        // Prepare data to send (you can later add file upload logic if necessary)
        const postData = {
            title: titleInput.value,
            content: contentTextarea.value,
            image: fileInput.files[0] || null
        };

        // Simulate an API request (replace with actual API call in a real app)
        fakeApiPostRequest(postData)
            .then(response => {
                // Success message and reset form
                successMessage.textContent = "Your post has been created successfully!";
                successMessage.style.display = "block";
                createPostForm.reset();
                submitButton.disabled = true;
            })
            .catch(error => {
                // Error message if something goes wrong
                errorMessage.textContent = "Something went wrong, please try again.";
                errorMessage.style.display = "block";
            });
    });

    // Fake API request function for simulating server interaction
    function fakeApiPostRequest(postData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (use 'reject' for failure)
                resolve("Post created successfully!");
            }, 1000);
        });
    }
});
