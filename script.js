function checkNumber() {
  const correctNumber = 19592067303458234906701435909;
  const input = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (parseInt(input) === correctNumber) {
    result.textContent = "Correct number!";
  } else {
    result.textContent = "";
  }
}
