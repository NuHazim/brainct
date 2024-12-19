const doctorsbox=document.querySelector(".doctorsbox");
const doctors = doctorsbox.querySelectorAll(".doctor");
const dialog = document.getElementById("dialog");
const dialogimage = document.getElementById("dialogimage");
const dialogdoctor = document.getElementById("dialogdoctor");
const dialogwhere = document.getElementById("dialogwhere");
const closebutton=document.getElementById("close");
closebutton.addEventListener("click",function(){
    dialog.style.display="none";
    dialog.close();
})
doctors.forEach(function (doctor) {
    const doctorimage = doctor.querySelector("img");
    const thedoctor = doctor.querySelector(".thedoctor");
    const where = doctor.querySelector(".where");
    doctor.addEventListener("click", function () {
        dialog.style.display="flex";
        dialog.showModal();
        dialogimage.src = doctorimage.src;
        dialogdoctor.textContent = thedoctor.textContent;
        dialogwhere.textContent = where.textContent;
    })
})