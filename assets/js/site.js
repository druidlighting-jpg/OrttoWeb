// Shared site JS: mobile menu toggle and small helpers
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;
    navLinks.classList.toggle('active');
}

// Close mobile nav when a nav link is clicked (delegated)
document.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A' && target.closest('.nav-links')) {
        const nav = document.getElementById('navLinks');
        if (nav && nav.classList.contains('active')) nav.classList.remove('active');
    }
});
