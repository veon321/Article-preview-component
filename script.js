const shareButton = document.getElementById('shareButton');
const shareContainer = document.getElementById('shareContainer');
const profilePasek = document.getElementById('profilePasek');

shareButton.addEventListener('click', (event) => {
    event.stopPropagation();
    shareContainer.classList.toggle('active');
    profilePasek.classList.toggle('active');
});

document.addEventListener('click', () => {
    shareContainer.classList.remove('active');
    profilePasek.classList.remove('active');
});