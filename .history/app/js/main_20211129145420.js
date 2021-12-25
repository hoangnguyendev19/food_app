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
            <i class="fa fa-times modal-close"></i>
        </div>
    </div>`;
const bannerContent = document.querySelector(".banner__content");
button.addEventListener("click", function () {
    document.bannerContent.insertAdjacentHTML("beforeend", template);
});