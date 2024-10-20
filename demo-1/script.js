const main = document.getElementsByTagName('main')[0]
const nav = document.getElementsByTagName('nav')[0]
const aside = document.getElementsByTagName('aside')[0]
// Select all user elements
const users = document.querySelectorAll('.user');

// Add click event listener to each user element
users.forEach((user) => {
  user.addEventListener('click', () => {
   main.classList.toggle('active')
  });
});

// Select all title elements inside .user
const titles = document.querySelectorAll('.user .title');

// Add click event listener to each title element
titles.forEach((title) => {
  title.addEventListener('click', (event) => {
    // Show an alert when the title is clicked
    alert('Title clicked!');
    
    // Stop the event from bubbling up to the user div
    event.stopPropagation();
  });
});
