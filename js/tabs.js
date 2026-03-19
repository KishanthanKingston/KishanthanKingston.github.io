document.addEventListener("DOMContentLoaded", () => {

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

    // DARK MODE
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

    // LIGHTBOX
    const photos = document.querySelectorAll('.photo');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = photo.src;
            lightboxImg.alt = photo.alt;
            document.body.style.overflow = "hidden";
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = "";
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            lightbox.classList.remove('active');
            document.body.style.overflow = "";
        });
    }

});
