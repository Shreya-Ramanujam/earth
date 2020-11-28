const $climate=document.getElementById("climate");
const $consumption=document.getElementById("consumption");
const $resources=document.getElementById("resources");
const $people=document.getElementById("people");

$climate.onclick=()=>{
    //console.log("Climate button is working");
    document.body.style.background="url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.background="#2F80ED";
    $consumption.style.background="transparent";
    $resources.style.background="transparent";
    $people.style.background="transparent";
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green";
    
}

$consumption.onclick=()=>{
    //console.log("Climate button is working");
    document.body.style.background="url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.background="transparent";
    $consumption.style.background="#27AE60";
    $resources.style.background="transparent";
    $people.style.background="transparent";
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the left overs.";
    
}

$resources.onclick=()=>{
    //console.log("Climate button is working");
    document.body.style.background="url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.background="transparent";
    $consumption.style.background="transparent";
    $resources.style.background="#F2994A";
    $people.style.background="transparent";
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle";
    
}

$people.onclick=()=>{
    //console.log("Climate button is working");
    document.body.style.background="url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.background="transparent";
    $consumption.style.background="transparent";
    $resources.style.background="transparent";
    $people.style.background="#EB5757";
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need.";
    
}