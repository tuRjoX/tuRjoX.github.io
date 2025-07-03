document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Stop default form behavior

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xnnvrvwb", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: data
    });

    if (response.ok) {
      // ✅ Show popup alert
      alert("✅ Message Sent Successfully. I will get back to you soon.");

      // ✅ Clear all fields
      form.reset();
    } else {
      // ❌ Show error alert if something went wrong
      alert("❌ Failed to send. Please try again.");
    }
  } catch (error) {
    // ❌ Handle fetch/network error
    alert("❌ Error connecting to server. Please try again later.");
  }
});
