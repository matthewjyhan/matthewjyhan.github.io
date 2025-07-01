// About me modal
const dialog = document.getElementById("aboutMe");
const wrapper = document.querySelector(".wrapper");

function showAboutMe() {
    dialog.showModal()
}	

function closeAboutMe() {
    dialog.setAttribute('closing', "")
    dialog.addEventListener('animationend', () => {
        dialog.removeAttribute('closing');
        dialog.close()
    }, {once: true})
}

dialog.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        dialog.setAttribute('closing', "")
        dialog.addEventListener('animationend', () => {
            dialog.removeAttribute('closing');
            dialog.close()
        }, {once: true})
    }
})