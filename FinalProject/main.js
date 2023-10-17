window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.nav-title .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);

        });

    }
}

function SwitchPage(page_id) {
    console.log(page_id);
    const current_page = document.querySelector('.pages .page.is-active');
    // if(current_page != null)
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function logInFunction() {

}


var btnOpen = document.querySelector('.register')
var modal = document.querySelector('.modal-box')
var btnClose = document.querySelector('.close')

function toggleModal() {
    modal.classList.toggle('hide')

}
btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModal()
    }
}) 
