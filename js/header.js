fetch('/components/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('site-header').innerHTML = html;

        // Highlight the active nav link based on current page filename
        const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        const activeLink = document.querySelector(`#site-header [data-page="${page}"]`);
        if (activeLink) activeLink.classList.add('active');
    });
