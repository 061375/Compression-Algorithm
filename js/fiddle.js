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