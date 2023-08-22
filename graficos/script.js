const formulario = document.forms[0];

function comprobarFormulario(event) {

    event.preventDefault();

    let faltan = 0;
    let numeros = [];

    for (element of formulario.elements) {

        let tipo = element.type;


        if (tipo === "number") {
            if (element.value) {
                numeros.push(element.value);
            }
            else {
                faltan++;
            }
        }
    }

    let tipoGrafico = document.getElementById("Seleccion").value;
    console.log(faltan);
    console.log(numeros);

    if (faltan > 0) return; 

    document.getElementById("formulario").hidden = true;

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: tipoGrafico,
        data: {
            labels: [
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo",
            ],
            datasets: [
                {
                    label: "Ejemplo con formulario",
                    data: [numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[5], numeros[6]],
                    backgroundColor: "rgba(153,205,1,0.4)",
                },
            ],
        },
    });

}

formulario.addEventListener("submit", comprobarFormulario)