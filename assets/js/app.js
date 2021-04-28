const displayText = document.getElementById("countdown");
var countdown = 5;

window.onload = () => {
    document.querySelector("#wrapper").classList.add("bg-red");

    /* Ejercicio 1
    document.querySelector("#go").classList.add("hidden");
    setInterval(() => {
        if (countdown >= 0) {
            displayText.innerHTML = countdown;
        }
        if (countdown <= 3) {
            document.querySelector("#wrapper").classList.add("bg-yellow");
        }
        if (countdown == 0) {
            document.querySelector("#wrapper").classList.add("bg-green");
            document.querySelector("#go").classList.add("shown");
            displayText.classList.add("hidden");
        }
        countdown--;
    }, 1000);

     */

    /* Ejercicio 2 */
    document.querySelector("#btnGuardar").addEventListener("click", () => {

        document.querySelector("#countdown").classList.remove("hidden");
        document.querySelector("#countdown").classList.add("shown");
        document.querySelector("#mensaje").classList.remove("shown");
        document.querySelector("#mensaje").classList.add("hidden");


        var mensaje = document.querySelector("#msj").value;
        var tiempo = document.querySelector("#tiempo").value;
        var unidad = document.querySelector("#unidades").value;

        var countdown = 0;
        switch (unidad) {
            case "seg":
                {
                    countdown = tiempo;
                    break;
                }
            case "min":
                {
                    countdown = tiempo * 60;
                    break;
                }
            case "hor":
                {
                    countdown = tiempo * 3600;
                    break;
                }
        }

        console.log("El mensaje se mostrará en: " + countdown + " segundos.");

        console.log((countdown) * 1000);

        setTimeout(() => {
            document.querySelector("#mensaje").classList.add("shown");
            document.querySelector("#mensaje").innerHTML = mensaje;
            document.querySelector("#countdown").classList.remove("shown");
            document.querySelector("#countdown").classList.add("hidden");
        }, ((countdown) * 1000) + 1000);

        setInterval(() => {
            if (countdown >= 0) {
                document.querySelector("#countdown").innerHTML = "El mensaje se mostrará en: " + countdown;
            }
            if (countdown == 0) {
                document.querySelector("#countdown").classList.add("hidden");
            }
            countdown--;
        }, 1000);
    });

}