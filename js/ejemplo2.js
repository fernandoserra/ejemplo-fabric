var canvas = new fabric.Canvas('c');

fabric.Image.fromURL('http://fabricjs.com/assets/2.svg', function(img){
  img1 = img;
  fabric.Image.fromURL('http://fabricjs.com/assets/pug.jpg', function(img){
    img1.scaleToWidth(canvas.getWidth());
    img2 = img;
    img2.scaleToHeight(300);
    img2.left = 50;
    img2.top = 50;
    img2.globalCompositeOperation = 'source-atop';
    canvas.add(img1);
    canvas.add(img2);
  });
});