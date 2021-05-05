let maxSeats = 208;
let selectedSeat = []
let div = document.getElementById("seats")
let inptValue = document.getElementById("inputSeat")

inptValue.addEventListener('keypress', (tecla) => {
    if (tecla.keyCode == 13) {
        selectInputItem()
    };
});

function createSeats() {
    for (i = 1; i <= maxSeats; i++) {
        let btn = document.createElement("button")
        btn.innerHTML = `<img src="armchair.png" alt="Poltrona"><br>${i}`

        btn.id = i
        btn.className = "seat"
        btn.setAttribute("onclick", `selectSeat(${i - 1})`)

        div.appendChild(btn)
        selectedSeat[i-1] = false
    }
    
}
createSeats()

let buttons = document.getElementsByTagName("button")

let selectInputItem = function () {
    if (inptValue.value !== "") {
        selectSeat(inptValue.value - 1)
    }
    document.getElementById("inputSeat").value = ""
}

let selectSeat = function (i) {
    let corAtual = buttons[i]
    if(corAtual.style.backgroundColor == "red"){
        corAtual.style.backgroundColor = "white"
        selectedSeat[i] = false
        
    } else {
        corAtual.style.backgroundColor = "red"
        selectedSeat[i] = true
    }
    localStorage.setItem("selectedSeat", selectedSeat)
}

let savedSeats = function(){
    let assSelecionados =  localStorage.getItem("selectedSeat").split(",")
    for(i in assSelecionados){
        console.log(assSelecionados[i])
        if(assSelecionados[i] == "true"){
            selectSeat(i)
        }
    }
}

savedSeats()