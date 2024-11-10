// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// Set the initial theme based on the user's preference in localStorage
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

// Pre-Stream Setup functionality
document.getElementById('schedule-stream').addEventListener('click', function() {
    const title = document.getElementById('stream-title').value;
    const description = document.getElementById('stream-description').value;
    const monetization = document.getElementById('monetization').checked;
    
    if (title && description) {
        console.log(`Stream scheduled with title: ${title}, monetization: ${monetization}`);
        // Backend integration would go here for scheduling the stream
    } else {
        alert("Please enter a title and description for the stream.");
    }
});

// Live Chat functionality
document.getElementById('send-chat').addEventListener('click', function() {
    const message = document.getElementById('chat-message').value;
    if (message.trim()) {
        const chatFeed = document.getElementById('chat-feed');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        chatFeed.appendChild(messageDiv);
        document.getElementById('chat-message').value = '';
    }
});

// Chat input key event to send message (Enter key)
document.getElementById('chat-message').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        document.getElementById('send-chat').click();
    }
});

// Stream Controls functionality
document.getElementById('start-stream').addEventListener('click', function() {
    console.log('Stream Started');
    // Integrate backend logic for starting the stream
});

document.getElementById('end-stream').addEventListener('click', function() {
    console.log('Stream Ended');
    // Integrate backend logic for ending the stream
});

document.getElementById('mute-audio').addEventListener('click', function() {
    const button = document.getElementById('mute-audio');
    button.textContent = button.textContent === 'Mute Audio' ? 'Unmute Audio' : 'Mute Audio';
    // Add actual audio muting logic here
});

document.getElementById('mute-video').addEventListener('click', function() {
    const button = document.getElementById('mute-video');
    button.textContent = button.textContent === 'Mute Video' ? 'Unmute Video' : 'Mute Video';
    // Add actual video muting logic here
});

// Stream Quality Change functionality
document.getElementById('quality').addEventListener('change', function() {
    const quality = document.getElementById('quality').value;
    console.log(`Stream quality set to: ${quality}`);
    // Implement actual quality change logic here
});

// Function to handle donation and super chat (to be integrated with backend)
document.getElementById('donate').addEventListener('click', function() {
    console.log('Redirecting to donation page...');
    // Redirect or integrate donation system here
});

document.getElementById('super-chat').addEventListener('click', function() {
    console.log('Redirecting to Super Chat...');
    // Redirect or integrate Super Chat system here
});
