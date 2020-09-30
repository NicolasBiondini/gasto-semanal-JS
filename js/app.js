// Constantes
const presupuestoSemanal = prompt("Igrese su presupuesto semanal:");
const listaGastos = document.querySelector(".list-group");
const form = document.querySelector("#agregar-gasto");

// Clases

class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    restantes(cantidad = 0){
        this.restante -= Number(cantidad);
        return this.restante;
    }
}

class PrintWindow {
    constructor(nombre, cantidad, restante){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.restante = restante;
    }
    // Metodo imprimir gastos en pantalla
    createGasto(){
        let gasto = document.createElement("li");
        gasto.className = "list-group-item d-flex justify-content-between align-items-center";
        gasto.innerHTML = `
        ${this.nombre}
        <span class="badge badge-primary badge-pill">$ ${this.cantidad}</span>
        `;

        listaGastos.appendChild(gasto);
    }

    createResto() {
        document.getElementById("restante").innerText = this.restante;
    }

}

// Funciones
document.addEventListener("DOMContentLoaded", ostia);

function ostia() {
    if(presupuestoSemanal == "" || presupuestoSemanal == null){
        window.location.reload();
    }
    else{
        document.getElementById("restante").innerText = presupuestoSemanal;
        document.getElementById("total").innerText = presupuestoSemanal;    
        const presupuesto1 = new Presupuesto(presupuestoSemanal);

        form.addEventListener("submit", collectData);

        function collectData(e) {
            e.preventDefault();

            const nombreGasto = document.getElementById("gasto").value;
            const cantidadGasto = document.getElementById("cantidad").value;

            if (nombreGasto == "" || cantidadGasto == "") {
                console.log("error");
            }
            else {
                presupuesto1.restantes(Number(cantidadGasto));
                const restante = presupuesto1.restantes();
                let gasto = new PrintWindow(nombreGasto, cantidadGasto, restante);
                gasto.createGasto();
                gasto.createResto();
                
            }
        }
    }
}

