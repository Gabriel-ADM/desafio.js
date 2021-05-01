let maxSeats = 208;
let div = document.getElementById("seats")

function createSeats() {
    for (i = 1; i <= maxSeats; i++) {
        let btn = document.createElement("button")
        btn.innerHTML = `<img src="armchair.png" alt="Poltrona" onclick=""><br>${i}`

        btn.id = i
        btn.className = "seat"

        div.appendChild(btn)
    }
}
createSeats()

let buttons = document.getElementsByTagName("button")
let selectSeat = function () {
    for (i = 0; i < buttons; i++) {
        buttons[i].style.color = "red"
    }
}