const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const linkedinIcon = document.getElementById('linkedin-icon');
const emailIcon = document.getElementById('email-icon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
} else {
  document.body.classList.add('light-mode');
}

function updateIcon() {
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.src = 'images/img-icon-sun.png';
    linkedinIcon.src = "images/img-icon-linkedin-white.png"
    emailIcon.src = "images/img-icon-email-white.png"
  } else {
    themeIcon.src = 'images/img-icon-moon.png';
    linkedinIcon.src = "images/img-icon-linkedin-black.png"
    emailIcon.src = "images/img-icon-email-black.png"
  }
}

updateIcon();

themeToggle.addEventListener('click', (event) => {
  event.preventDefault();

  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light-mode');
  } else {
    document.body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  }

  updateIcon();
});

//Button menu

document.getElementById('home-btn').addEventListener('click', function() {
  toggleButton(this);
});

document.getElementById('about-btn').addEventListener('click', function() {
  toggleButton(this);
});

function toggleButton(button) {
  console.log("Toggle ");
  const buttons = document.querySelectorAll('.menu-button');
  buttons.forEach(function(btn) {
      btn.classList.remove('selected');
  });
  button.classList.toggle('selected');
}


//Home & AboutMe
const homeContent = document.getElementById("homeContent");
const aboutMeContent = document.getElementById("aboutMeContent");
const homeBtn = document.getElementById("home-btn");
const aboutMeBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", () => {

  homeContent.classList.add("active");
  aboutMeContent.classList.remove("active");
});

aboutMeBtn.addEventListener("click", () => {

  aboutMeContent.classList.add("active");
  homeContent.classList.remove("active");
});

// Profile

document.querySelector('.myprofile').addEventListener('mouseover', function() {
  document.getElementById('profileImage').src = 'images/img-profile2.png';
});

document.querySelector('.myprofile').addEventListener('mouseout', function() {
  document.getElementById('profileImage').src = 'images/img-profile.png';
});
