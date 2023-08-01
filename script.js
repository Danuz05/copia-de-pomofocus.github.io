const X = document.querySelector(".close");
const menu = document.querySelector(".plantilla");
const openReport = document.querySelector(".BTN1");
const azul = document.querySelector(".BTN-AZUL");
const rojo = document.querySelector(".rojo");
const tiempo = document.querySelector(".tiempo")
const pomodoro = document.querySelector(".BTN-ROJO")
const botones = document.querySelectorAll(".btn1")
const botones2 = document.querySelectorAll(".btn2")
const parteBaja = document.querySelector(".parte-baja")
const start = document.querySelector(".empezar3")
const plus = document.querySelector(".plus")
const blue = document.querySelector(".BTN-AZUL2")



blue.addEventListener("click", () => {
    rojo.classList.toggle("blue")
    parteBaja.classList.toggle("parte-baja-blue")

    start.classList.toggle("star2")

    if (!start.classList.contains("star2")) {
        start.classList.add("star2")
    }

    botones.forEach((boton) => {
        boton.classList.remove("rojo-active")
    })



    botones2.forEach((boton2) => {
        boton2.classList.toggle("boton-blue")

        if (!boton2.classList.contains("boton-blue")) {
            boton2.classList.add("boton-blue")
        }
    })

    if (!parteBaja.classList.contains("parte-baja-blue")) {
        parteBaja.classList.add("parte-baja-blue")
    }

    if (!rojo.classList.contains("blue")) {
        rojo.classList.add("blue")
    }
})

pomodoro.addEventListener("click", () => {
    
    rojo.classList.toggle("rojo-active")
    rojo.classList.remove("azul-active", "blue")
    parteBaja.classList.remove("parte-baja-active")
    start.classList.remove("empezar-active")
    parteBaja.classList.remove("parte-baja-blue")
    start.classList.remove("star2")

    botones2.forEach((boton2) => {
        boton2.classList.remove("boton-active2")
    })

    if (!rojo.classList.contains("rojo-active")) {
        rojo.classList.add("rojo-active")
    }

})


azul.addEventListener("click", () => {
    azul.classList.remove("blue")
    azul.classList.remove("rojo-active")
    if (!rojo.classList.contains("azul-active")) {
        rojo.classList.add("azul-active");
    }
});

azul.addEventListener("click", () => {
    rojo.classList.remove("blue")
    parteBaja.classList.remove("parte-baja-blue")
})


azul.addEventListener("click", () => {
    start.classList.toggle("empezar-active")
    if (!start.classList.contains("empezar-active")) {
        start.classList.add("empezar-active")
    }
})

azul.addEventListener("click", () => {
    botones.forEach((boton) => {
        boton.classList.toggle("boton-active")
        if (!boton.classList.contains("boton-active")) {
            boton.classList.add("boton-active")
        }
    })
})

azul.addEventListener("click", () => {
    botones2.forEach((boton2) => {
        boton2.classList.toggle("boton-active2")
        if (!boton2.classList.contains("boton-active2")) {
            boton2.classList.add("boton-active2")
        }
    })
})

azul.addEventListener("click", () => {
    parteBaja.classList.toggle("parte-baja-active")
    if (!parteBaja.classList.contains("parte-baja-active")) {
        parteBaja.classList.add("parte-baja-active")
    }
})


openReport.addEventListener("click", () => {
    menu.style.display = "block";
});

X.addEventListener("click", () => {
    menu.style.display = "none";
});




