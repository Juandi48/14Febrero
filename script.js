document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const mainContent = document.getElementById("mainContent");
    const messageScreen = document.getElementById("messageScreen");

    yesButton.addEventListener("click", () => {
        mainContent.classList.add("hidden");
        messageScreen.classList.remove("hidden");
        document.body.style.background = "#fff8dc";
        createFlower();
    });

    noButton.addEventListener("mouseover", () => {
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 100);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    function createFlower() {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = `${Math.random() * 90}vw`;
        flower.style.top = `${Math.random() * 90}vh`;
        document.body.appendChild(flower);
    }
});
