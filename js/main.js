console.log("msj demo")

// create a wrapper around native canvas element (with id="c")

var canvas = new fabric.Canvas('c');
canvas.controlsAboveOverlay = true;
canvas.controlsInStack = true
// create a rectangle object
/*var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});*/

/*fabric.Image.fromURL('https://es.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/logoizer/CUT202020DT6L91A/left/main.png', function(img2){
    canvas.add(img2);
});*/

fabric.Image.fromURL("https://es.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/logoizer/CUT202020DT6L91A/left/main.png", (img) => {
    var img3 = img.scale(1).set({
      left: 0,
      top: 0,
      selectable: false,
      hasControls: false
    })
    img3.applyFilters();
    canvas.centerObject(img3);
    canvas.setOverlayImage(img3, function() {
      canvas.renderAll()
    });
  });

document.querySelectorAll('.library img').forEach(el=>{
    console.log(el)

    //https://es.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/logoizer/CUT202020DT6L91A/left/main.png

    el.addEventListener("click",()=>{
        console.log("click en la imagen " +  el);
        fabric.Image.fromURL(el.src, img=>{

            /*opcional*/
            img.scale(1.5)
            img.set({left:400,top:250,  
            borderColor: 'red',
            cornerColor: 'green',
            cornerSize: 6,transparentCorners: false, originX: 'center', originY: 'center'})
    
            /*opcional*/

            canvas.add(img)
        
         
        })
    })

  
})

var text = new fabric.Text('Demo RAM', { left: 100, top: 100 });
canvas.add(text);






// "add" rectangle onto canvas
//canvas.add(rect); //dibujando el rectangulo

window.addEventListener("keydown", (o)=>{
    console.log(o)
    if(o.key==='Delete' || o.key==='Backspace'){
        canvas.remove(canvas.getActiveObject());

    }
})

/*OJO Refactorizar*/
//document.getElementById("c1").addEventListener("click", changeColor());
//document.getElementById("c2").addEventListener("click", changeColor());
//document.getElementById("c3").addEventListener("click", changeColor("black"));

function changeColor(val){
  console.log("Ejecutando changeColor :"  + val)
  document.getElementById("c").style.backgroundColor=val;
}
/*OJO Refactorizar*/