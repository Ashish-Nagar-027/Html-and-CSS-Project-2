const hamburger = document.querySelector(".ham")
const List = document.querySelector(".list")

hamburger.addEventListener("click", () => {
    console.log("its working")
    List.classList.toggle("show-links")
})