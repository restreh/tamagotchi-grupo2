let hambre = 100;
let felicidad = 100;
let sueno = 100;

const mascota = document.getElementById("mascota");
const alimentar = document.getElementById("alimentar");
const jugar = document.getElementById("jugar");
const dormir = document.getElementById("dormir");


alimentar.addEventListener("click", () => {
    if (hambre < 100) {
        hambre = Math.min(hambre + 10, 100);
        mascota.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDBrempjeTVvcHVkbHdoeHpvcmZzNXhzd25laDk5b2htdmhiODQ3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2emBq1oe6I9J0CvY5x/giphy.gif";
    } else {
        felicidad = 100;
    }
    updateBars();
});

jugar.addEventListener("click", () => {
    if (felicidad < 100) {
        felicidad = Math.min(felicidad + 10, 100);
        mascota.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm1ubGJ5M3k3N3RwMmc2OTEzODZiaHdreGd4Z2Q5Y3piZDIyOGJvNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/huDg8m5llbZKxvLAYQ/giphy.gif";
    } else {
        felicidad = 100;
    }
    updateBars();
});

dormir.addEventListener("click", () => {
    if (sueno < 100) {
        sueno = Math.min(sueno + 10, 100);
        mascota.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmYwbXh2NjI1emNiOXh4YzR0Njl2MHdxN3VvOGR1YnZzaXVhZjlzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LpWSbJeDMVhzv3EYxF/giphy.gif";
    } else {
        sueno = 100;
    }
    updateBars();
});

function updateBars() {
    hambre = Math.max(0,hambre);
    felicidad = Math.max(0,felicidad);
    sueno = Math.max(0,sueno);

    document.getElementById('hambre-bar').style.width = hambre + '%';
    document.getElementById('hambre-label').textContent = hambre + '%';
    document.getElementById('felicidad-bar').style.width = felicidad + '%';
    document.getElementById('felicidad-label').textContent = felicidad + '%';
    document.getElementById('sueno-bar').style.width = sueno + '%';
    document.getElementById('sueno-label').textContent = sueno + '%';

    
    if (hambre < 20 || felicidad < 20 || sueno < 20) {
        document.getElementById('message').textContent = '¡Tu mascota necesita atención!';
        mascota.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVwZ2R2ZGpqcjdwbTEwOXV3b3VtdzAzd2dkbnZxMnV1Y2w2cDh3ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3dhlSINU1H0KMHopTJ/giphy.gif";
    } else {
        document.getElementById('message').textContent = '';
    }

    if (hambre <= 0 && felicidad <= 0 && sueno <= 0) {
        document.getElementById('message').textContent = 'Tu Tamagotchi ha muerto :(';
        mascota.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajN4bmp5MmRsMGplbXo2eDluMTN5Z2YydHJxa29mcHV5YXlrOGZ0eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eBfzzWlMWo9UbBscS7/giphy.gif";
        clearInterval(timer);
    }

    // Cambiar color de las barras según el estado
    if (hambre < 20) {
        document.getElementById('hambre-bar').classList.remove('custom-green', 'custom-yellow');
        document.getElementById('hambre-bar').classList.add('custom-red');
    } else if (hambre < 50) {
        document.getElementById('hambre-bar').classList.remove('custom-green', 'custom-red');
        document.getElementById('hambre-bar').classList.add('custom-yellow');
    } else {
        document.getElementById('hambre-bar').classList.remove('custom-yellow', 'custom-red');
        document.getElementById('hambre-bar').classList.add('custom-green');
    }

    if (felicidad < 20) {
        document.getElementById('felicidad-bar').classList.remove('custom-green', 'custom-yellow');
        document.getElementById('felicidad-bar').classList.add('custom-red');
    } else if (felicidad < 50) {
        document.getElementById('felicidad-bar').classList.remove('custom-green', 'custom-red');
        document.getElementById('felicidad-bar').classList.add('custom-yellow');
    } else {
        document.getElementById('felicidad-bar').classList.remove('custom-yellow', 'custom-red');
        document.getElementById('felicidad-bar').classList.add('custom-green');
    }

    if (sueno < 20) {
        document.getElementById('sueno-bar').classList.remove('custom-green', 'custom-yellow');
        document.getElementById('sueno-bar').classList.add('custom-red');
    } else if (sueno < 50) {
        document.getElementById('sueno-bar').classList.remove('custom-green', 'custom-red');
        document.getElementById('sueno-bar').classList.add('custom-yellow');
    } else {
        document.getElementById('sueno-bar').classList.remove('custom-yellow', 'custom-red');
        document.getElementById('sueno-bar').classList.add('custom-green');
    }
};


// Actualizar barras cada segundo
const timer = setInterval(() => {
    hambre -= 1;
    felicidad -= 1;
    sueno -= 1;
    updateBars();
}, 1000);
