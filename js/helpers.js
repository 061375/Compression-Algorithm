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
		
		let _re = str.replace(new RegExp(Helpers.escapeRegExp(find.trim()), 'g'),re);
		/*
		console.log('_________________');
		console.log(find);
		console.log(re);
		console.log(_re);
		console.log('##################');
		*/
		return _re;
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
	static escapeRegExp(str) {
    	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
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