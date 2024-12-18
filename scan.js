let scanimage=[
    ["brain11.jpg","brain12.jpg","brain13.jpg","<h2>Indication:Suspected Head Trauma</h2><h3>Findings</h3><ul><li>The ventricles and sulci appear symmetric and normal for age.</li><li>Grey-white matter differentiation is preserved.</li><li>Orbits and paranasal sinuses appear clear.</li></ul><h2>Impression:Concussion</h2>"],
    ["brain21.jpg","brain22.jpeg","brain23.jpeg","<h2> Indication:   History of melanoma; rule out metastases</h2> <ul><li>Multiple  hyperdense lesions   are seen in the supratentorial region, suggestive of metastases.</li> <li>The largest lesion is located in the  right parietal lobe  , measuring approximately 2.3 x 2.5 cm with surrounding vasogenic edema.</li> <li>Mild effacement of adjacent sulci is noted, but no significant midline shift is identified.</li></ul> <h2>Findings consistent with metastatic melanoma lesions involving the brain.</h2> <h2>Recommend further evaluation with contrast-enhanced MRI for better lesion characterization and treatment planning.</h2>"],
    ["brain31.jpeg","brain32.jpeg","brain33.jpeg","<h2> Indication:   Suspected anoxic brain injury following cardiac arrest</h2> <ul><li>Diffusion-weighted imaging shows  bilateral cerebral edema  with  reduced diffusion  in the cortical and subcortical regions.</li> <li>There is  widespread loss of grey-white matter differentiation , particularly in the frontal and temporal lobes.</li> <li>The  basal ganglia  and  thalamus  demonstrate areas of  increased signal intensity , consistent with anoxic damage.</li></ul> <h2>Findings consistent with  anoxic brain injury  affecting multiple regions of the brain.</h2> <h2>Further evaluation with  MRI  and neurocognitive testing is recommended for prognosis and treatment planning.</h2>"]
];
let similar=[
    ["headtrauma1.jpg","headtrauma2.webp","headtrauma3.jpg","<h2>Indication:Suspected Head Trauma</h2><h3>Findings</h3><ul><li>The ventricles and sulci appear symmetric and normal for age.</li><li>Grey-white matter differentiation is preserved.</li><li>Orbits and paranasal sinuses appear clear.</li></ul><h2>Impression:Concussion</h2>"],
    ["melanoma1.jpg","melanoma2.jpeg","melanoma3.png","<h2> Indication:   History of melanoma; rule out metastases</h2> <ul><li>Multiple  hyperdense lesions   are seen in the supratentorial region, suggestive of metastases.</li> <li>The largest lesion is located in the  right parietal lobe  , measuring approximately 2.3 x 2.5 cm with surrounding vasogenic edema.</li> <li>Mild effacement of adjacent sulci is noted, but no significant midline shift is identified.</li></ul> <h2>Findings consistent with metastatic melanoma lesions involving the brain.</h2> <h2>Recommend further evaluation with contrast-enhanced MRI for better lesion characterization and treatment planning.</h2>"],
    ["anoxic1.png","anoxic2.jpeg","anoxic3.jpg","<h2> Indication:   Suspected anoxic brain injury following cardiac arrest</h2> <ul><li>Diffusion-weighted imaging shows  bilateral cerebral edema  with  reduced diffusion  in the cortical and subcortical regions.</li> <li>There is  widespread loss of grey-white matter differentiation , particularly in the frontal and temporal lobes.</li> <li>The  basal ganglia  and  thalamus  demonstrate areas of  increased signal intensity , consistent with anoxic damage.</li></ul> <h2>Findings consistent with  anoxic brain injury  affecting multiple regions of the brain.</h2> <h2>Further evaluation with  MRI  and neurocognitive testing is recommended for prognosis and treatment planning.</h2>"]
]
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
const done=document.getElementById("done");
done.addEventListener("click",function(){
    imain1.style.display="flex";
    imain2.style.display="none";
    imain3.style.display="none";
    imain4.style.display="none";
})
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
uploadbutton1.addEventListener("click",function(){
    uploadfile1.click();
});
uploadbutton2.addEventListener("click",function(){
    uploadfile2.click();
});
uploadbutton3.addEventListener("click",function(){
    uploadfile3.click();
});
const axial=document.getElementById("axial");
const coronal=document.getElementById("coronal");
const sagittal=document.getElementById("sagittal");
const resultbox=document.getElementById("resultbox");
const similarimage1=document.getElementById("similarimage1");
const similarimage2=document.getElementById("similarimage2");
const similarimage3=document.getElementById("similarimage3");
const dialogresult=document.getElementById("dialogresult");
let randomNumber;
submit2.addEventListener("click",function(){
    imain1.style.display="none";
    imain2.style.display="none";
    imain3.style.display="none";
    imain4.style.display="grid";
    randomNumber = Math.floor(Math.random() * 3);
    axial.src="/img/"+scanimage[randomNumber][0];
    coronal.src="/img/"+scanimage[randomNumber][1];
    sagittal.src="/img/"+scanimage[randomNumber][2];
    resultbox.innerHTML=scanimage[randomNumber][3];
    similarimage1.src="/img/"+similar[randomNumber][0];
    similarimage2.src="/img/"+similar[randomNumber][1];
    similarimage3.src="/img/"+similar[randomNumber][2];
    dialogresult.innerHTML=similar[randomNumber][3];
});

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
const dialogimage=document.getElementById("dialogimage");
const dialog=document.getElementById("dialog");
const closebutton=document.getElementById("close");
const similarimages=document.querySelectorAll(".similarimage");
similarimages.forEach(function(similarimage){
    similarimage.addEventListener("click",function(){
        dialog.showModal();
        dialogimage.src=similarimage.src;
        dialog.style.display="flex";
        dialog.style.flexDirection="row";
    })
})
closebutton.addEventListener("click",function(){
    dialog.style.display="none";
    dialog.close();
})

