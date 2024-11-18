// JavaScript to handle the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevents the form from submitting and refreshing the page

  // Get the user's name from the input field
  var name = document.getElementById('name').value;

  // Get the email (although we're not using it here, it's captured for completeness)
  var email = document.getElementById('email').value;

  // Get the thank-you message element
  var thankYouMessage = document.getElementById('thank-you-message');

  // Check if the name is entered
  if (name) {
    // Display the thank-you message
    thankYouMessage.textContent = "Thank you, " + name + "! Your message has been submitted.";
  } else {
    // Handle case if no name is entered
    thankYouMessage.textContent = "Please enter your name and email address before submitting.";
  }
});
