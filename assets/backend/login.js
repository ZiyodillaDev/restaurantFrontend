const loginForm = document.querySelector(".loginForm");
const loginEmail = document.querySelector(".loginEmail");
const loginPassword = document.querySelector(".loginPassword");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    username: loginEmail.value,
    password: loginPassword.value,
  };

  fetch("http://localhost:5000/api/auth/admin/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.token) {
        Toastify({
          text: "Successfully login as admin",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "green",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        setTimeout(() => {
          location.href = "../index.html";
        }, 500);
      }
    })
    .catch((err) => console.log(err));
});
