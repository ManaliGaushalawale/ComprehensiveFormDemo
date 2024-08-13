document.getElementById("myForm").addEventListener("click", function (e) {
  e.stopPropagation();

  const inputElement = e.target.closest("input, select, textarea");
  if (inputElement) {
    console.log("Form field clicked or focused:", inputElement.name);
  } else {
    console.log("Clicked element is not a form field");
  }
});

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password")
    ? document.getElementById("password").value
    : "";
  const confirmPassword = document.getElementById("confirmPassword")
    ? document.getElementById("confirmPassword").value
    : "";

  if (password && confirmPassword && password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    alert("Form submitted successfully!");
  }
});
