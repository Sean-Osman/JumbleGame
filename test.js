var canvas = document.getElementById("canvas");
var my_context = canvas.getContext('2d');
my_context.strokeStyle = "white"; // Draws the canvas border
my_context.rect(0, 0, 730, 730);
my_context.stroke();
my_context.fillStyle = "red";
my_context.fillRect(0, 0, 730, 730);
my_context.fillStyle = "grey";

for (var y = 0; y < 5; y++) {
  for (var x = 0; x < 5; x++) {
    my_context.fillRect(x*150, y*150, 130, 130);
  }
}