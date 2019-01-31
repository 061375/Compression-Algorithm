/** 
 * FIDDLING WITH IDEAS HERE
 * */

function aToNtoC() {
	let a = 'test';
	let n = '';
	for(let i=0; i<a.length; i++) {
		n = n + a.charCodeAt(i)
	}
	n = parseInt(n);
	console.log(n);
	
	for(i=2; i<n; i+=10) {
		//console.log(n,i);
		
		if(Helpers.isEven(n/i)) {
			console.log(n/i);
		}
		
	}
	
}

console.log('FIDDLE: Playing with further compression by finding divisors of char codes');
let check = 'jeremy'
console.log(check);
console.log('Char Codes divisible by 9: ',Helpers.convertStringToNumber(check,Helpers.divNine))
console.log('Char Codes divisible by 3: ',Helpers.convertStringToNumber(check,Helpers.divThree))