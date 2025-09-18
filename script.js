// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  const icon = menuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
// AOS JS
AOS.init({
  duration: 800,
  once: true,
});

// up down arrow
const scrollBtn = document.getElementById("scrollBtn");
const scrollIcon = document.getElementById("scrollIcon");

function scrollToPosition(target) {
  const start = window.scrollY;
  const distance = target - start;
  const duration = 200; // ms
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    window.scrollTo(0, start + distance * progress);
    if (progress < 1) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

function updateButton() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight; // ✅ safe option
  const clientHeight = window.innerHeight; // ✅ mobile safe

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // bottom reached → arrow up
    scrollIcon.classList.remove("fa-arrow-down");
    scrollIcon.classList.add("fa-arrow-up");
    scrollBtn.onclick = () => scrollToPosition(0);
  } else if (scrollTop <= 0) {
    // top reached → arrow down
    scrollIcon.classList.remove("fa-arrow-up");
    scrollIcon.classList.add("fa-arrow-down");
    scrollBtn.onclick = () => scrollToPosition(scrollHeight);
  }
}

// 👇 scroll resize and listen for mobile browsers
window.addEventListener("scroll", updateButton);
window.addEventListener("resize", updateButton);
updateButton();

// Form submit
const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Page reload prevent

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  try {
    const response = await fetch('http://localhost:5000/send', { // Backend endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Error sending message.');
    }
  } catch (err) {
    console.error(err);
    alert('Server error. Please try again later.');
  }
});