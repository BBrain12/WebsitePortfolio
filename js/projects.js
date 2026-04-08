document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-images-grid img, .project-image-single img');

    if (!projectImages.length) {
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    const content = document.createElement('div');
    content.className = 'lightbox-content';

    const closeButton = document.createElement('button');
    closeButton.className = 'lightbox-close';
    closeButton.setAttribute('aria-label', 'Close enlarged image');
    closeButton.type = 'button';
    closeButton.textContent = 'x';

    const enlargedImage = document.createElement('img');
    enlargedImage.className = 'lightbox-image';
    enlargedImage.alt = '';

    content.appendChild(closeButton);
    content.appendChild(enlargedImage);
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    function closeLightbox() {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function openLightbox(image) {
        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt || 'Project image';
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    projectImages.forEach((image) => {
        image.addEventListener('click', () => openLightbox(image));
    });

    closeButton.addEventListener('click', closeLightbox);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('open')) {
            closeLightbox();
        }
    });
});
