document
  .getElementById("userForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        messageElement.textContent = "User created successfully!";
        messageElement.style.color = "green";
      } else {
        messageElement.textContent = "Error creating user";
      }
    } catch (error) {
      messageElement.textContent = "Error creating user";
    }
  });
