// Accordion for smaller screens
var bar = document.querySelector(".bars");
var cord = document.querySelector(".accordion")
var mini = document.querySelector(".mini")
var list = document.getElementById("delete")

function toggle(menu, accord) {
    menu.addEventListener("click", () => {
        if (accord.style.display === "flex") {
            accord.style.display = "none";
            console.log('block')
        } else {
            accord.style.display = "flex"
            console.log('none')
        }
    });
}

toggle(bar, cord)
toggle(list, mini)

