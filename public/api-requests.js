// This file contains all the api requests

// Uploading form data

const uploadForm = document.querySelector(".upload-form");
uploadForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    formData.append("file", fileInput.files[0]);
    formData.append("password",passwordInput.value);
    console.log(formData);
    try {
        const {data} = await axios.post("http://localhost:5000/files/upload", formData);
        const downloadLink = document.querySelector(".download-link");
        downloadLink.style.display = "flex";
        const copyBtn = document.createElement("i");
        const copyText = document.createElement("a");
        copyText.innerText = `http://localhost:5000/files/download/${data.fileID}`;
        copyText.setAttribute("href", `http://localhost:5000/files/download/${data.fileID}`);
        downloadLink.appendChild(copyText);
        copyBtn.classList = "fa-solid fa-copy";
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(copyText.textContent);
        };
        downloadLink.appendChild(copyBtn);
    } catch (error) {
        console.log(error);
    }
})