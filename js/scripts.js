/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


let currentGroup = 0;
const items = document.querySelectorAll('.item');
const totalGroups = 3; // 9 items / 3 per group = 3 groups

// Function to show the group of 3 items
function showGroup(groupIndex) {
    const startIndex = groupIndex * 3;
    const endIndex = startIndex + 3;
    
    // Hide all items first
    items.forEach(item => item.classList.remove('active'));
    
    // Show the items in the current group
    for (let i = startIndex; i < endIndex; i++) {
        if (items[i]) {
            items[i].classList.add('active');
        }
    }
}

// Function to cycle through groups every 20 seconds
function cycleGroups() {
    showGroup(currentGroup);
    currentGroup = (currentGroup + 1) % totalGroups;
}

// Start cycling every 20 seconds (20000 milliseconds)
setInterval(cycleGroups, 4000);

// Initial call to show the first group
cycleGroups();
