document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");

    const loadImage = (img) => {
        img.src = img.getAttribute("data-src");
        img.onload = () => {
            img.classList.add("loaded");
            img.previousElementSibling?.remove(); 
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadImage(img);
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
});