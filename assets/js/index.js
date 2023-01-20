const form = document.getElementById("form");
const username = document.getElementById("username");
const apellidos = document.getElementById("apellidos");
const select = document.getElementById("select");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const email = document.getElementById("email");
const email2 = document.getElementById("email2");
const titMensaje = document.getElementById("titMensaje");
const mensaje = document.getElementById("mensaje");
const submitBtn = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  /*const fd = new FormData(form);
  const obj = Object.fromEntries(fd);

  console.log(obj);*/
  const nombreValue = username.value;
  const titMensajeValue = titMensaje.value;
  const emailValue = email.value;

  localStorage.setItem("first-name", nombreValue);
  localStorage.setItem("titulo-mensaje", titMensajeValue);
  localStorage.setItem("email", emailValue);
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("sucess");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("sucess");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const apellidosValue = apellidos.value.trim();
  const emailValue = email.value.trim();
  const email2Value = email2.value.trim();
  const selectValue = select.value.trim();
  const select2Value = select2.value.trim();
  const select3Value = select3.value.trim();
  const titMensajeValue = titMensaje.value.trim();
  const mensajeValue = mensaje.value.trim();

  if (usernameValue === "") {
    setError(username, "Escribe tu nombre");
  } else {
    setSuccess(username);
  }

  if (apellidosValue === "") {
    setError(apellidos, "Escribe tu apellido");
  } else {
    setSuccess(apellidos);
  }

  if (emailValue === "") {
    setError(email, "Escribe tu email");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Escribe un email valido");
  } else {
    setSuccess(email);
  }

  if (email2Value === "") {
    setError(email2, "Verifica tu email");
  } else if (!isValidEmail(email2Value)) {
    setError(email2, "Escribe un email valido");
  } else if (emailValue !== email2Value) {
    setError(email2, "Los emails no son iguales");
  } else {
    setSuccess(email2);
  }

  if (selectValue === "Selecciona uno") {
    setError(select, "Selecciona una opción");
  } else {
    setSuccess(select);
  }

  if (select2Value === "Selecciona uno") {
    setError(select2, "Selecciona una opción");
  } else {
    setSuccess(select2);
  }

  if (select3Value === "Selecciona uno") {
    setError(select3, "Selecciona una opción");
  } else {
    setSuccess(select3);
  }

  if (titMensajeValue === "") {
    setError(titMensaje, "Escribe un titulo corto");
  } else if (titMensajeValue.length >= 12) {
    setError(titMensaje, "El titulo es muy largo!");
  } else {
    setSuccess(titMensaje);
  }

  if (mensajeValue === "") {
    setError(mensaje, "Escribe un mensaje te atenderemos cuanto antes");
  } else {
    setSuccess(mensaje);
  }

  if (
    usernameValue &&
    apellidosValue &&
    emailValue &&
    email2Value &&
    selectValue &&
    select2Value &&
    select3Value &&
    titMensajeValue &&
    mensajeValue
  ) {
    window.location.href = "next.html";
  }
};
