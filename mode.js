function login() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const error = document.getElementById("error");

      if (username === "" || password === "") {
        error.textContent = "⚠ Please enter both username and password!";
      } else {
        localStorage.setItem("username", username);
        window.location.href = "admin.html";
      }
    }
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark");
      themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const darkMode = body.classList.contains("dark");

      if (darkMode) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      } else {
        themeToggle.textContent = "🌙 ";
        localStorage.setItem("theme", "light");
      }
    });