const list = document.querySelectorAll('.navegation__unorganized--list .unorganized__list');

function activateLink() {
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}

list.forEach((item) => item.addEventListener('click', activateLink));