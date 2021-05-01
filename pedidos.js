let tamanho = document.getElementById("tamanho");
let bebidas = document.getElementById("bebidas");

function mostrarOpcs() {
    let checkBox = document.getElementById("pizzaInput");
    let checkBox1 = document.getElementById("bebidaInput");

    if(checkBox.checked == true){
        tamanho.style.display = "inline";
    } else {
        tamanho.style.display = "none";
    };
    if(checkBox1.checked == true){
        bebidas.style.display = "inline";
    } else{
        bebidas.style.display = "none";
    };
};

// let liPedidos = [];
let liPedidos = '';
let adcItens = function() {
    let pizzaSelecionada = tamanho.value;
    let bebidaSelecionada = bebidas.value;
    let obs = document.getElementById("detalhes").value;
    let pedidos = document.getElementById("pedidos");
    let pedidoCompleto = `Pizza ${pizzaSelecionada}, Bebida: ${bebidaSelecionada}. Obs: ${obs}. <br>`;

    liPedidos += pedidoCompleto;
    // liPedidos.push(pedidoCompleto);
    pedidos.innerHTML = liPedidos;
    document.getElementById("detalhes").value ='';
};
