// --- Mobile Menu Toggle ---
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (mobile view)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// --- Scroll-to-Top Button ---
const scrollBtn = document.getElementById("scrollTopBtn");

// Scroll Event Listener
window.addEventListener("scroll", () => {
  // Show/hide scroll-to-top button
  scrollBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";

  // Update nav link highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  let currentSection = null;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  // Near bottom of page, mark last section active
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 5) {
    currentSection = sections[sections.length - 1].getAttribute("id");
  }

  // Clear all nav link active states
  navLinks.forEach(link => link.classList.remove("active"));

  // Add active to the current section's link
  if (currentSection) {
    const activeLink = document.querySelector(`header nav a[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
});

// Scroll to top on button click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
