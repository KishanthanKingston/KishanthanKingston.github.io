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

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = photo.src;
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

});
