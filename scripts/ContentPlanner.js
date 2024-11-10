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
    const platformFilter = document.getElementById('platform');
    const statusFilter = document.getElementById('status');
    const calendarGrid = document.querySelector('.calendar-grid');
    const contentCardContainer = document.querySelector('.content-card-container');

    const contentData = [
        { title: 'Content 1', date: '2024-03-15', platform: 'youtube', status: 'scheduled' },
        { title: 'Content 2', date: '2024-03-16', platform: 'instagram', status: 'draft' },
        { title: 'Content 3', date: '2024-03-17', platform: 'youtube', status: 'published' },
        { title: 'Content 4', date: '2024-03-18', platform: 'instagram', status: 'draft' },
    ];

    const daysInMonth = 31; // Example month with 31 days

    function renderCalendar() {
        // Generate empty days in calendar grid
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.setAttribute('draggable', 'true');
            dayElement.textContent = i;
            dayElement.dataset.day = i;
            dayElement.addEventListener('dragstart', (e) => handleDragStart(e));
            dayElement.addEventListener('dragover', (e) => handleDragOver(e));
            dayElement.addEventListener('drop', (e) => handleDrop(e));

            calendarGrid.appendChild(dayElement);
        }
    }

    function handleDragStart(event) {
        event.dataTransfer.setData('text', event.target.dataset.day);
    }

    function handleDragOver(event) {
        event.preventDefault();
        event.target.classList.add('drag-over');
    }

    function handleDrop(event) {
        event.preventDefault();
        const day = event.target.dataset.day;
        const content = contentData.find(item => item.date.includes(day));

        if (content) {
            event.target.classList.remove('drag-over');
            displayContentCard(content);
        }
    }

    function displayContentCard(content) {
        const card = document.createElement('div');
        card.classList.add('content-card', content.status);
        card.innerHTML = `
            <h4>${content.title}</h4>
            <p>Scheduled for: ${content.date}</p>
            <p>Platform: ${content.platform}</p>
        `;
        contentCardContainer.appendChild(card);
    }

    function filterContent() {
        const platform = platformFilter.value;
        const status = statusFilter.value;

        contentCardContainer.innerHTML = ''; // Clear existing content cards

        contentData.forEach(content => {
            if ((platform === 'all' || content.platform === platform) &&
                (status === 'all' || content.status === status)) {
                displayContentCard(content);
            }
        });
    }

    platformFilter.addEventListener('change', filterContent);
    statusFilter.addEventListener('change', filterContent);

    renderCalendar();
    filterContent();
});