var body = document.getElementById('body');

function changeColor(){
    //Getting values from the sliders.
    var redVal = document.getElementById('red-val').value;
    var greenVal = document.getElementById('green-val').value;
    var blueVal = document.getElementById('blue-val').value;
    //Setting the background color.
    body.setAttribute('style',`background : rgb(${redVal},${greenVal},${blueVal});`);
    //Setting the content and background color of the fields.
    document.getElementById('red-text-val').value=redVal;
    document.getElementById('red-text-val').setAttribute('style',`background : rgb(${redVal},0,0);`);
    document.getElementById('green-text-val').value=greenVal;
    document.getElementById('green-text-val').setAttribute('style',`background : rgb(0,${greenVal},0);`);
    document.getElementById('blue-text-val').value=blueVal;
    document.getElementById('blue-text-val').setAttribute('style',`background : rgb(0,0,${blueVal});`);
}

function setValues(){
    document.getElementById('red-text-val').value=redVal;
    document.getElementById('red-text-val').setAttribute('style',`background : rgb(${redVal},0,0);`);
    document.getElementById('green-text-val').value=greenVal;
    document.getElementById('green-text-val').setAttribute('style',`background : rgb(0,${greenVal},0);`);
    document.getElementById('blue-text-val').value=blueVal;
    document.getElementById('blue-text-val').setAttribute('style',`background : rgb(0,0,${blueVal});`);

}