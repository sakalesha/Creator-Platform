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


// Fetch data from the backend route
fetch('http://localhost:3000/api/dashboard')
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
        // Display the data dynamically in the HTML
        document.getElementById('greeting').textContent = data.user.greeting;
        document.querySelector('.followers').textContent = "Followers: " + data.metrics.followers;
        document.querySelector('.upcoming-posts').textContent = data.posts.length;

        // Display post titles dynamically
        const upcomingPosts = document.querySelector('.upcoming-posts');
        data.posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.textContent = `${post.title} - ${post.date}`;
            upcomingPosts.appendChild(postDiv);
        });

        document.querySelector('.revenue').textContent = "Revenue: " + data.metrics.revenue;
        document.querySelector('.liveStreams').textContent = "Live Streams: " + data.metrics.live_streams;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// Example: Dynamic content update for upcoming posts
const upcomingPosts = document.querySelector(".upcoming-posts");

const posts = [
    { title: "Post 1", date: "2024-11-15" },
    { title: "Post 2", date: "2024-11-16" },
];

posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.textContent = `${post.title} - ${post.date}`;
    upcomingPosts.appendChild(postDiv);
});

// Example of placeholder graphs (to be updated with real data later)
const engagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Engagement Trends',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
    }]
};

const revenueData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [{
        label: 'Revenue Breakdown',
        data: [1000, 2000, 1500, 3000],
        backgroundColor: ['#FF5733', '#FF8D1A', '#FFC300', '#DAF7A6'],
        hoverOffset: 4
    }]
};

// Create Engagement Trends Line Chart
const ctxEngagement = document.getElementById('engagement-trends').getContext('2d');
const engagementChart = new Chart(ctxEngagement, {
    type: 'line',
    data: engagementData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Engagement Trends Over Time'
            },
            legend: {
                position: 'top',
            }
        }
    }
});

// Create Revenue Breakdown Pie Chart
const ctxRevenue = document.getElementById('revenue-breakdown').getContext('2d');
const revenueChart = new Chart(ctxRevenue, {
    type: 'pie',
    data: revenueData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Revenue Breakdown by Product'
            },
            legend: {
                position: 'top',
            }
        }
    }
});


// Current Live Stream Data (fetch dynamically or use mock data)
fetch('http://localhost:3000/api/liveStream') // Adjust API endpoint
    .then(response => response.json())
    .then(data => {
        const title = document.getElementById('live-stream-title');
        const status = document.getElementById('live-stream-status');
        const viewers = document.getElementById('live-stream-viewers');
        const joinButton = document.getElementById('join-button');
        const donateButton = document.getElementById('donate-button');
        
        // Update live stream data dynamically
        title.textContent = data.stream.title;
        status.textContent = data.stream.status;  // e.g., "Live" or "Not Live"
        viewers.textContent = `Viewers: ${data.stream.viewers}`;
        
        // Enable or disable buttons based on live stream status
        if (data.stream.status === 'Live') {
            joinButton.disabled = false;
            donateButton.disabled = false;
        } else {
            joinButton.disabled = true;
            donateButton.disabled = true;
        }
    })
    .catch(error => {
        console.error('Error fetching live stream data:', error);
    });

// Function to handle "Join Stream" button click
function joinStream() {
    // Logic for joining the live stream (e.g., opening a video player)
    alert('Joining the stream...');
}

// Function to handle "Donate" button click
function donate() {
    // Logic for donation (e.g., open a payment gateway)
    alert('Thank you for your donation!');
}