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
