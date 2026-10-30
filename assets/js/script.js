document.querySelectorAll('.copy-email').forEach((button) => {
    button.addEventListener('click', async function () {
        try {
            await navigator.clipboard.writeText(this.dataset.email);
            this.title = 'Email скопирован';
            this.setAttribute('aria-label', 'Email скопирован');
        } catch (error) {
            console.error('Не удалось скопировать email:', error);
        }
    });
});
