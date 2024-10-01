const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".open");
const modalBackdrop = document.querySelector(".modal-backdrop");
const closeBtn = document.querySelector(".close");
const greeting = document.querySelector(".modal-greeting");
const modalContent = document.querySelector(".modal-content");
const username = document.querySelector(".username");
const tel = document.querySelector(".tel");
const errorText = document.querySelector(".error");

let timeout;

const BOT_CONFIG = {
  TOKEN: "7222043961:AAERX5HganHgJoQRJRSruSBaFOQirQQErfI",
  FIRSTCHATID: "-4581962495",
  SECONDCHATID: "-4562687138",
};

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const telegramMessage = `Username: ${username.value}, telephone: ${tel.value}`;
  fetch(
    `https://api.telegram.org/bot${BOT_CONFIG.TOKEN}/sendMessage?chat_id=${BOT_CONFIG.FIRSTCHATID}&text=${telegramMessage}`
  );
  fetch(
    `https://api.telegram.org/bot${BOT_CONFIG.TOKEN}/sendMessage?chat_id=${BOT_CONFIG.SECONDCHATID}&text=${telegramMessage}`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        greeting.textContent = "We will call you back.";
        cleaning();
      } else {
        greeting.textContent = "ERROR";
        cleaning();
        throw new Error(res.description);
      }
      finalMoves();
    })
    .catch((error) => {
      greeting.textContent = "ERROR";
      cleaning();
      finalMoves();
    });
});

modalOpen.addEventListener("click", () => {
  if (greeting.classList.contains("show-modal-greeting")) {
    modalContent.classList.remove("form-display-changer");
    greeting.classList.remove("show-modal-greeting");
  }
  modalBackdrop.classList.add("show-modal-backdrop");
  modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", () => {
  remover();
  checker();
  cleaning();
});

modalBackdrop.addEventListener("click", () => {
  remover();
  checker();
  cleaning();
});

const remover = () => {
  modalBackdrop.classList.remove("show-modal-backdrop");
  modal.classList.remove("show-modal");
};

const checker = () => {
  if (timeout) {
    clearTimeout(timeout);
  }
};

const finalMoves = () => {
  greeting.classList.add("show-modal-greeting");
  modalContent.classList.add("form-display-changer");
  timeout = setTimeout(() => {
    modalBackdrop.classList.remove("show-modal-backdrop");
    modal.classList.remove("show-modal");
  }, 2000);
};

const cleaning = () => {
  username.value = '';
  tel.value = '';
}