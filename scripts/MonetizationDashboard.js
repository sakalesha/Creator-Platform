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

document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching monetization data (could be from an API)
    const earningsData = {
        daily: 1500,
        weekly: 10500,
        monthly: 45000,
        affiliate: { clicks: 1200, commissions: 3000 },
        subscriptions: [
            { tier: 1, subscribers: 50, earnings: 5000 },
            { tier: 2, subscribers: 20, earnings: 2500 },
            { tier: 3, subscribers: 10, earnings: 1000 },
        ],
        liveDonations: { superChats: 2500, donations: 1000 },
    };

    // Update overview stats
    document.querySelector('#daily-earnings').textContent = `₹${earningsData.daily}`;
    document.querySelector('#weekly-earnings').textContent = `₹${earningsData.weekly}`;
    document.querySelector('#monthly-earnings').textContent = `₹${earningsData.monthly}`;

    // Update affiliate marketing stats
    document.querySelector('#affiliate-clicks').textContent = earningsData.affiliate.clicks;
    document.querySelector('#affiliate-commissions').textContent = `₹${earningsData.affiliate.commissions}`;

    // Update fan subscriptions
    earningsData.subscriptions.forEach((subscription, index) => {
        document.querySelector(`#fan-subscriptions .subscription-tier:nth-child(${index + 1}) h3`).textContent = `Tier ${subscription.tier}`;
        document.querySelector(`#fan-subscriptions .subscription-tier:nth-child(${index + 1}) p:nth-child(2)`).textContent = `${subscription.subscribers} Subscribers`;
        document.querySelector(`#fan-subscriptions .subscription-tier:nth-child(${index + 1}) p:nth-child(3)`).textContent = `₹${subscription.earnings}`;
    });

    // Update live donations stats
    document.querySelector('#super-chats').textContent = `₹${earningsData.liveDonations.superChats}`;
    document.querySelector('#donations').textContent = `₹${earningsData.liveDonations.donations}`;
});
