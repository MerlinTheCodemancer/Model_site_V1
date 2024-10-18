document.getElementById('likeButton').addEventListener('click', function() {
    this.classList.toggle('btn-primary');
    this.classList.toggle('btn-outline-primary');
    this.textContent = this.textContent === 'Like' ? 'Liked' : 'Like';
});

document.getElementById('themeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
