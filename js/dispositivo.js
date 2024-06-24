document.addEventListener("DOMContentLoaded", function() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Usuario en móvil
        if (window.location.pathname.includes("index.html")) {
            window.location.replace("index-phone.html");
        } else if (window.location.pathname.includes("disenos.html")) {
            window.location.replace("disenos-phone.html");
        } else if (window.location.pathname.includes("comprar.html")) {
            window.location.replace("comprar-phone.html");
        }
    } else {
        // Usuario en escritorio
        if (window.location.pathname.includes("index-phone.html")) {
            window.location.replace("index.html");
        } else if (window.location.pathname.includes("disenos-phone.html")) {
            window.location.replace("disenos.html");
        } else if (window.location.pathname.includes("comprar-phone.html")) {
            window.location.replace("comprar.html");
        }
    }
});