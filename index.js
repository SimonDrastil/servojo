// ===== WAITLIST FORM HANDLER =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".waitlist-form");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      message.textContent = "✅ Thanks for joining the waitlist!";
      message.style.color = "lightgreen";

      // Placeholder: Replace this with real backend/Mailchimp API call
      console.log("Waitlist signup:", email);

      form.reset();
    } else {
      message.textContent = "❌ Please enter a valid email address.";
      message.style.color = "tomato";
    }
  });
});

// ===== EMAIL VALIDATION FUNCTION =====
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
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 }
);

// Apply fade-in to all major sections
document.querySelectorAll("section, .feature-card, .footer").forEach((el) => {
  observer.observe(el);
});
