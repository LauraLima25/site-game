document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.textContent = '🌟 Explore Agora';
    btn.addEventListener('click', () => {
        window.location.href = 'explore.html';
    });
    document.body.appendChild(btn);
});
