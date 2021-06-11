const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_obj = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_obj = Img;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        player_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_obj);
    });
}
function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
    block_image_obj = Img;
    block_image_obj.scaleToWidth(block_image_width);
    block_image_obj.scaleToHeight(block_image_height);
    block_image_obj.set({
        top: player_y,
        left: player_x
    });
    canvas.add(block_image_obj);
});
}
