// Reference to the form element
const form = document.querySelector("form");

// Reference to the Firebase database
const db = firebase.database();

// Handle form submission
form.addEventListener("submit", e => {
  e.preventDefault();

  // Get form data
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // Push data to Firebase
  db.ref("messages").push({
    name,
    email,
    message
  });

  // Clear form fields
  form.elements.name.value = "";
  form.elements.email.value = "";
  form.elements.message.value = "";

  // Show success message
  alert("Thanks for your message! We'll get back to you soon.");
});
