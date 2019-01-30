class Dictionary {

	/** 
	 * 
	 * @param {String}
	 * @param {Function}
	 * @returns {Object}
	 * */
	static first(raw,callback) {
		let reraw = raw;
		let possible = [],
			keys = {},
			current = '',
			found = {},
			compressed = '';
		let looking = false;
		let holdftest = [];
		let l = raw.length;
		for(let i=0; i<l; i++) {
			let n = raw.substring(i,i+1);
			/*
			if(n == ' ') {
				possible.push(current);
				current = '';
			}else{
				current = current + n;
				if(possible.indexOf(current) > -1 && current.length > 1) {
					if(undefined === keys[current]) {
						keys[current] = 2;
					}else{
						keys[current]++;
					}
				}
			}*/
			
			if(n != DICTNOLONGERLOOKING)
				current = current + n;
			if(current.length > 5) {
				let ftest = Helpers.getIndicesOf(current,raw,true,false);
				if(ftest.length > 1) {
					//console.log('FTEST ',current);
					looking = true;
					holdftest = ftest;
					keys[current] = ftest.length;
					
				}else if(looking){
					current = current.substring(0,current.length-1);
					found[current] = holdftest;
					
					raw = Helpers.notLooking(raw,current,current.length);
					//console.log('"'+current+'"',raw,holdftest);
					if(current=='nteger ')console.log('########################### got here',holdftest);
					




					// reset
					current = '';
					looking = false;
					
				}else{
					current = '';
				}
			}

		}
		
		// loop our initial dictionary
		/*
		for(let key in keys) {
			if(found.hasOwnProperty(key)) {
				// if there isn't more than one verison of this why compresss it
				if(keys[key] > 1) {
					let t = Helpers.getIndicesOf(key,raw,true)
					found[key] = t;
				}
			}
		}*/

		// strip the key data from the raw data
		compressed = reraw;

		for(let key in found) {
			if(found.hasOwnProperty(key)) {
				compressed = compressed.replaceAll(key,'')
			}
		}
//console.log('compressed',compressed);
		if(typeof callback === 'function')
			callback({
				raw:reraw,
				keys:keys,
				found:found,
				compressed:compressed
			});
	}
	/** 
	 * 
	 * @param {String}
	 * @param {Function}
	 * @returns {Object}
	 * */
	static second(raw, callback) {
		let keys = {},
			found = {},
			compressed = ''
		// @let {Array} - split the data up by spaces
		// 				  	I could compressit using DOM nodes which would be easier actuall and maybe more accurate however
		//					I don't want to assume this is HTML
		let s = raw.split(' ')
		// loop the data
		for(let i = 0; i<s.length; i++) {
				// ... is special in ECMA-6+
			if(s[i].length > 1 && s[i] !== '...') {
				// we need to count how many times we see this content
				if(undefined === keys[s[i]]) {
					keys[s[i]] = 1;
				}else{
					keys[s[i]]++;
				}
			}
		}
//console.log(thedata.keys);
		// loop our initial dictionary
		for(let key in keys) {
			if(keys.hasOwnProperty(key)) {
				// if there isn't more than one verison of this why compresss it
				//if(thedata.keys[key] > 1) {
					let t = Helpers.getIndicesOf(key,raw,true)
//console.log(key,' ',t);
					if(t.length > 1)found[key] = t;
				//}
			}
		}
		// strip the key data from the raw data
		compressed = raw;
		for(let key in found) {
			if(found.hasOwnProperty(key)) {
				let check = compressed.replaceAll(key,'')
				if(check)
					compressed = check
			}
		}
		if(typeof callback === 'function')
			callback({
				raw:raw,
				keys:keys,
				found:found,
				compressed:compressed
			});
	}
	/** 
	 * 
	 * @param {Object}
	 * @param {Function}
	 * @returns {Object}
	 * */
	static third(target,callback) {
		let s = Helpers.getIndicesOf(" ",thedata.compressed,false);
		let cn = 0, ci = 0;
		let p = {};
		for(let i=0; i<thedata.compressed.length; i++) {
			if(thedata.compressed.substring(i,i+1) == ' ') {
				if(cn == 0)
					ci = i;
				cn++;
			}else{
				if(cn > 0) {
					p[ci] = cn;
					cn = 0;
					ci = 0;
				}
			}
		}
		let re = '';
		for(let key in p) {
			if(p.hasOwnProperty(key)) {
				re += Helpers.compressNumber(key) + Helpers.compressNumber(p[key]) + MAIN;
			}
		}
		target.found[DICTSPACEDELIM] = re;
		target.compressed = target.compressed.replaceAll(" ","");
		if(typeof callback === 'function')
			callback(target);
	}
	static compress(callback) {
		// if two digits less than 52 then replace with alpha character
		let result = '';
		// loop keys for each set of two numbers
		for(let key in thedata.found) {
			if(thedata.found.hasOwnProperty(key)) {
				let fk = '';
				for(let i=0; i<thedata.found[key].length; i++) {
					let fktemp = "";
					let cloop = thedata.found[key][i];
					let bsqr = false;
					let bten = false;

					fktemp = Helpers.compressNumber(cloop,MAIN);
//console.log(key,' ',fktemp);
					fk = fk + fktemp;
					thedata.found[key][i] = fktemp;
				}
				thedata.found[key] = fk;
			}
		}
		if (typeof callback === 'function') 
			callback();
		
	}
}