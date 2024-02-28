const restartButton = document.getElementById("restart");
const finishButton = document.getElementById("finish");

restartButton.addEventListener("click", () => {
    window.location.href = "./2_soundmemorygame.html";
})

finishButton.addEventListener("click", () => {
    window.location.href = "./1_title.html";
})
