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

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
    // Handle adding a new category
    const addCategoryButton = document.querySelector("button");
    const categoryInput = document.querySelector(".category-actions input");
    const categoryList = document.querySelector(".category-list");
  
    addCategoryButton.addEventListener("click", function() {
      const newCategory = categoryInput.value.trim();
  
      // Ensure the input is not empty
      if (newCategory) {
        const newCategoryItem = document.createElement("li");
        newCategoryItem.textContent = newCategory;
        categoryList.appendChild(newCategoryItem);
        categoryInput.value = ''; // Reset the input field
      } else {
        alert("Please enter a category name!");
      }
    });
  
    // Simulate content publishing and toggling overview stats
    const publishButton = document.querySelector("#editor button");
    const publishedCount = document.querySelector(".card:nth-child(1) p");
    const draftsCount = document.querySelector(".card:nth-child(2) p");
  
    publishButton.addEventListener("click", function() {
      const newPost = document.querySelector("#editor textarea").value.trim();
  
      // Check if there is content to publish
      if (newPost) {
        // Update content overview stats
        let publishedPosts = parseInt(publishedCount.textContent) + 1;
        let drafts = parseInt(draftsCount.textContent);
        publishedCount.textContent = `${publishedPosts} posts`;
        draftsCount.textContent = `${drafts - 1} drafts`;
  
        // Simulate clearing the editor after publishing
        document.querySelector("#editor textarea").value = '';
        alert("Content Published!");
      } else {
        alert("Please write some content to publish!");
      }
    });
  
    // Toggle content analytics stats
    const analyticsButton = document.querySelector("#analytics button");
    const analyticsSection = document.querySelector("#analytics .analytics-summary");
  
    analyticsButton.addEventListener("click", function() {
      // Show/hide the analytics section
      if (analyticsSection.style.display === "none") {
        analyticsSection.style.display = "block";
      } else {
        analyticsSection.style.display = "none";
      }
    });
  });
  