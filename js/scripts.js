var canvas = document.getElementById('canv'),
		ctx = canvas.getContext('2d'),
    img = document.getElementById('image');

function grow(el) {
	el.style.height = "10rem";
	el.style.height = (el.scrollHeight)+"px";
}

var generate = function() {
	var text = document.getElementById('text').value.split("\n").join("\n");
	var x = 12.5;
	var y = 40;
	var lineheight = 70;
	var lines = text.split('\n');
	var lineLengthOrder = lines.slice(0).sort(function(a, b) {
		return b.length - a.length;
	});
	ctx.canvas.width = ctx.measureText(lineLengthOrder[0]).width + 25;
	ctx.canvas.height = (lines.length * lineheight);

	ctx.fillStyle = "#232323";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.textBaseline = "middle";
	ctx.font="70px Anonymous Pro";
	ctx.fillStyle = "#39FF14";
	for (var i = 0; i<lines.length; i++)
		ctx.fillText(lines[i], x, y + (i*lineheight) );
	img.src = ctx.canvas.toDataURL();
}
document.getElementById('submit').addEventListener('click', function (){
	document.getElementById("image").style.display = 'block';
	generate();
});

generate();
