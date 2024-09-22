
onload = () => {
    document.body.classList.remove("container");
    
    // Configurar el audio para que empiece desde el minuto 1
    const audio = document.getElementById('myAudio');
    audio.currentTime = 104; // Comienza desde el minuto 1
    audio.play(); // Reproduce el audio
};

