 const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const userMsg = document.getElementById("userMsg");
  const emailMsg = document.getElementById("emailMsg");
  const passMsg = document.getElementById("passMsg");
  const confirmMsg = document.getElementById("confirmMsg");

  const submitBtn = document.getElementById("submitBtn");

  function validate() {
    let valid = true;

    // Username
    if (username.value.length < 3) {
      userMsg.textContent = "Username must be at least 3 characters";
      userMsg.className = "error";
      valid = false;
    } else {
      userMsg.textContent = "Looks good!";
      userMsg.className = "success";
    }

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      emailMsg.textContent = "Enter a valid email";
      emailMsg.className = "error";
      valid = false;
    } else {
      emailMsg.textContent = "Valid email!";
      emailMsg.className = "success";
    }

    // Password
    if (password.value.length < 6) {
      passMsg.textContent = "Password must be at least 6 characters";
      passMsg.className = "error";
      valid = false;
    } else {
      passMsg.textContent = "Strong password!";
      passMsg.className = "success";
    }

    // Confirm Password
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
      confirmMsg.textContent = "Passwords do not match";
      confirmMsg.className = "error";
      valid = false;
    } else {
      confirmMsg.textContent = "Passwords match!";
      confirmMsg.className = "success";
    }

    submitBtn.disabled = !valid;
  }

  username.addEventListener("input", validate);
  email.addEventListener("input", validate);
  password.addEventListener("input", validate);
  confirmPassword.addEventListener("input", validate);