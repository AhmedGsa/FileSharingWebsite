const passwordInput = document.querySelector("#password");
const passwordDiv = document.querySelector(".pass-div");
const checkbox = document.querySelector("#check");
const checkLabel = document.querySelector(".check-label");
checkLabel.onclick = () => {
    if (checkbox.checked) {
        passwordDiv.style.display = "flex";
    } else {
        passwordDiv.style.display = "none";
        passwordInput.value = "";
    }
}
//  change filename in the file input

const fileInput = document.querySelector("#file");
const fileName = document.querySelector(".file-name");
fileInput.onchange = () => {
    fileName.textContent = fileInput.files[0].name;
}

//  burger menu functionnality

const mobileNav = document.querySelector(".mobile-nav");
const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");
const li = document.querySelectorAll(".mobile-nav li");
burgerMenu.onclick = () => {
    mobileNav.classList.toggle("active");
};
closeMenu.onclick = () => {
    mobileNav.classList.toggle("active");
};
li.forEach((item) => {
    item.onclick = () => {
        mobileNav.classList.toggle("active");
    };
});

// copy link button functionnality

// const copyBtn = document.querySelector(".start form .download-link i");
// const copyText = document.querySelector(".start form .download-link a");
// copyBtn.onclick = () => {
//     navigator.clipboard.writeText(copyText.textContent);
// }