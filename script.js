function checkNumber() {
  const correctNumber = 19592067303458234906701435909;
  const input = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (parseInt(input) === correctNumber) {
    result.textContent = "Voad is the night. Rise up and down! you peasants shall quiver in his presence.";
  } else {
    result.textContent = "";
  }
}
