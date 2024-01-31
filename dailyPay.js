let first, second, third;
function calc(){
	first = parseFloat(document.getElementById('first').value);
	second = parseFloat(document.getElementById('second').value);
	third = parseFloat(document.getElementById('third').value);
    let total = first + second + third;
    document.getElementById('result').innerHTML = 'total amount is: $ ' + total;

}
