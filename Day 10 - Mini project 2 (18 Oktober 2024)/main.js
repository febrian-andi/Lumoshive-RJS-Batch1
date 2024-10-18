// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Contact Form
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("input-name");
  const subject = document.getElementById("input-subject");
  const message = document.getElementById("input-message");
  const submitButton = document.getElementById("submit-button");
  const sendText = document.getElementById("send-text");
  const loader = document.getElementById("loader");

  submitButton.disabled = true;
  loader.classList.remove("hidden");
  sendText.classList.add("hidden");

  const formData = {
    to: "fan020203@gmail.com",
    name: name.value,
    subject: subject.value,
    text: message.value,
  };

  fetch("https://lumoshive-academy-email-api.vercel.app/send-email", {
    method: "POST",
    headers: {
      "x-api-key": "RJS1-202408",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);

      Swal.fire({
        title: "Success",
        icon: "success",
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        html: "Your message has been sent<br/> Closed in <b></b> seconds.",
        timer: 3050,
        didOpen: () => {
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });

      name.value = "";
      subject.value = "";
      message.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);

      Swal.fire({
        title: "Error",
        icon: "error",
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        html: "Please try again later.<br/> Closed in <b></b> seconds.",
        timer: 3050,
        didOpen: () => {
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    })
    .finally(() => {
      submitButton.disabled = false;
      loader.classList.add("hidden");
      sendText.classList.remove("hidden");
    });
}
