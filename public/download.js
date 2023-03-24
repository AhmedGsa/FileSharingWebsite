const downloadForm = document.querySelector(".download-form");
const passwordInput = document.querySelector("#password");
const errMessage = document.querySelector(".err-msg");
downloadForm.onsubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`/files/download/${downloadForm.dataset.fileId}`,{
            password: passwordInput.value
        });
        errMessage.textContent = "";
    } catch (error) {
        const {data} = error.response;
        errMessage.textContent = data.msg;
    }
}