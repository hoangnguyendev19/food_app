/* 
<div class="modal">
    <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
    </div>
</div>
*/

const button = document.querySelector(".banner__btn-modal");
const template = `
    <div class="modal">
        <div class="modal-content">
            <p>play store</p>
            <i class="fa fa-times modal-close"></i>
        </div>
    </div>`;
const bannerContent = document.querySelector(".banner__content");
button.addEventListener("click", function () {
    bannerContent.insertAdjacentHTML("beforeend", template);
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
btn.addEventListener("click", function() {
    const btnModal = document.querySelector(".download__content");
    btnModal.insertAdjacentHTML("beforeend", template);
})