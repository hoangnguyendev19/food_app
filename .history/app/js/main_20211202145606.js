// Modal

const button = document.querySelector(".banner__btn-modal");
const templatePlay = `
    <div class="modal">
        <div class="modal-content">
            <p>play store</p>
            <i class="fa fa-times modal-close"></i>
        </div>
    </div>`;
const bannerContent = document.querySelector(".banner__content");
button.addEventListener("click", function () {
    bannerContent.insertAdjacentHTML("beforeend", templatePlay);
});
bannerContent.addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target.matches(".modal-close")) {
    //    const modal = event.target.parentNode.parentNode;
    //    modal.parentNode.removeChild(modal);
        const modal = document.querySelector(".modal");
        modal.remove(modal);
    } else if (event.target.matches(".modal")) {
        const modal = document.querySelector(".modal");
        modal.remove(modal);
    }
});

const btn = document.querySelector(".download__btn-modal");
const templateApp = `
<div class="modal">
    <div class="modal-content">
        <p>app store</p>
        <i class="fa fa-times modal-close"></i>
    </div>
</div>`;
const downloadContent = document.querySelector(".download__content");
btn.addEventListener("click", function() {
    downloadContent.insertAdjacentHTML("beforeend", templateApp);
})
downloadContent.addEventListener("click", function(event) {
    // console.log(event.target);
    if (event.target.matches(".modal-close")) {
        const btnModal = document.querySelector(".modal");
        btnModal.remove(btnModal);
    } else if (event.target.matches(".modal")) {
        const btnModal = document.querySelector(".modal");
        btnModal.remove(btnModal);
    }
})

// Toggle Menu
const menu = document.querySelector(".menu");
const headerIcon = document.querySelector(".header__icon");
headerIcon.addEventListener("click", function(event) {
    if(event.target.matches(".header__icon")) {
        menu.add(".is-show");
    }
})
