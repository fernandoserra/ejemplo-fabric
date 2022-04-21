var wrapper = document.getElementById('wrapper');
canvas = new fabric.Canvas(wrapper, {width: 400, height: 400, backgroundColor: 'white'});

var rect = new fabric.Rect({width:100, height: 100, fill: 'red' });
var circle = new fabric.Circle({ radius: 100, fill: 'green' });
var group1 = new fabric.Group([ circle, rect ], { left: 100, top: 100 });
canvas.add(group1);

group1.clipTo = function(ctx) {
  ctx.rect(50,50,200,200);
};

canvas.add(new fabric.Rect({left: 50, top: 50, width:200, height: 200, fill: 'blue', selectable: false }))