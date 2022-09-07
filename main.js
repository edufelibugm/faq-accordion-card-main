// Definir elementos
const invite = document.querySelector(".invite")
const size = document.querySelector(".size")
const password = document.querySelector(".password")
const subscription = document.querySelector(".subscription")
const support = document.querySelector(".support")

// Escuchar clicks
    // Invite
    invite.addEventListener('click', () => {
        // Acciones
        document.querySelector(".a-one").classList.toggle("deg")
        document.querySelector(".p-one").classList.toggle("show")
        document.querySelector(".invite").classList.toggle("focus")

        // Eliminar otras propiedades en X
        document.querySelector(".a-two").classList.remove("deg")
        document.querySelector(".p-two").classList.remove("show")
        document.querySelector(".size").classList.remove("focus")

        document.querySelector(".a-three").classList.remove("deg")
        document.querySelector(".p-three").classList.remove("show")
        document.querySelector(".password").classList.remove("focus")

        document.querySelector(".a-four").classList.remove("deg")
        document.querySelector(".p-four").classList.remove("show")
        document.querySelector(".subscription").classList.remove("focus")

        document.querySelector(".a-five").classList.remove("deg")
        document.querySelector(".p-five").classList.remove("show")
        document.querySelector(".support").classList.remove("focus")
    })

    // Size
    size.addEventListener('click', () => {
        document.querySelector(".a-two").classList.toggle("deg")
        document.querySelector(".p-two").classList.toggle("show")
        document.querySelector(".size").classList.toggle("focus")

        // Eliminar otras propiedades en X
        document.querySelector(".a-one").classList.remove("deg")
        document.querySelector(".p-one").classList.remove("show")
        document.querySelector(".invite").classList.remove("focus")

        document.querySelector(".a-three").classList.remove("deg")
        document.querySelector(".p-three").classList.remove("show")
        document.querySelector(".password").classList.remove("focus")

        document.querySelector(".a-four").classList.remove("deg")
        document.querySelector(".p-four").classList.remove("show")
        document.querySelector(".subscription").classList.remove("focus")

        document.querySelector(".a-five").classList.remove("deg")
        document.querySelector(".p-five").classList.remove("show")
        document.querySelector(".support").classList.remove("focus")
    })

    // Password
    password.addEventListener('click', () => {
        // Acciones
        document.querySelector(".a-three").classList.toggle("deg")
        document.querySelector(".p-three").classList.toggle("show")
        document.querySelector(".password").classList.toggle("focus")

        // Eliminar otras propiedades en X
        document.querySelector(".a-one").classList.remove("deg")
        document.querySelector(".p-one").classList.remove("show")
        document.querySelector(".invite").classList.remove("focus")

        document.querySelector(".a-two").classList.remove("deg")
        document.querySelector(".p-two").classList.remove("show")
        document.querySelector(".size").classList.remove("focus")

        document.querySelector(".a-four").classList.remove("deg")
        document.querySelector(".p-four").classList.remove("show")
        document.querySelector(".subscription").classList.remove("focus")

        document.querySelector(".a-five").classList.remove("deg")
        document.querySelector(".p-five").classList.remove("show")
        document.querySelector(".support").classList.remove("focus")

        document.querySelector(".a-five").classList.remove("deg")
        document.querySelector(".p-five").classList.remove("show")
        document.querySelector(".support").classList.remove("focus")
    })

    // Subscription
    subscription.addEventListener('click', () => {
        // Acciones
        document.querySelector(".a-four").classList.toggle("deg")
        document.querySelector(".p-four").classList.toggle("show")
        document.querySelector(".subscription").classList.toggle("focus")

        // Eliminar otras propiedades en X
        document.querySelector(".a-one").classList.remove("deg")
        document.querySelector(".p-one").classList.remove("show")
        document.querySelector(".invite").classList.remove("focus")

        document.querySelector(".a-two").classList.remove("deg")
        document.querySelector(".p-two").classList.remove("show")
        document.querySelector(".size").classList.remove("focus")

        document.querySelector(".a-three").classList.remove("deg")
        document.querySelector(".p-three").classList.remove("show")
        document.querySelector(".password").classList.remove("focus")

        document.querySelector(".a-five").classList.remove("deg")
        document.querySelector(".p-five").classList.remove("show")
        document.querySelector(".support").classList.remove("focus")
    })

    // Support
    support.addEventListener('click', () => {
        // Acciones
        document.querySelector(".a-five").classList.toggle("deg")
        document.querySelector(".p-five").classList.toggle("show")
        document.querySelector(".support").classList.toggle("focus")

        // Eliminar otras propiedades en X
        document.querySelector(".a-one").classList.remove("deg")
        document.querySelector(".p-one").classList.remove("show")
        document.querySelector(".invite").classList.remove("focus")

        document.querySelector(".a-two").classList.remove("deg")
        document.querySelector(".p-two").classList.remove("show")
        document.querySelector(".size").classList.remove("focus")

        document.querySelector(".a-three").classList.remove("deg")
        document.querySelector(".p-three").classList.remove("show")
        document.querySelector(".password").classList.remove("focus")

        document.querySelector(".a-four").classList.remove("deg")
        document.querySelector(".p-four").classList.remove("show")
        document.querySelector(".subscription").classList.remove("focus")
    })