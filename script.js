const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload
  const name = document.getElementById("name").value;
  response.innerText = `Thank you, ${name}! Your message has been received.`;
  form.reset();
});