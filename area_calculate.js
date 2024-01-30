let length;
let width;

function calc(){
	length = parseFloat(document.getElementById('length').value);
	width = parseFloat(document.getElementById('width').value);
	let ans = length * width;
	document.getElementById('result').innerHTML = 'the area is: ' + ans;
}
