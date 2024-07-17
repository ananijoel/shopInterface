function loadHTML(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('footer', '../../html/composants/footer.html');
})

