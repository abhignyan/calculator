document.getElementById('wrapper').addEventListener("click",function (){
    var disp = document.getElementById('disp');
    var outputDisplay = document.getElementById('Odisp')
    if(event.target.classList.contains('inputs')){
        disp.value +=event.target.value;

    }
    else if(event.target.value === "="){
        disp.value = disp.value.replace("×","*")
        disp.value = disp.value.replace("÷","/")
        outputDisplay.value= eval(disp.value);
        disp.value = disp.value.replace("*","×")
        disp.value = disp.value.replace("/","÷")
    }
    else if(event.target.value === "C"){
        disp.value = null;
        outputDisplay.value = null;

    }
    else{
        return null;
    }
});