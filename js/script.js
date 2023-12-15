// Toggle Active Class
const navbarNav = document.querySelector('.navbar-nav');
// Ketika records menu diklik
document.querySelector('#records-list').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const records = document.querySelector('#records-list')
document.addEventListener ('click', function(e){
    if(!records.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})