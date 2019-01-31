class Helpers {

	/** 
	 * @param {Number}
	 * @returns {String}
	 * */
	static compressNumber(n, maindelim) {
		
		let fktemp = '';

		if(undefined === maindelim)
			maindelim = '';

		if (Helpers.isInteger(Math.sqrt(n))) {
			fktemp += SQUAREDELIM;
			n = Math.sqrt(n);
		}else if(Helpers.isInteger(n / 10) && Helpers.isEven((n / 10).toString().length)){
			fktemp += TENDELIM;
			n = n / 10;
			
		}else if(Helpers.isInteger(n / 100) && Helpers.isEven((n / 100).toString().length)){
			fktemp += HUNDREDDELIM;
			n = n / 100;
			
		}else if(Helpers.isInteger(n / 1000) && Helpers.isEven((n / 1000).toString().length)){
			fktemp += THOUSANDDELIM;
			n = n / 1000;
			
		}else{
			// last ELSE add MAIN delimitter
			fktemp = maindelim;
		}
		
		for(let j=0; j<n.toString().length; j+=2) {
			let ckey = n.toString().substring(j,j+2);
			
			if (undefined === CYPHER[ckey]) {
				fktemp = fktemp + ckey;
			}else{
				// add
				fktemp = fktemp + CYPHER[ckey];
			}
		}

		return fktemp;
	}
	/** 
	 * 
	 * @param {String}
	 * @param {String}
	 * @param {Number}
	 * @returns {String}
	 * */
	static notLooking(str,find,length) {
		let re = '';
		
		for(let i=0; i<length;i++) 
			re += DICTNOLONGERLOOKING;
		
		let _re = str.replace(new RegExp(Helpers.escapeRegExp(find), 'g'),re);

		return _re;
	}
	/** 
	 * 
	 * @param {String}
	 * @returns {String}
	 * */
	static injectDelimitter(s) {
		s = s.replaceAll(SQUAREDELIM,MAIN+SQUAREDELIM)
		s = s.replaceAll(TENDELIM,MAIN+TENDELIM)
		s = s.replaceAll(HUNDREDDELIM,MAIN+HUNDREDDELIM)
		s = s.replaceAll(THOUSANDDELIM,MAIN+THOUSANDDELIM)
		//console.log('SSSSS',s);
		return s
	}
	/** 
	 * finds multiple instances of a string within a string and adds the result to an array
	 * https://stackoverflow.com/questions/3410464/how-to-find-indices-of-all-occurrences-of-one-string-in-another-in-javascript
	 * @param {String} needle
	 * @param {String} haystack
	 * @param {Boolean}
	 * @returns {Array}
	 * */
	static getIndicesOf(searchStr, str, caseSensitive) {

	    var searchStrLen = searchStr.length;
	    if (searchStrLen == 0) {
	        return [];
	    }
	    var startIndex = 0, index, indices = [];
	    if (!caseSensitive) {
	        str = str.toLowerCase();
	        searchStr = searchStr.toLowerCase();
	    }
	    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
	        indices.push(index);
	        startIndex = index + searchStrLen;
	    }
	    return indices;
	}
	/**
	 * @param {Number}
	 * @returns {Boolean}
	 * */
	static isEven(n) {
		return n % 2 == 0;
	}
	/**
	 * @param {Number}
	 * @returns {Boolean}
	 * */
	static isInteger(n) {
		return n === +n && n === (n|0);
	}
	/** 
	 * 
	 * @param {String}
	 * @returns {String}
	 * */
	static escapeRegExp(str) {
		return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}
	/** 
	 * 
	 * @param {String}
	 * @param {String}
	 * @param {Number}
	 * @returns {String}
	 * */
	static insertString(a,b,pos) {
		return [a.slice(0, pos), b, a.slice(pos)].join('')
	}
	/** 
	 * 
	 * @param {Array}
	 * @param {String}
	 * @returns {Array}
	 * */
	static removeFromArray(array,el) {
		for (let i=array.length-1; i>=0; i--) {
		    if (array[i] === el) {
		        array.splice(i, 1)
		        // break;       //<-- Uncomment  if only the first term has to be removed
		    }
		}
		return array
	}
	/**
	 * converts a string into a number
	 * @param {String}
	 * @param {Function}
	 * @returns {Number}
	 * */
	static convertStringToNumber(s, f) {
		let n = ''
		for(let i=0; i<s.toString().length; i++) 
			n = n + s.toString().charCodeAt(i)
		if(typeof f == 'function') {
			return f(parseInt(n))
		}else{
			return n
		}
	}
	// ----- DIVISORS
	
	/**
	 *
	 * @param {Number}
	 * @returns {String}
	 * */
	static divNine(n,d) {
		let re = [], csum = 0;
		for(let i=0; i<n.toString().length; i++) 
			re.push(n.toString().substring(i,i+1))
		for(let i=0; i<re.length; i++)
			csum += parseInt(re[i])
		if (Helpers.isInteger(csum/9))
			return s34 + (csum/9)
		return false
	}
	/**
	 *
	 * @param {Number}
	 * @returns {String}
	 * */
	static divThree(n,d) {
		let re = [], csum = 0;
		for(let i=0; i<n.toString().length; i++) 
			re.push(n.toString().substring(i,i+1))
		for(let i=0; i<re.length; i++)
			csum += parseInt(re[i])
		if (Helpers.isInteger(csum/3))
			return s35 + (csum/3)
		return false
	}
}

/**
 * @returns {String}
 * * */
Number.prototype.toHex = function() {
	hexString = this.toString(16);
	if (hexString.length % 2) {
	    hexString = '0' + hexString;
	}
	return hexString
}
/** 
 * replace multiple instances of a string
 * @param {String} haystack
 * @param {String} needle
 * @returns {String}
 * */
String.prototype.replaceAll = function(search, replacement) {
    var target = this
    var regex
    try {
    	regex = RegExp(Helpers.escapeRegExp(search), 'g');
    } catch(e) {
    	console.log('error',regex,search,target);
    	return this;
    }
    return target.replace(regex, replacement);
};