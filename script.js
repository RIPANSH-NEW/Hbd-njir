document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const audio = document.getElementById("backsound");

    // Daftar gambar
    const images = [
        "assets/images/image1.jpg",
        "assets/images/image2.jpg",
        "assets/images/image3.jpg",
        "assets/images/image4.jpg"
    ];

    // Daftar teks
    const texts = [
        "Anjir Ultah",
        "Ko bisa?",
        "mau kado apa?",
        "HBD NJIR",
        "HBD!!!!",
        "11 February",
        "ZAHRA!!",
        "🥳🥳🥳🥳🥳🥳"
    ];

    // Mulai backsound ketika user pertama kali klik
    document.body.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        }
    });

    function createImage() {
        const img = document.createElement("img");
        img.src = images[Math.floor(Math.random() * images.length)];
        img.classList.add("img");

        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;

        container.appendChild(img);

        setTimeout(() => {
            img.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
        }, 100);

        setTimeout(() => {
            img.remove();
        }, 5000);
    }

    function createText() {
        const textElement = document.createElement("div");
        textElement.textContent = texts[Math.floor(Math.random() * texts.length)];
        textElement.classList.add("text");

        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 50);

        textElement.style.left = `${x}px`;
        textElement.style.top = `${y}px`;

        container.appendChild(textElement);

        setTimeout(() => {
            textElement.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
        }, 100);

        setTimeout(() => {
            textElement.remove();
        }, 5000);
    }

    setInterval(createImage, 1000);
    setInterval(createText, 1500);
});
