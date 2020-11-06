
let x, y; 
let tamanhoDaReta = 100; 
let angulo = 50;
let lindenmayerString = ''
let canvas

let axiom = 'BABABABABABAB'
let elementToReplace = 'B'
let replaceString = 'B+A+B'
let iteractions = 10
function startDrawing(){
    lindenmayerString = getLindenmayerString()
    resetMatrix();
    translate(x, y);
   
    for (let letter of lindenmayerString) {
      if (letter == 'A') {
        line(0, 0, 0, -tamanhoDaReta);
        translate(0, -tamanhoDaReta);
    } else if (letter == 'B') {
        line(0, 0, 0, -tamanhoDaReta);
        translate(0, -tamanhoDaReta);
      } else if (letter == '+') {
        rotate(radians(angulo));
    }
    }
}


function getLindenmayerString() {
    let productions = {};
    productions[elementToReplace] = replaceString;
   
    let lindenmayer = new LSystem({
        axiom: axiom,
        productions: productions
    })
    
    let result = lindenmayer.iterate(iteractions)
    return result
}

function setup() {
    document.getElementById('axiom').value = axiom
    document.getElementById('elementToReplace').value = elementToReplace
    document.getElementById('replaceString').value = replaceString
    document.getElementById('iteractions').value = iteractions
    const canvasDiv = document.getElementById('draw-container').getBoundingClientRect()
    canvas = createCanvas(canvasDiv.width, canvasDiv.height);
    canvas.parent('draw-container');
    canvas.background(255);
    stroke(0, 0, 0, 255);
    strokeWeight(4);
    x = canvasDiv.width / 2;
    y = canvasDiv.height / 2;
    
  }

 function clearCanvas(){
    clear()
  }

  $(document).ready(
    function() {
        $('#axiom').keyup(
            function() {
                axiom = document.getElementById('axiom').value;
                
            });
        $('#elementToReplace').keyup(
            function() {
                elementToReplace = document.getElementById('elementToReplace').value;
                
            });
        $('#replaceString').keyup(
            function() {
                replaceString  = document.getElementById('replaceString').value;
                
            });
        $('#iteractions').keyup(
            function() {
                iteractions  = document.getElementById('iteractions').value;
                
            });
    })

   function exportAsSVG() {
        save()   
   }


