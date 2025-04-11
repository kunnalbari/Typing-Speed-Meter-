let startTime;

function startTest() {
  document.getElementById("input-text").value = "";
  document.getElementById("result").textContent = "";
  startTime = new Date();
}

function endTest() {
  const endTime = new Date();
  const typedText = document.getElementById("input-text").value;
  const timeTaken = (endTime - startTime) / 1000;

  const words = typedText.trim().split(" ").filter(word => word !== "");
  const speed = Math.round((words.length / timeTaken) * 60);

  document.getElementById("result").textContent =
    "Typing Speed: " + speed + " words per minute";
}
