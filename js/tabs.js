function openTab(tabId, element) {

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('.tab-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabId).classList.add('active');

    // Highlight clicked link
    element.classList.add('active');
}
