const imain1=document.getElementById("imain1");
const imain2=document.getElementById("imain2");
const imain3=document.getElementById("imain3");
const imain4=document.getElementById("imain4");
const uploadfile=document.getElementById("uploadfile");
const uploadbutton=document.getElementById("upload");
const start=document.getElementById("start");
const submit=document.getElementById("submit");
const back1=document.getElementById("back1");
const back2=document.getElementById("back2");
const back3=document.getElementById("back3");
start.addEventListener("click",function(){
    imain1.style.display="none";
    imain2.style.display="flex";
    imain3.style.display="none";
    imain4.style.display="none";
})
submit.addEventListener("submit",function(event){
    event.preventDefault();
    imain1.style.display="none";
    imain2.style.display="none";
    imain3.style.display="flex";
    imain4.style.display="none";
})
back1.addEventListener("click",function(){
    imain1.style.display="flex";
    imain2.style.display="none";
    imain3.style.display="none";
    imain4.style.display="none";
})
back2.addEventListener("click",function(){
    imain1.style.display="none";
    imain2.style.display="flex";
    imain3.style.display="none";
    imain4.style.display="none";
})
back3.addEventListener("click",function(){
    imain1.style.display="none";
    imain2.style.display="none";
    imain3.style.display="flex";
    imain4.style.display="none";
})
uploadbutton.addEventListener("click",function(){
    uploadfile.click();
});

uploadfile.addEventListener("change",function(){
    imain1.style.display="none";
    imain2.style.display="none";
    imain3.style.display="none";
    imain4.style.display="flex";
});