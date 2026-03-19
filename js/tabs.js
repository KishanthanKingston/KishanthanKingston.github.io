document.addEventListener("DOMContentLoaded", () => {

    // ======================
    // TABS
    // ======================
    function openTab(tabId, element) {
        const sections = document.querySelectorAll('.tab-content');
        const links = document.querySelectorAll('.tab-link');

        sections.forEach(section => section.classList.remove('active'));
        links.forEach(link => link.classList.remove('active'));

        const selectedTab = document.getElementById(tabId);

        if (selectedTab) {
            selectedTab.classList.add('active');
        }

        if (element) {
            element.classList.add('active');
        }
    }

    window.openTab = openTab;

    // ======================
    // DARK MODE
    // ======================
    const toggleBtn = document.getElementById("theme-toggle");

    if (toggleBtn) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            toggleBtn.textContent = "☀️";
        }

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggleBtn.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                toggleBtn.textContent = "🌙";
            }
        });
    }

    // ======================
    // LIGHTBOX + CAROUSEL
    // ======================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const nextBtn = document.querySelector('.lightbox-next');
    const prevBtn = document.querySelector('.lightbox-prev');

    const photosArray = Array.from(document.querySelectorAll('.photo'));
    let currentIndex = 0;

    // OPEN IMAGE
    photosArray.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            currentIndex = index;
            lightbox.classList.add('active');
            lightboxImg.src = photo.src;
            lightboxImg.alt = photo.alt;
            document.body.style.overflow = "hidden";
        });
    });

    // CLOSE (click outside)
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = "";
            }
        });
    }

    // CLOSE (button)
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            lightbox.classList.remove('active');
            document.body.style.overflow = "";
        });
    }

    // NEXT
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % photosArray.length;
            lightboxImg.src = photosArray[currentIndex].src;
            lightboxImg.alt = photosArray[currentIndex].alt;
        });
    }

    // PREVIOUS
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + photosArray.length) % photosArray.length;
            lightboxImg.src = photosArray[currentIndex].src;
            lightboxImg.alt = photosArray[currentIndex].alt;
        });
    }

    // KEYBOARD NAVIGATION
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % photosArray.length;
            lightboxImg.src = photosArray[currentIndex].src;
            lightboxImg.alt = photosArray[currentIndex].alt;
        }

        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + photosArray.length) % photosArray.length;
            lightboxImg.src = photosArray[currentIndex].src;
            lightboxImg.alt = photosArray[currentIndex].alt;
        }

        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.style.overflow = "";
        }
    });

});
