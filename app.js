(function () {
  let screen = document.getElementById("screen");
  let buttons = document.querySelectorAll(".btn");
  let answer = "";

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.innerHTML == "=") {
        answer = eval(screen.value);
        screen.value = answer;
      } else if (e.target.innerHTML == "C") {
        screen.value = "";
      } else {
        screen.value += e.target.innerHTML;
      }
    });
  });
})();
