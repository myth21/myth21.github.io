function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load header and footer
loadHTML('header', '/partial/header.html');
loadHTML('footer', '/partial/footer.html');