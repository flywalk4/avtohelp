let buttonApplication = document.querySelector(".submit-application")
let buttonQuestion = document.querySelector(".submit-question")
let form_change = document.querySelectorAll(".label-application")

buttonApplication.onclick = function() {
    buttonApplication.classList.add("active")
    buttonQuestion.classList.remove("active")
    for (let elemForm of form_change){
        elemForm.style.display = "flex";}
}

buttonQuestion.onclick = function() {
    buttonQuestion.classList.add("active")
    buttonApplication.classList.remove("active")
    for (let elemForm of form_change){
        elemForm.style.display = "none";}
}
