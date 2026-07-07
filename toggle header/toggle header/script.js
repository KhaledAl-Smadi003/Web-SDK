const toggleButton = document.getElementById('toggleButton');
const navLinks = document.getElementById('navLinks');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const searchInput = document.getElementById('search');  
const searchResults = document.querySelectorAll('#searchResults li');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.forEach(result => {
        if (result.textContent.toLowerCase().includes(query)) {
            result.style.display = 'list-item';
        } else {
            result.style.display = 'none';
        }
    });
});