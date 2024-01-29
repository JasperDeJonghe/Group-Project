const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-button');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});