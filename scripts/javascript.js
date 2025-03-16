const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const linkedinIcon = document.getElementById('linkedin-icon');
const emailIcon = document.getElementById('email-icon');
const arrowRightIcon = document.getElementById('arrow-right');
const arrowLeftIcon = document.getElementById('arrow-left');

const homeContent = document.getElementById("homeContent");
const aboutMeContent = document.getElementById("aboutMeContent");
const homeBtn = document.getElementById("home-btn");
const aboutMeBtn = document.getElementById("about-btn");

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
} else {
  document.body.classList.add('light-mode');
}

function updateIcon() {
  if (document.body.classList.contains('dark-mode')) {
    if(themeIcon) themeIcon.src = 'images/img-icon-sun.png';
    if(linkedinIcon) linkedinIcon.src = "images/img-icon-linkedin-white.png"
    if(emailIcon) emailIcon.src = "images/img-icon-email-white.png"
    if(arrowRightIcon) arrowRightIcon.src = "images/img-arrow-right-black.png"
    if(arrowLeftIcon) arrowLeftIcon.src = "images/img-arrow-left-white.png"
  } else {
    if(themeIcon) themeIcon.src = 'images/img-icon-moon.png';
    if(linkedinIcon) linkedinIcon.src = "images/img-icon-linkedin-black.png"
    if(emailIcon) emailIcon.src = "images/img-icon-email-black.png"
    if(arrowRightIcon) arrowRightIcon.src = "images/img-arrow-right-white.png"
    if(arrowLeftIcon) arrowLeftIcon.src = "images/img-arrow-left-black.png"
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
if(homeBtn)
{
homeBtn.addEventListener('click', function() {
  toggleButton(this);
});

aboutMeBtn.addEventListener('click', function() {
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
homeBtn.addEventListener("click", () => {

  homeContent.classList.add("active");
  aboutMeContent.classList.remove("active");
});

aboutMeBtn.addEventListener("click", () => {

  aboutMeContent.classList.add("active");
  homeContent.classList.remove("active");
});
}

// Profile
const profileImage = document.getElementById("profileImage");

document.querySelector('.myprofile').addEventListener('mouseover', function() {
  if(profileImage) profileImage.src = 'images/img-profile2.png';
}); 

document.querySelector('.myprofile').addEventListener('mouseout', function() {
  if(profileImage) profileImage.src = 'images/img-profile.png';
});


// Gallery
function openModal(imgElement) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("imgModal");
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}