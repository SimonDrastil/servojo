// ===== INTERACTIONS =====
document.addEventListener("DOMContentLoaded", () => {
  // Waitlist form
  const form = document.querySelector(".waitlist-form");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      message.textContent = "✅ Thanks for joining the waitlist!";
      message.style.color = "lightgreen";
      console.log("Waitlist signup:", email); // placeholder for API call
      form.reset();
    } else {
      message.textContent = "❌ Please enter a valid email address.";
      message.style.color = "tomato";
    }
  });

  // Mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Hero parallax
  const hero = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
    hero.style.setProperty("--scroll", window.scrollY * -0.2 + "px");
  });
});

// ===== EMAIL VALIDATION =====
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// ===== SCROLL REVEAL ANIMATIONS =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .feature-card, .footer").forEach((el) => {
  observer.observe(el);
});
