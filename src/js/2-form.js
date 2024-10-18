
const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const formMessage = document.querySelector(".txtarea");
const formEmail = document.querySelector(".email")


const localData = JSON.parse(localStorage.getItem("feedback-form-state"))
function checkLocalData() {
    if (typeof localData !== "object") {
        return
    }
    formMessage.value = localData.message
        formEmail.value = localData.email
}




form.addEventListener("input", (event) => {
    formData.email = event.currentTarget.email.value;
    formData.message = event.currentTarget.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})

form.addEventListener("submit", (event) => {
    if (event.currentTarget.email.value == "" || event.currentTarget.message.value == "") {
        alert("Fill please all fields")        
    }
    event.preventDefault();
    localStorage.removeItem("feedback-form-state")
    if (typeof event.currentTarget.email.value == "string" && typeof event.currentTarget.message.value == "string") {
        console.log(formData);
    }
    form.reset()
    console.log(typeof event.currentTarget.message.value);
})


