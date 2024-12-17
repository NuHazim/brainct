let scanimage=[
    ["brain11.jpg","brain12.jpg","brain13.jpg",""],
    ["brain21.jpg","brain22.jpeg","brain23.jpeg"],
    ["brain31.jpeg","brain32.jpeg","brain33.jpeg"]
];
const imain1=document.getElementById("imain1");
const imain2=document.getElementById("imain2");
const imain3=document.getElementById("imain3");
const imain4=document.getElementById("imain4");
const uploadfile1=document.getElementById("uploadfile1");
const uploadbutton1=document.getElementById("upload1");
const uploadfile2=document.getElementById("uploadfile2");
const uploadbutton2=document.getElementById("upload2");
const uploadfile3=document.getElementById("uploadfile3");
const uploadbutton3=document.getElementById("upload3");
const start=document.getElementById("start");
const submit=document.getElementById("submit");
const submit2=document.getElementById("submit2");
const back1=document.getElementById("back1");
const back2=document.getElementById("back2");
const back3=document.getElementById("back3");
// start.addEventListener("click",function(){
//     imain1.style.display="none";
//     imain2.style.display="flex";
//     imain3.style.display="none";
//     imain4.style.display="none";
// })
// submit.addEventListener("submit",function(event){
//     event.preventDefault();
//     imain1.style.display="none";
//     imain2.style.display="none";
//     imain3.style.display="flex";
//     imain4.style.display="none";
// })
// back1.addEventListener("click",function(){
//     imain1.style.display="flex";
//     imain2.style.display="none";
//     imain3.style.display="none";
//     imain4.style.display="none";
// })
// back2.addEventListener("click",function(){
//     imain1.style.display="none";
//     imain2.style.display="flex";
//     imain3.style.display="none";
//     imain4.style.display="none";
// })
// back3.addEventListener("click",function(){
//     imain1.style.display="none";
//     imain2.style.display="none";
//     imain3.style.display="flex";
//     imain4.style.display="none";
// })
// uploadbutton1.addEventListener("click",function(){
//     uploadfile1.click();
// });
// uploadbutton2.addEventListener("click",function(){
//     uploadfile2.click();
// });
// uploadbutton3.addEventListener("click",function(){
//     uploadfile3.click();
// });

// submit2.addEventListener("click",function(){
//     imain1.style.display="none";
//     imain2.style.display="none";
//     imain3.style.display="none";
//     imain4.style.display="flex";
// });
const axial=document.getElementById("axial");
const coronal=document.getElementById("coronal");
const sagittal=document.getElementById("sagittal");
let csi=null;
const imagestochoose=document.querySelectorAll(".imagetochoose");
        const imagechosen=document.getElementById("imagechosen");
        imagestochoose.forEach(function(imagetochoose){
            imagetochoose.addEventListener("click",function(){
                imagechosen.src=imagetochoose.src;
                if(csi){
                    csi.style.border="2px solid transparent";
                }
                imagetochoose.style.border="2px solid orange";
                csi=imagetochoose;
            })
        })